import Link from "next/link";
import styles from "./style.module.scss";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/">
        Frontend Portfolio
      </Link>
      <nav className={styles.navigation} aria-label="주요 메뉴">
        {navigationItems.map((item) => (
          <Link className={styles.navigationLink} href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
