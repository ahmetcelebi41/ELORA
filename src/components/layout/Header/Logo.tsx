import Link from "next/link";

import { site } from "@/data/site";

import styles from "./Header.module.css";

export function Logo() {
  return (
    <Link
      aria-label={`${site.name} ana sayfa`}
      className={styles.logo}
      href="/"
    >
      {site.name.toLocaleUpperCase("tr-TR")}
    </Link>
  );
}
