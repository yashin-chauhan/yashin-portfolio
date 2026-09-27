export type PersonaMode = "hybrid" | "recruiter" | "agency" | "client";

export interface PersonaMetric {
  value: string;
  label: string;
  subtext?: string;
}

export interface PersonaCta {
  label: string;
  href: string;
}

export interface PersonaConfig {
  mode: "hybrid" | "recruiter" | "agency";
  badge: string;
  tagline: string;
  headline: string;
  subheadline: string;
  primaryCta: PersonaCta;
  secondaryCta: PersonaCta;
  metrics: PersonaMetric[];
}

export interface ProjectStat {
  value: string;
  label: string;
  change?: string;
}

export interface ProjectClientView {
  stats: ProjectStat[];
  description: string;
  features: string[];
  headline?: string;
  businessProblem?: string;
  solutionROI?: string[];
  deliverables?: string[];
  liveUrl?: string;
  demoUrl?: string;
}

export interface ProjectEngView {
  highlights: string[];
  techStack: string[];
  latency?: string;
  latencyP99?: string;
  architectureSummary: string;
  architectureHighlight?: string;
  keyDecisions?: string[];
  githubUrl?: string;
  dockerized?: boolean;
}

export interface Project {
  id: string;
  slug?: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  role?: string;
  year?: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  coverGradient?: string;
  accentColor?: string;
  glowColor?: string;
  status?: string;
  metrics?: ProjectStat[];
  clientView: ProjectClientView;
  engView: ProjectEngView;
}

// Alias for backwards compatibility with legacy projects data
export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status?: string;
  featured?: boolean;
  accentColor?: string;
  glowColor?: string;
  metrics: { label: string; value: string; change?: string }[];
  clientView: {
    headline: string;
    businessProblem: string;
    solutionROI: string[];
    deliverables: string[];
    liveUrl: string;
    demoUrl: string;
  };
  engineeringView: {
    architectureHighlight: string;
    techStack: string[];
    latencyP99: string;
    keyDecisions: string[];
    githubUrl: string;
    dockerized?: boolean;
  };
}

export interface ArchNodeMetric {
  label: string;
  value: string;
}

export interface ArchNode {
  id: string;
  title: string;
  subtitle: string;
  tech: string;
  latency: string;
  details: string;
  resilience: string;
  layer: number;
  status?: "operational" | "optimized" | "active";
  metrics?: ArchNodeMetric[];
  connections?: string[];
  badge?: string;
}

// Alias for architecture layers
export interface ArchLayer {
  id: string;
  layerNumber: number;
  name: string;
  category: string;
  shortDescription: string;
  tech: string[];
  latency: string;
  throughput: string;
  adr: {
    title: string;
    context: string;
    decision: string;
    consequences: string[];
  };
  faultTolerance: {
    protocol: string;
    fallback: string;
    monitoring: string;
  };
}

export interface CareerItem {
  period: string;
  role: string;
  company: string;
  location?: string;
  points: string[];
  techStack?: string[];
  current?: boolean;
}

// Alias for career experience
export interface CareerExperience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: string;
  badgeColor: string;
  highlights: string[];
  skills: string[];
}

export interface SkillItem {
  name: string;
  proficiency: number;
  level: string;
  icon?: string;
  tag?: string;
  note?: string;
}

export interface TechStackCategory {
  id: string;
  category: string;
  description: string;
  skills: SkillItem[];
}

// Alias for tech skill categories
export interface TechSkillCategory {
  title: string;
  badge: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface EstimatorOption {
  id: string;
  category: "scope" | "platform" | "modules" | "timeline";
  title: string;
  description: string;
  priceInr: number;
  priceUsd: number;
  timeDays: number;
  selectedByDefault?: boolean;
  isMultiSelect?: boolean;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  phone?: string;
  availability: string;
  timezone: string;
  bio: string;
}

export interface TerminalCommand {
  command: string;
  description: string;
  output: string | string[];
}

export type TerminalLogEntry =
  | { type: "ascii"; lines: string[] }
  | { type: "input"; text: string; command?: string }
  | { type: "output"; lines?: string[]; text?: string }
  | { type: "error"; text?: string; message?: string }
  | { type: "info"; text: string }
  | { type: "success"; text: string };
