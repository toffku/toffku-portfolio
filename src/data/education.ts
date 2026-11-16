export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  status: string;
  distinction?: boolean;
  highlights: string[];
}

export const educationEntries: EducationEntry[] = [
  {
    degree: "BSc (Hons) Software Engineering",
    institution: "University of Strathclyde",
    period: "Sep 2021 – Jun 2026",
    status: "First Class Honours",
    distinction: true,
    highlights: ["Systems Design", "Algorithms & Data Structures", "Mobile Development", "Honours Project"],
  },
  {
    degree: "Foundation Apprenticeship: NPA Software Development",
    institution: "Glasgow Clyde College",
    period: "Aug 2019 – Jun 2021",
    status: "SCQF Level 6",
    highlights: ["Software Development", "Programming Fundamentals", "Problem Solving"],
  },
];
