import Link from "next/link";
import type { Project } from "../../data/mock";
import styles from "./style.module.scss";

type ProjectCardProps = {
  project: Project;
};

const projectTypeLabels: Record<Project["type"], string> = {
  company: "Company Project",
  personal: "Personal Project",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <span>
          {project.period} · {projectTypeLabels[project.type]}
        </span>
      </div>
      <h3 className={styles.title}>
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>
      <p className={styles.summary}>{project.summary}</p>
      <ul className={styles.tags} aria-label={`${project.title} 기술 스택`}>
        {project.tags.map((tag) => (
          <li className={styles.tag} key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
