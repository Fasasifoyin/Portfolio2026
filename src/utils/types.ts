export type Link = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
  level: number; // 1-5
};

export type SkillGroup = {
  id: string;
  category: string;
  description: string;
  icon: string;
  color: string;
  skills: Skill[];
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  type: string;
  period: string;
  current: boolean;
  achievement?: string;
  bullets: string[];
  stack: string[];
};

export type Project = {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  stack: string[];
  github?: string;
  live?: string;
  featured: boolean;
  status: "live" | "in-progress" | "private";
  highlights: string[];
  icon: string;
  color: string;
};

export type FormState = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

export type Status = "idle" | "loading" | "success" | "error";
