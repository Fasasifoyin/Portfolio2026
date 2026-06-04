export const levelLabel = (level: number) => {
  const map: Record<number, string> = {
    1: "Learning",
    2: "Familiar",
    3: "Comfortable",
    4: "Proficient",
    5: "Expert",
  };
  return map[level] ?? "";
};

export const typeColors: Record<string, string> = {
  "Full-time": "var(--brand)",
  Contract: "var(--brand-secondary)",
  Internship: "#22C55E",
};

export const statusConfig = {
  live: { label: "Live", color: "#22C55E", bg: "rgba(34,197,94,0.1)" },
  "in-progress": {
    label: "In Progress",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.1)",
  },
  private: {
    label: "Private",
    color: "var(--text-muted)",
    bg: "var(--surface)",
  },
};
