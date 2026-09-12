import type { Metadata } from "next";

import { CareMoments } from "@/components/gallery/CareMoments";
import { EditorialGallery } from "@/components/gallery/EditorialGallery";
import { GalleryAppointmentCta } from "@/components/gallery/GalleryAppointmentCta";
import { GalleryIntro } from "@/components/gallery/GalleryIntro";
import { SpaceDetails } from "@/components/gallery/SpaceDetails";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Galeri | Elora",
  description:
    "Elora’nın bakım alanlarından uygulama anlarına uzanan sakin, özenli ve profesyonel atmosferini keşfedin.",
};

export default function GalleryPage() {
  return (
    <main className={styles.main}>
      <GalleryIntro />
      <EditorialGallery />
      <CareMoments />
      <SpaceDetails />
      <GalleryAppointmentCta />
    </main>
  );
}
