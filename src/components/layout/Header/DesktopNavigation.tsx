import Link from "next/link";

import type { NavigationItem } from "@/data/site";

import styles from "./Header.module.css";

type DesktopNavigationProps = {
  items: readonly NavigationItem[];
};

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  return (
    <nav aria-label="Ana navigasyon" className={styles.desktopNavigation}>
      <ul className={styles.navigationList}>
        {items.map((item) => (
          <li key={item.href}>
            <Link className={styles.navigationLink} href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
