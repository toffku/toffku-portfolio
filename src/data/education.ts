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
  "Systems Design":               "bg-indigo-500/10 text-indigo-400/80 border-indigo-500/20",
  "Algorithms & Data Structures": "bg-cyan-500/10 text-cyan-400/80 border-cyan-500/20",
  "Mobile Development":           "bg-blue-500/10 text-blue-400/80 border-blue-500/20",
  "Honours Project":              "bg-amber-500/10 text-amber-400/80 border-amber-500/20",
  "Software Development":         "bg-green-500/10 text-green-400/80 border-green-500/20",
  "Programming Fundamentals":     "bg-purple-500/10 text-purple-400/80 border-purple-500/20",
  "Problem Solving":              "bg-pink-500/10 text-pink-400/80 border-pink-500/20",
};

export const educationEntries: EducationEntry[] = [
  {
    degree: "BSc (Hons) Software Engineering",
    institution: "University of Strathclyde",
    period: "Sep 2021 – Jun 2026",
    status: "In Progress",
    inProgress: true,
    description:
      "Undergraduate degree covering software engineering principles, systems design, algorithms, and full-stack development.",
    highlights: ["Systems Design", "Algorithms & Data Structures", "Mobile Development", "Honours Project"],
  },
  {
    degree: "Foundation Apprenticeship: NPA Software Development",
    institution: "Glasgow Clyde College",
    period: "Aug 2019 – Jun 2021",
    status: "Completed",
    inProgress: false,
    description:
      "National Progression Award in Software Development, building foundational programming and problem-solving skills.",
    highlights: ["Software Development", "Programming Fundamentals", "Problem Solving"],
  },
];
