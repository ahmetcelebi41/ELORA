import type { ReactNode } from "react";

import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  alignment?: "left" | "center";
  className?: string;
  description?: ReactNode;
  eyebrow?: ReactNode;
  title: ReactNode;
  titleId?: string;
};

export function SectionHeading({
  alignment = "left",
  className,
  description,
  eyebrow,
  title,
  titleId,
}: SectionHeadingProps) {
  const classes = [
    styles.heading,
    alignment === "center" ? styles.center : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title} id={titleId}>
        {title}
      </h2>
      {description ? (
        <p className={styles.description}>{description}</p>
      ) : null}
    </header>
  );
}
