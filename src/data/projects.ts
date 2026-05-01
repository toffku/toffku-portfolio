export interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string | null;
  featured: boolean;
}

export const tagColors: Record<string, string> = {
  "TypeScript":   "bg-blue-500/10 text-blue-400/80 border-blue-500/20",
  "JavaScript":   "bg-yellow-400/10 text-yellow-400/80 border-yellow-400/20",
  "React Native": "bg-cyan-500/10 text-cyan-400/80 border-cyan-500/20",
  "Expo":         "bg-indigo-500/10 text-indigo-400/80 border-indigo-500/20",
  "Node.js":      "bg-green-500/10 text-green-400/80 border-green-500/20",
  "SQL":          "bg-amber-500/10 text-amber-400/80 border-amber-500/20",
  "Canvas API":   "bg-pink-500/10 text-pink-400/80 border-pink-500/20",
  "Game Dev":     "bg-purple-500/10 text-purple-400/80 border-purple-500/20",
};

export const projects: Project[] = [
  {
    name: "HPE Parts Validation",
    description:
      "Mobile application for validating and tracking hardware components. Built for Hewlett Packard Enterprise to streamline parts verification workflows across teams.",
    tags: ["TypeScript", "React Native", "SQL"],
    github: null,
    featured: true,
  },
  {
    name: "UCycle",
    description:
      "Cycling route planner mobile application developed as my Honours Project. Integrates route planning features to help cyclists discover and navigate routes.",
    tags: ["TypeScript", "React Native", "Expo"],
    github: "https://github.com/toffku/UCycle",
    featured: true,
  },
  {
    name: "simple-pm",
    description:
      "Lightweight project management application with a clean interface for tracking tasks and organising work. Built with a Node.js backend and TypeScript throughout.",
    tags: ["TypeScript", "Node.js"],
    github: "https://github.com/toffku/simple-pm",
    featured: false,
  },
  {
    name: "Onwards to the Past",
    description:
      "Web-based top-down platformer game — a JavaScript rewrite of a game originally created with GML. Runs entirely in the browser with no dependencies.",
    tags: ["JavaScript", "Canvas API", "Game Dev"],
    github: "https://github.com/toffku/onwards-to-the-past-js",
    featured: false,
  },
];
