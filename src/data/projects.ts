export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string | null;
  featured: boolean;
}

export const tagColors: Record<string, string> = {
  TypeScript: "text-blue-400/80",
  JavaScript: "text-yellow-400/80",
  "React Native": "text-cyan-400/80",
  Expo: "text-indigo-400/80",
  "Node.js": "text-green-400/80",
  SQL: "text-amber-400/80",
  "Canvas API": "text-pink-400/80",
  "Game Dev": "text-purple-400/80",
};

export const projects: Project[] = [
  {
    name: "HPE Parts Validation",
    description:
      "Mobile app for validating and tracking hardware components, built for Hewlett Packard Enterprise.",
    tags: ["TypeScript", "React Native", "SQL"],
    github: null,
    featured: true,
  },
  {
    name: "UCycle",
    description:
      "Honours Project:  a cycling route planner using MCDA to personalise route suggestions.",
    tags: ["TypeScript", "React Native", "Expo"],
    github: "https://github.com/toffku/UCycle",
    featured: true,
  },
  {
    name: "simple-pm",
    description:
      "Lightweight task manager with a clean interface. TypeScript throughout, Node.js backend.",
    tags: ["TypeScript", "Node.js"],
    github: "https://github.com/toffku/simple-pm",
    featured: false,
  },
  {
    name: "Onwards to the Past",
    description:
      "Browser-based top-down platformer, rewritten from GML to JavaScript. Zero dependencies.",
    tags: ["JavaScript", "Canvas API", "Game Dev"],
    github: "https://github.com/toffku/onwards-to-the-past-js",
    featured: false,
  },
];
