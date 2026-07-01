import { readFile } from "node:fs/promises";
import path from "node:path";

export type ProjectContentBlock =
  | {
      type: "heading";
      level: 1 | 2 | 3;
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "divider";
    }
  | {
      type: "code";
      language?: string;
      code: string;
    }
  | {
      type: "image";
      alt: string;
      src: string;
    }
  | {
      type: "callout";
      text: string;
    };

const contentDirectory = path.join(process.cwd(), "src/content/projects");

export async function getProjectContent(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  const source = await readFile(filePath, "utf8");

  return parseMdxSource(source);
}

// This parser keeps the current step dependency-light while preserving the MDX file boundary.
function parseMdxSource(source: string): ProjectContentBlock[] {
  const blocks: ProjectContentBlock[] = [];
  const lines = source.split("\n");
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let codeLines: string[] = [];
  let codeLanguage: string | undefined;
  let isReadingCode = false;

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push({ type: "list", items: listItems });
      listItems = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line.startsWith("```")) {
      flushParagraph();
      flushList();

      if (isReadingCode) {
        blocks.push({
          type: "code",
          language: codeLanguage,
          code: codeLines.join("\n"),
        });
        codeLines = [];
        codeLanguage = undefined;
        isReadingCode = false;
      } else {
        codeLanguage = line.replace("```", "").trim() || undefined;
        isReadingCode = true;
      }

      continue;
    }

    if (isReadingCode) {
      codeLines.push(rawLine);
      continue;
    }

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line === "---") {
      flushParagraph();
      flushList();
      blocks.push({ type: "divider" });
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 1, text: line.replace("# ", "") });
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 2, text: line.replace("## ", "") });
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 3, text: line.replace("### ", "") });
      continue;
    }

    if (line.startsWith("#### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", level: 3, text: line.replace("#### ", "") });
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.replace("- ", ""));
      continue;
    }

    if (line.startsWith("> ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "callout", text: line.replace("> ", "") });
      continue;
    }

    const imageMatch = line.match(/^!\[(.*)\]\((.*)\)$/);

    if (imageMatch) {
      flushParagraph();
      flushList();
      blocks.push({ type: "image", alt: imageMatch[1], src: imageMatch[2] });
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  if (isReadingCode && codeLines.length > 0) {
    blocks.push({
      type: "code",
      language: codeLanguage,
      code: codeLines.join("\n"),
    });
  }

  return blocks;
}
