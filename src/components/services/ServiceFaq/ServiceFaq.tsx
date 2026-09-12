"use client";

import { useState } from "react";

import type { ServiceFaqItem } from "@/data/services";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

import styles from "./ServiceFaq.module.css";

type ServiceFaqProps = {
  items: readonly ServiceFaqItem[];
  serviceSlug: string;
};

export function ServiceFaq({ items, serviceSlug }: ServiceFaqProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set());

  function toggleItem(index: number) {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <section className={styles.section} aria-labelledby={`${serviceSlug}-faq-title`}>
      <Container>
        <SectionHeading eyebrow="SIK SORULAN SORULAR" title="Merak ettikleriniz." titleId={`${serviceSlug}-faq-title`} />
        <div className={styles.list}>
          {items.map((item, index) => {
            const isOpen = openItems.has(index);
            const buttonId = `${serviceSlug}-faq-button-${index}`;
            const panelId = `${serviceSlug}-faq-panel-${index}`;

            return (
              <div className={styles.item} key={item.question}>
                <h3 className={styles.questionHeading}>
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className={styles.trigger}
                    id={buttonId}
                    onClick={() => toggleItem(index)}
                    type="button"
                  >
                    <span>{item.question}</span>
                    <span className={styles.indicator} aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                <div aria-labelledby={buttonId} className={styles.panel} hidden={!isOpen} id={panelId} role="region">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
