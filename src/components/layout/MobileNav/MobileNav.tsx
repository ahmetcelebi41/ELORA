"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import type { NavigationItem } from "@/data/site";

import styles from "./MobileNav.module.css";

type MobileNavProps = {
  appointment: NavigationItem;
  items: readonly NavigationItem[];
};

export function MobileNav({ appointment, items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        ref={toggleRef}
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
        className={styles.toggle}
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? (
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      <nav
        aria-label="Mobil navigasyon"
        className={styles.panel}
        hidden={!isOpen}
        id={panelId}
      >
        <ul className={styles.navigationList}>
          {items.map((item) => (
            <li key={item.href}>
              <Link
                className={styles.navigationLink}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          className={styles.appointment}
          href={appointment.href}
          onClick={closeMenu}
        >
          {appointment.label}
        </Button>
      </nav>
    </>
  );
}
