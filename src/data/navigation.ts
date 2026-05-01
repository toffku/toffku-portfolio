export interface NavItem {
  id: string;
  label: string;
  icon: string;
  activeClasses: string;
}

export const navItems: NavItem[] = [
  {
    id: "hero",
    label: "Home",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    activeClasses:
      "aria-[current=page]:text-indigo-300 aria-[current=page]:bg-indigo-500/[0.08] aria-[current=page]:border-indigo-400/30",
  },
  {
    id: "education",
    label: "Education",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    activeClasses:
      "aria-[current=page]:text-sky-300 aria-[current=page]:bg-sky-500/[0.08] aria-[current=page]:border-sky-400/30",
  },
  {
    id: "experience",
    label: "Experience",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
    activeClasses:
      "aria-[current=page]:text-amber-300 aria-[current=page]:bg-amber-500/[0.08] aria-[current=page]:border-amber-400/30",
  },
  {
    id: "projects",
    label: "Projects",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    activeClasses:
      "aria-[current=page]:text-violet-300 aria-[current=page]:bg-violet-500/[0.08] aria-[current=page]:border-violet-400/30",
  },
  {
    id: "hire",
    label: "Hire Me",
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    activeClasses:
      "aria-[current=page]:text-emerald-300 aria-[current=page]:bg-emerald-500/[0.08] aria-[current=page]:border-emerald-400/30",
  },
];
