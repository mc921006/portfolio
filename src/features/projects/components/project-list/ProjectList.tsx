import type { Project } from "../../data/mock";
import { ProjectCard } from "../project-card/ProjectCard";
import styles from "./style.module.scss";

type ProjectListProps = {
  projects: Project[];
};

export function ProjectList({ projects }: ProjectListProps) {
  const projectGroups = groupProjectsByPeriod(projects);

  return (
    <div className={styles.groups}>
      {projectGroups.map(([period, groupedProjects]) => (
        <section className={styles.group} key={period}>
          <div className={styles.grid}>
            {groupedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function groupProjectsByPeriod(projects: Project[]) {
  const groups = projects.reduce<Record<string, Project[]>>((acc, project) => {
    acc[project.period] = [...(acc[project.period] ?? []), project];
    return acc;
  }, {});

  return Object.entries(groups).sort(([periodA], [periodB]) =>
    periodB.localeCompare(periodA),
  );
}
