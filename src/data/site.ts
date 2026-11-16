import type { ImageMetadata } from "astro";
import avatarSrc from "../assets/images/tk-square.jpg";

export interface SiteMeta {
  title: string;
  description: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  handle: string;
  jobTitle: string;
  employer: string;
  bio: string;
  location: string;
  avatar: ImageMetadata;
  contactIntro: string;
  meta: SiteMeta;
}

export const site: SiteConfig = {
  name: "Kristoff Urcia",
  handle: "toffku",
  jobTitle: "Software Engineer",
  employer: "DTG",
  bio: "Software engineer based in Glasgow, building reliable systems that solve real problems.",
  location: "Glasgow, Scotland",
  avatar: avatarSrc as ImageMetadata,
  contactIntro:
    "Feel free to reach out about software engineering, collaborations, or just a chat about tech.",
  meta: {
    title: "Kristoff Urcia | Software Engineer",
    description:
      "Kristoff Urcia is a Software Engineer in Glasgow building C#/.NET and SQL Server systems for warehouse robot fleets. First Class BSc (Hons) Software Engineering, University of Strathclyde.",
    url: "https://toffku.dev",
  },
};
