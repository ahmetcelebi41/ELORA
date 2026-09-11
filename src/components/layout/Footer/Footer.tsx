import Link from "next/link";

import { Logo } from "@/components/layout/Header/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { site } from "@/data/site";

import styles from "./Footer.module.css";

const brandStatement =
  "Modern bakım uygulamalarını sakin, özenli ve kişiye özel bir deneyimle buluşturuyoruz.";

export function Footer() {
  const { appointment, businessInfo, navigation, social } = site;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <p className={styles.brandStatement}>{brandStatement}</p>
          </div>

          <nav aria-label="Footer menüsü" className={styles.menu}>
            <p className={styles.groupTitle}>Menü</p>
            <ul className={styles.linkList}>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link className={styles.link} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer hizmetler menüsü" className={styles.services}>
            <p className={styles.groupTitle}>Hizmetler</p>
            <ul className={styles.linkList}>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    className={styles.link}
                    href={`/hizmetler/${service.slug}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contact}>
            <p className={styles.groupTitle}>İletişim</p>
            <address className={styles.contactDetails}>
              <span>{businessInfo.address}</span>
              <span>{businessInfo.phone}</span>
              <span>{businessInfo.openingHours}</span>
            </address>
          </div>

          <div className={styles.appointment}>
            <Button href={appointment.href} variant="secondary">
              {appointment.label}
            </Button>
          </div>

          <div aria-label="Sosyal medya" className={styles.social}>
            {social.instagram ? (
              <a className={styles.link} href={social.instagram}>
                Instagram
              </a>
            ) : (
              <span className={styles.quietText}>Instagram</span>
            )}
            {social.facebook ? (
              <a className={styles.link} href={social.facebook}>
                Facebook
              </a>
            ) : null}
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© 2026 Elora. Tüm hakları saklıdır.</p>
          <div className={styles.legalText}>
            <span>Gizlilik Politikası</span>
            <span>Çerez Politikası</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
