export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  /** One or two sentences giving a high-level overview of the role. */
  summary: string;
}

export interface Recognition {
  title: string;
  organisation: string;
  period: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "GSK (Contract via DTG)",
    period: "Sep 2026 – Present",
    current: true,
    summary:
      "Building software for GSK's automated warehouse robots, helping keep the fleet running smoothly and giving teams clearer insight into its performance across sites in the UK and Europe.",
  },
  {
    role: "Graduate Digital Consultant",
    company: "DTG",
    period: "Jun 2026 – Present",
    current: true,
    summary:
      "Delivering digital solutions for pharmaceutical manufacturers as part of DTG's graduate programme. Started on PHASE, DTG's carbon decision platform, helping the team reach launch with stronger automated testing.",
  },
  {
    role: "IT Development Assistant",
    company: "CCL Design",
    period: "Sep 2024 – Sep 2025",
    summary:
      "Year-long industrial placement building internal tools and mobile apps used across CCL Design's UK sites, working with colleagues in the UK and US to take them from idea to release.",
  },
];

export const recognition: Recognition[] = [
  {
    title: "1st place, Game of the Show",
    organisation: "Ubisoft Reflections game jam",
    period: "2019",
  },
  {
    title: "Volunteer Website Administrator",
    organisation: "Immaculate Conception parish",
    period: "2025 – Present",
  },
];
