import styles from "./style.module.scss";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© 2026 Frontend Portfolio</p>
      <p className={styles.note}>Built with Next.js App Router and Sass Modules.</p>
    </footer>
  );
}
