import type { HTMLAttributes, ReactNode } from "react";

import styles from "./Container.module.css";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  const classes = className ? `${styles.container} ${className}` : styles.container;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
