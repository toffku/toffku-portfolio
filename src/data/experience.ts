export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  type: string;
  bullets: string[];
}

export const typeColors: Record<string, string> = {
  "Full-time":   "bg-green-500/10 text-green-400/80 border-green-500/20",
  "Part-time":   "bg-blue-500/10 text-blue-400/80 border-blue-500/20",
  "Competition": "bg-amber-500/10 text-amber-400/80 border-amber-500/20",
};

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Information Technology Development Assistant",
    company: "CCL Design",
    period: "Sep 2024 – Sep 2025",
    type: "Full-time",
    bullets: [
      "Built internal tools and customer-facing apps alongside senior engineers.",
      "Translated business requirements into scalable technical solutions.",
      "Managed deployment cycles and release planning.",
      "Coordinated cross-team communication across global stakeholders.",
    ],
  },
  {
    role: "Site Admin",
    company: "The Immaculate Conception",
    period: "Sep 2025 – Present",
    type: "Part-time",
    bullets: [
      "Manage and maintain the organisation's public-facing website.",
      "Ensure content accuracy, accessibility, and timely updates.",
    ],
  },
  {
    role: "Game Development Competition Winner",
    company: "Ubisoft Reflections",
    period: "Aug 2019",
    type: "Competition",
    bullets: [
      "Won a competitive game development challenge hosted by Ubisoft Reflections.",
      "Designed and shipped a complete prototype under competition constraints.",
    ],
  },
  {
    role: "Crew Member",
    company: "McDonald's",
    period: "Jun 2022 – Sep 2024",
    type: "Part-time",
    bullets: [
      "Delivered high-quality customer service in a fast-paced environment.",
      "Developed strong teamwork, communication, and time management skills.",
    ],
  },
];
