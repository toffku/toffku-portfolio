export interface Engagement {
  title: string;
  context: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  /** Flat bullets for a single-role entry. Wrap metrics in ** to emphasise. */
  bullets?: string[];
  /** Client assignments / products within the same employer. */
  engagements?: Engagement[];
}

export interface Recognition {
  title: string;
  organisation: string;
  period: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "DTG (Digital Technologies Group)",
    period: "Jun 2026 – Present",
    current: true,
    engagements: [
      {
        title: "GSK · SPAR team",
        context: "Current client assignment",
        period: "Sep 2026 – Present",
        current: true,
        bullets: [
          "Develop C#/.NET and Blazor services for a **10-AGV fleet** running **c. 10,000 missions a day**.",
          "Built an intervention tracking system that captures **c. 95% of interventions**, up from 30–40% when logged manually.",
          "Work across SQL Server, BlueBotics Fleet Manager and Kepware OPC in the integration layer.",
          "Analyse AGV data against KPIs and build intervention dashboards for monthly reports.",
          "Supported the **v4 go-live at Aranda (Spain)** and rollouts to Barnard Castle (UK) and Parma (Italy).",
        ],
      },
      {
        title: "PHASE",
        context: "DTG's carbon decision platform for pharmaceutical manufacturers",
        period: "Jun 2026 – Sep 2026",
        bullets: [
          "Joined a 10-person agile team whose merged-story throughput rose **8x** before the August 2026 launch.",
          "Shipped **20+ reviewed pull requests** in Azure DevOps from client requirements set in sprint reviews.",
          "Built a **300-test automated regression suite** and its Azure DevOps CI pipeline over 5 sprints.",
        ],
      },
    ],
  },
  {
    role: "IT Development Assistant",
    company: "CCL Design",
    period: "Sep 2024 – Sep 2025",
    bullets: [
      "Built a full-stack C#/.NET app handling **100+ development requests a month** across all UK sites.",
      "Secured it with Active Directory role-based access and stored procedures for all database writes.",
      "Extended a production React Native app (**5K+ downloads**) that verifies HPE parts by Data Matrix.",
      "Gathered requirements from US and UK sites and turned them into technical specifications.",
      "Supported releases from testing to live deployment, coordinating cross-department sign-offs.",
    ],
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
