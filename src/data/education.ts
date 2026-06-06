export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  status: string;
  inProgress: boolean;
  description: string;
  highlights: string[];
}

export const highlightColors: Record<string, string> = {
  "Systems Design":               "text-indigo-400/80",
  "Algorithms & Data Structures": "text-cyan-400/80",
  "Mobile Development":           "text-blue-400/80",
  "Honours Project":              "text-amber-400/80",
  "Software Development":         "text-green-400/80",
  "Programming Fundamentals":     "text-purple-400/80",
  "Problem Solving":              "text-pink-400/80",
};

export const educationEntries: EducationEntry[] = [
  {
    degree: "BSc (Hons) Software Engineering",
    institution: "University of Strathclyde",
    period: "Sep 2021 – Jun 2026",
    status: "In Progress",
    inProgress: true,
    description:
      "Software engineering programme covering systems design, algorithms, and full-stack development.",
    highlights: ["Systems Design", "Algorithms & Data Structures", "Mobile Development", "Honours Project"],
  },
  {
    degree: "Foundation Apprenticeship: NPA Software Development",
    institution: "Glasgow Clyde College",
    period: "Aug 2019 – Jun 2021",
    status: "Completed",
    inProgress: false,
    description:
      "NPA in Software Development covering foundational programming and problem-solving skills.",
    highlights: ["Software Development", "Programming Fundamentals", "Problem Solving"],
  },
];
