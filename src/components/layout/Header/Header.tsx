import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

import { DesktopNavigation } from "./DesktopNavigation";
import styles from "./Header.module.css";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Logo />
          <DesktopNavigation items={site.navigation} />
          <Button
            className={styles.desktopAppointment}
            href={site.appointment.href}
          >
            {site.appointment.label}
          </Button>
          <MobileNav
            appointment={site.appointment}
            items={site.navigation}
          />
        </div>
      </Container>
    </header>
  );
}
