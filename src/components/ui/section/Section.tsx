import styles from "./style.module.scss";

type SectionProps = {
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function Section({ children, eyebrow, title, description }: SectionProps) {
  return (
    <section className={styles.section}>
      {(eyebrow || title || description) && (
        <div className={styles.header}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          {title && <h2 className={styles.title}>{title}</h2>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
