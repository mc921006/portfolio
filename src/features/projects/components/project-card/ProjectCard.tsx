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
    <Link
      aria-label={`${project.title} 상세 보기`}
      className={styles.card}
      href={`/projects/${project.slug}`}
    >
      <div className={styles.visual} aria-hidden="true">
        <span>{project.title.slice(0, 2)}</span>
      </div>
      <div className={styles.meta}>
        <span>
          {project.period} · {projectTypeLabels[project.type]}
        </span>
        <span>{project.role}</span>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.summary}>{project.summary}</p>
      <ul className={styles.tags} aria-label={`${project.title} 기술 스택`}>
        {project.tags.map((tag) => (
          <li className={styles.tag} key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
