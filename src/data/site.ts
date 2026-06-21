import type { ImageMetadata } from "astro";
import avatarSrc from "../assets/images/tk-square.jpg";

export interface StatChip {
  label: string;
  color: {
    dot: string;
    text: string;
  };
}

export interface Availability {
  available: boolean;
  label: string;
  detailEmphasis: string;
  detail: string;
}

export interface SiteMeta {
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  handle: string;
  bio: string;
  location: string;
  avatar: ImageMetadata;
  availability: Availability;
  stats: StatChip[];
  meta: SiteMeta;
}

export const site: SiteConfig = {
  name: "Kristoff Urcia",
  handle: "toffku",
  bio: "Glasgow-based engineer who loves to code.",
  location: "Glasgow, Scotland",
  avatar: avatarSrc as ImageMetadata,
  availability: {
    available: true,
    label: "Currently building",
    detailEmphasis: "Available for opportunities.",
    detail: "Open to full-time, graduate, and junior roles from 2026 onwards.",
  },
  stats: [
    {
      label: "BSc Software Engineering",
      color: {
        dot: "bg-indigo-400/60",
        text: "text-indigo-300/80",
      },
    },
    {
      label: "1+ YOE",
      color: {
        dot: "bg-amber-400/60",
        text: "text-amber-300/80",
      },
    },
    {
      label: "Glasgow, Scotland",
      color: {
        dot: "bg-sky-400/60",
        text: "text-sky-300/80",
      },
    },
  ],
  meta: {
    title: "Kristoff Urcia | Portfolio",
    description:
      "Software Engineer based in Glasgow. Portfolio showcasing projects in TypeScript, React Native, and web development.",
  },
};
