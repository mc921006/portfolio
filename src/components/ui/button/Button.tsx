import Link from "next/link";
import styles from "./style.module.scss";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: ButtonVariant;
};

export function Button({ children, href, variant = "primary" }: ButtonProps) {
  return (
    <Link className={`${styles.button} ${styles[variant]}`} href={href}>
      {children}
    </Link>
  );
}
