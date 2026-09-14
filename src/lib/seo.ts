import type { Metadata } from "next";

function getSiteUrl() {
  const value = process.env.SITE_URL?.trim();

  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:" ? url : null;
  } catch {
    return null;
  }
}

export const siteUrl = getSiteUrl();
export const isIndexingEnabled = process.env.INDEX_SITE === "true";

export function absoluteUrl(path: string) {
  return siteUrl ? new URL(path, siteUrl).toString() : null;
}

export function canonical(path: string): Metadata["alternates"] {
  const url = absoluteUrl(path);
  return url ? { canonical: url } : undefined;
}
