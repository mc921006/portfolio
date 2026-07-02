import Link from "next/link";
import styles from "./style.module.scss";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.shell}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandMark}>MJ</span>
          <span className={styles.brandText}>MINCHEOL / FE</span>
        </Link>
        <nav className={styles.navigation} aria-label="주요 메뉴">
          {navigationItems.map((item) => (
            <Link className={styles.navigationLink} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
