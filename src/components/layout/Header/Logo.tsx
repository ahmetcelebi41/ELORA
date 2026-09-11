import Image from "next/image";
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
      <Image
        alt=""
        className={styles.logoImage}
        height={50}
        src="/logo/elora-wordmark-selected.png"
        width={150}
      />
    </Link>
  );
}
