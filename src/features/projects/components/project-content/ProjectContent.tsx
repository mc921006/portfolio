/* eslint-disable @next/next/no-img-element */
import type { ProjectContentBlock } from "../../lib/project-content";
import styles from "./style.module.scss";

type ProjectContentProps = {
  blocks: ProjectContentBlock[];
};

type ContentSection = {
  heading?: Extract<ProjectContentBlock, { type: "heading" }>;
  blocks: ProjectContentBlock[];
};

export function ProjectContent({ blocks }: ProjectContentProps) {
  const sections = createSections(blocks);

  return (
    <div className={styles.content}>
      {sections.map((section, index) => (
        <ProjectSection
          index={index}
          key={section.heading?.text ?? index}
          section={section}
        />
      ))}
    </div>
  );
}

function ProjectSection({
  index,
  section,
}: {
  index: number;
  section: ContentSection;
}) {
  const title = section.heading?.text;
  const isTroubleshooting = title === "트러블 슈팅";

  return (
    <section
      className={`${styles.section} ${isTroubleshooting ? styles.troubleSection : ""}`}
    >
      {section.heading && (
        <header className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className={styles.sectionTitle}>{section.heading.text}</h2>
        </header>
      )}

      {isTroubleshooting ? (
        <TroubleshootingSection blocks={section.blocks} />
      ) : (
        <div className={styles.sectionBody}>
          {renderSectionBlocks(section.blocks, title)}
        </div>
      )}
    </section>
  );
}

function createSections(blocks: ProjectContentBlock[]): ContentSection[] {
  const sections: ContentSection[] = [];
  let currentSection: ContentSection = { blocks: [] };

  for (const block of blocks) {
    if (block.type === "heading" && block.level === 2) {
      if (currentSection.heading || currentSection.blocks.length > 0) {
        sections.push(currentSection);
      }

      currentSection = {
        heading: block,
        blocks: [],
      };
      continue;
    }

    currentSection.blocks.push(block);
  }

  if (currentSection.heading || currentSection.blocks.length > 0) {
    sections.push(currentSection);
  }

  return sections;
}

function renderSectionBlocks(blocks: ProjectContentBlock[], sectionTitle?: string) {
  const groups = createTopicGroups(blocks);

  return groups.map((group, groupIndex) => {
    const key = `${sectionTitle ?? "section"}-${groupIndex}`;

    if (group.heading) {
      return (
        <section className={styles.topic} key={key}>
          <h3 className={styles.subTitle}>{group.heading.text}</h3>
          <div className={styles.topicBody}>
            {group.blocks.map((block, blockIndex) =>
              renderBlock(block, `${key}-${blockIndex}`, sectionTitle),
            )}
          </div>
        </section>
      );
    }

    return group.blocks.map((block, blockIndex) =>
      renderBlock(block, `${key}-${blockIndex}`, sectionTitle),
    );
  });
}

function createTopicGroups(blocks: ProjectContentBlock[]) {
  const groups: Array<{
    heading?: Extract<ProjectContentBlock, { type: "heading" }>;
    blocks: ProjectContentBlock[];
  }> = [];
  let currentGroup: {
    heading?: Extract<ProjectContentBlock, { type: "heading" }>;
    blocks: ProjectContentBlock[];
  } = { blocks: [] };

  for (const block of blocks) {
    if (block.type === "heading" && block.level === 3) {
      if (currentGroup.heading || currentGroup.blocks.length > 0) {
        groups.push(currentGroup);
      }

      currentGroup = { heading: block, blocks: [] };
      continue;
    }

    currentGroup.blocks.push(block);
  }

  if (currentGroup.heading || currentGroup.blocks.length > 0) {
    groups.push(currentGroup);
  }

  return groups;
}

function TroubleshootingSection({ blocks }: { blocks: ProjectContentBlock[] }) {
  const cases = createTroubleshootingCases(blocks);

  return (
    <div className={styles.troubleList}>
      {cases.map((item, index) => (
        <article className={styles.troubleCase} key={`${item.title}-${index}`}>
          <h3 className={styles.troubleTitle}>{item.title}</h3>
          <div className={styles.troubleColumns}>
            {item.problem.length > 0 && (
              <div className={styles.troubleColumn}>
                <span className={styles.troubleLabel}>문제</span>
                {item.problem.map((block, blockIndex) =>
                  renderBlock(block, `problem-${index}-${blockIndex}`),
                )}
              </div>
            )}
            {item.solution.length > 0 && (
              <div className={styles.troubleColumn}>
                <span className={styles.troubleLabel}>해결</span>
                {item.solution.map((block, blockIndex) =>
                  renderBlock(block, `solution-${index}-${blockIndex}`),
                )}
              </div>
            )}
            {item.result.length > 0 && (
              <div className={styles.troubleColumn}>
                <span className={styles.troubleLabel}>결과</span>
                {item.result.map((block, blockIndex) =>
                  renderBlock(block, `result-${index}-${blockIndex}`),
                )}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

function createTroubleshootingCases(blocks: ProjectContentBlock[]) {
  const cases: Array<{
    title: string;
    problem: ProjectContentBlock[];
    solution: ProjectContentBlock[];
    result: ProjectContentBlock[];
  }> = [];
  let currentCase:
    | {
        title: string;
        problem: ProjectContentBlock[];
        solution: ProjectContentBlock[];
        result: ProjectContentBlock[];
      }
    | undefined;
  let activeField: "problem" | "solution" | "result" | undefined;

  for (const block of blocks) {
    if (block.type === "divider") {
      continue;
    }

    if (block.type === "heading" && block.level === 3) {
      if (block.text === "문제") {
        activeField = "problem";
        continue;
      }

      if (block.text === "해결") {
        activeField = "solution";
        continue;
      }

      if (block.text === "결과") {
        activeField = "result";
        continue;
      }

      if (currentCase) {
        cases.push(currentCase);
      }

      currentCase = {
        title: block.text,
        problem: [],
        solution: [],
        result: [],
      };
      activeField = undefined;
      continue;
    }

    if (currentCase && activeField) {
      currentCase[activeField].push(block);
    }
  }

  if (currentCase) {
    cases.push(currentCase);
  }

  return cases;
}

function renderBlock(
  block: ProjectContentBlock,
  key: string,
  sectionTitle?: string,
) {
  if (block.type === "heading" && block.level === 1) {
    return (
      <h1 className={styles.documentTitle} key={key}>
        {block.text}
      </h1>
    );
  }

  if (block.type === "heading" && block.level === 3) {
    return (
      <h3 className={styles.subTitle} key={key}>
        {block.text}
      </h3>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p className={styles.text} key={key}>
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    const isTagList =
      sectionTitle === "핵심 키워드" || sectionTitle === "사용 기술";

    if (isTagList) {
      return (
        <ul className={styles.tagList} key={key}>
          {block.items.map((item) => (
            <li className={styles.tag} key={item}>
              {item}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <ul className={styles.list} key={key}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "divider") {
    return <hr className={styles.divider} key={key} />;
  }

  if (block.type === "code") {
    return (
      <pre className={styles.codeBlock} key={key}>
        <code>{block.code}</code>
      </pre>
    );
  }

  if (block.type === "image") {
    return (
      <figure className={styles.figure} key={key}>
        <img alt={block.alt} className={styles.image} src={block.src} />
      </figure>
    );
  }

  if (block.type === "callout") {
    return (
      <aside className={styles.callout} key={key}>
        {block.text}
      </aside>
    );
  }

  return null;
}
