import { experienceData } from "../../data/experienceData";
import styles from "./style.module.scss";

export function ExperienceList() {
  return (
    <ol className={styles.list}>
      {experienceData.map((experience) => {
        const companyKey = `${experience.period}-${experience.company}`;

        return (
          <li className={styles.item} key={companyKey}>
            <article className={styles.card}>
              <div className={styles.periodColumn}>
                <p className={styles.period}>{experience.period}</p>
              </div>

              <div className={styles.content}>
                <div className={styles.heading}>
                  <h3 className={styles.role}>{experience.role}</h3>
                  <p className={styles.company}>{experience.company}</p>
                </div>

                <p className={styles.description}>{experience.description}</p>

                <div className={styles.stackBlock}>
                  <p className={styles.blockLabel}>Tech Stack</p>
                  <ul className={styles.stackList}>
                    {experience.tech.map((tech) => (
                      <li className={styles.stackTag} key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.projectsBlock}>
                  <p className={styles.blockLabel}>Projects</p>
                  <ul className={styles.projects} aria-label="프로젝트">
                    {experience.projects.map((project) => (
                      <li className={styles.project} key={project.name}>
                        {project.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
