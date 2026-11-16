export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string | null;
}

export const projects: Project[] = [
  {
    name: "Ucycle",
    description:
      "Honours project: a mobile cycling route planner that ranks routes by rider preference using multi-criteria analysis.",
    tags: ["TypeScript", "React Native", "Expo"],
    github: "https://github.com/toffku/UCycle",
  },
  {
    name: "Development Request System",
    description:
      "Full-stack app managing development requests across CCL Design's UK sites, with role-based access.",
    tags: ["C#", ".NET", "SQL Server"],
    github: null,
  },
  {
    name: "HPE Parts Validation",
    description:
      "Production mobile app that verifies Hewlett Packard Enterprise parts by scanning Data Matrix codes.",
    tags: ["TypeScript", "React Native", "SQL"],
    github: null,
  },
];
