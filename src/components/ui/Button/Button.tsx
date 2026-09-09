import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "text";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ActionProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: never;
  };

type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href"> & {
    href: string;
  };

export type ButtonProps = ActionProps | LinkProps;

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = "primary",
    ...elementProps
  } = props;
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  if ("href" in elementProps && elementProps.href) {
    const { href, ...linkProps } = elementProps;

    return (
      <Link className={classes} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = elementProps as Omit<
    ActionProps,
    keyof CommonProps
  >;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
