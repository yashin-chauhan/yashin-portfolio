import {
  PersonaConfig,
  PersonaMode,
  Project,
  ArchNode,
  CareerItem,
  TechStackCategory,
  EstimatorOption,
  ContactInfo,
  SocialLink,
  TerminalCommand,
} from "@/types";

export const PERSONA_DATA: Record<PersonaMode, PersonaConfig> = {
  hybrid: {
    mode: "hybrid",
    badge: "⚡ Full-Stack Product Engineer & SaaS Architect",
    tagline: "Shipping Production Software with Zero-BS Architecture",
    headline:
      "Engineering robust full-stack SaaS systems with zero-defect financial ledgers & sub-millisecond edge APIs.",
    subheadline:
      "5+ years of production experience architecting end-to-end web & mobile applications for high-growth startups and global enterprises.",
    primaryCta: {
      label: "Explore Case Studies",
      href: "#projects",
    },
    secondaryCta: {
      label: "System Architecture",
      href: "#architecture",
    },
    metrics: [
      {
        value: "5+ Years",
        label: "Engineering Experience",
        subtext: "Web, Mobile & Distributed Systems",
      },
      {
        value: "20+",
        label: "Shipped Projects",
        subtext: "Commercial SaaS & ERP Systems",
      },
      {
        value: "99.98%",
        label: "Production Uptime",
        subtext: "Fault-Tolerant Microservices",
      },
      {
        value: "<8ms",
        label: "p99 Query Latency",
        subtext: "Indexed SQL UNION Optimizations",
      },
    ],
  },
  recruiter: {
    mode: "recruiter",
    badge: "🎯 Senior Full-Stack / Staff-Track Engineer",
    tagline: "Production-Proven Next.js 15, NestJS, TypeScript & Database Scalability",
    headline:
      "Senior Full-Stack Engineer specializing in high-throughput distributed backends and reactive React/Next.js frontends.",
    subheadline:
      "Deep expertise in PostgreSQL integer-arithmetic state machines, distributed queue architectures (Redis BullMQ), microservices, and modern TypeScript toolchains.",
    primaryCta: {
      label: "Download Resume (PDF)",
      href: "/resume.pdf",
    },
    secondaryCta: {
      label: "Inspect Tech Stack",
      href: "#stack",
    },
    metrics: [
      {
        value: "5+ Years",
        label: "Commercial Engineering",
        subtext: "Enterprise & Scale (Bakuun, GlobalLogic)",
      },
      {
        value: "0%",
        label: "Ledger Float Drift",
        subtext: "Strict Integer Paise State Machine",
      },
      {
        value: "<300ms",
        label: "PDF Gen Latency",
        subtext: "Vector Buffer Optimization",
      },
      {
        value: "100%",
        label: "Type Safe Contracts",
        subtext: "Strict Next.js 15 + NestJS 11",
      },
    ],
  },
  agency: {
    mode: "agency",
    badge: "🚀 High-Velocity Product Studio & Technical Partner",
    tagline: "From Zero to Shipped SaaS: Turn Your Complex Vision into a Revenue Engine",
    headline:
      "Building revenue-generating SaaS platforms, custom enterprise ERPs, and lightning-fast cross-platform mobile apps.",
    subheadline:
      "Full-cycle product development with fixed-scope delivery, rigorous QA, rock-solid security, and automated CI/CD pipelines.",
    primaryCta: {
      label: "Instant Project Estimator",
      href: "#estimator",
    },
    secondaryCta: {
      label: "Schedule Tech Call",
      href: "#contact",
    },
    metrics: [
      {
        value: "100%",
        label: "On-Time MVP Delivery",
        subtext: "Agile 2-Week Sprints & Milestones",
      },
      {
        value: "4x",
        label: "Faster Time-to-Market",
        subtext: "Battle-Tested Modular Frameworks",
      },
      {
        value: "20+",
        label: "Successful Launches",
        subtext: "High-Ticket Client Systems",
      },
      {
        value: "24/7",
        label: "Direct Architect Access",
        subtext: "Zero Middleman Communication",
      },
    ],
  },
  client: {
    mode: "agency",
    badge: "🚀 High-Velocity Product Studio & Technical Partner",
    tagline: "From Zero to Shipped SaaS: Turn Your Complex Vision into a Revenue Engine",
    headline:
      "Building revenue-generating SaaS platforms, custom enterprise ERPs, and lightning-fast cross-platform mobile apps.",
    subheadline:
      "Full-cycle product development with fixed-scope delivery, rigorous QA, rock-solid security, and automated CI/CD pipelines.",
    primaryCta: {
      label: "Instant Project Estimator",
      href: "#estimator",
    },
    secondaryCta: {
      label: "Schedule Tech Call",
      href: "#contact",
    },
    metrics: [
      {
        value: "100%",
        label: "On-Time MVP Delivery",
        subtext: "Agile 2-Week Sprints & Milestones",
      },
      {
        value: "4x",
        label: "Faster Time-to-Market",
        subtext: "Battle-Tested Modular Frameworks",
      },
      {
        value: "20+",
        label: "Successful Launches",
        subtext: "High-Ticket Client Systems",
      },
      {
        value: "24/7",
        label: "Direct Architect Access",
        subtext: "Zero Middleman Communication",
      },
    ],
  },
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "rentkhata",
    slug: "rentkhata",
    title: "RentKhata",
    subtitle: "Double-Entry Financial SaaS & Multi-Tenant Tenancy Engine",
    category: "Financial SaaS / FinTech",
    tagline: "Zero-float double-entry accounting engine with cross-platform synchronization.",
    role: "Lead Architect & Full-Stack Engineer",
    year: "2024 - 2025",
    featured: true,
    liveUrl: "https://rentkhata.vercel.app",
    githubUrl: "https://github.com/yashin-chauhan/rentkhata",
    coverGradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
    accentColor: "#10b981",
    clientView: {
      stats: [
        { value: "₹0 Float Drift", label: "Precision Ledger" },
        { value: "<15ms", label: "Dashboard TTFB" },
        { value: "100%", label: "Offline Sync (Expo 52)" },
        { value: "50k+", label: "Monthly Transactions" },
      ],
      description:
        "RentKhata is a multi-tenant property & tenancy financial management platform designed to eliminate bookkeeping errors. Powered by an immutable double-entry ledger that operates strictly on integer paise arithmetic, ensuring absolute mathematical certainty.",
      features: [
        "Immutable double-entry financial ledger guaranteeing exact credit-debit equality across all tenant accounts.",
        "Multi-tenant landlord-property isolation with Supabase PostgreSQL Row-Level Security (RLS).",
        "Automated utility splits, recurring rent invoices, late-fee accruals, and security deposit reconciliations.",
        "Asynchronous PDF rent receipt generation and automated WhatsApp payment reminder triggers.",
        "Cross-platform mobile application with biometric lock and optimistic offline mutations.",
      ],
    },
    engView: {
      highlights: [
        "Engineered immutable double-entry accounting engine using integer paise arithmetic to eliminate IEEE 754 floating-point rounding errors.",
        "Partitioned multi-tenant context at the NestJS 11 / Fastify 5 gateway with JWT tenant claims and Supabase PostgreSQL RLS policies.",
        "Built background document generation pipeline using Redis BullMQ and headless rendering, processing rent invoices asynchronously in <200ms.",
        "Synchronized state between Next.js 15 web client and React Native Expo 52 mobile client with TanStack Query and optimistic offline mutations.",
      ],
      techStack: [
        "Next.js 15 (App Router)",
        "NestJS 11",
        "Fastify 5",
        "PostgreSQL (Supabase)",
        "Prisma 7",
        "Redis BullMQ",
        "React Native (Expo 52)",
        "TypeScript",
        "Tailwind CSS",
      ],
      latency: "<12ms p99 Core Ledger",
      architectureSummary:
        "Event-driven decoupled microservices architecture with Next.js 15 edge frontends, Fastify-backed NestJS API gateway, and transactional PostgreSQL storage.",
    },
  },
  {
    id: "compass-erp",
    slug: "compass-erp",
    title: "Compass Transport ERP",
    subtitle: "Multi-Branch Freight Hub & Fleet Logistics Engine",
    category: "Enterprise ERP & Logistics",
    tagline: "High-throughput freight dispatching and sub-300ms Lorry Receipt generator.",
    role: "Full-Stack System Architect",
    year: "2023",
    featured: true,
    liveUrl: "https://compasstransport.in",
    githubUrl: "https://github.com/yashin-chauhan/compass-transport-showcase",
    coverGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "#06b6d4",
    clientView: {
      stats: [
        { value: "<300ms", label: "PDF LR Generator" },
        { value: "15+", label: "Connected Hubs" },
        { value: "10,000+", label: "Monthly Consignments" },
        { value: "99.9%", label: "Fleet Dispatch Accuracy" },
      ],
      description:
        "A high-load enterprise logistics ERP built for inter-state freight transport companies. Streamlines consignment booking, multi-stop tracking, automatic Lorry Receipt (LR) generation, and driver payout reconciliations.",
      features: [
        "Sub-300ms Lorry Receipt (LR) and freight manifest generation with barcode indexing.",
        "Multi-branch freight reconciliation with real-time waypoint status updates across transit hubs.",
        "Fleet diesel consumption, toll expense settlement, and driver cash advance reconciliation.",
        "Dynamic tariff matrix calculator based on volumetric weight, freight density, and zone routes.",
        "Role-based dispatch dashboards for branch managers, loading supervisors, and accounting auditors.",
      ],
    },
    engView: {
      highlights: [
        "Optimized DomPDF memory buffers and vector rendering pipelines to cut document generation latency from 3.2s to <280ms under high concurrency.",
        "Architected multi-branch relational schema in MySQL 8 with composite B-tree indexes for multi-criteria consignment tracking.",
        "Implemented atomic transaction locking on vehicle assignment tables to prevent double-booking of freight carriers across simultaneous hub requests.",
        "Designed asynchronous webhook dispatchers for SMS and email dispatch confirmations.",
      ],
      techStack: [
        "Laravel 8",
        "MySQL 8",
        "DomPDF Vector Engine",
        "Redis",
        "Bootstrap 5 / Tailwind",
        "REST API",
        "Docker",
      ],
      latency: "<45ms DB Query / <280ms PDF",
      architectureSummary:
        "Monolithic service with dedicated asynchronous workers, database connection pooling, and optimized vector PDF rendering engine.",
    },
  },
  {
    id: "gti-verification",
    slug: "gti-verification",
    title: "Gems Testing India (GTI)",
    subtitle: "High-Throughput Gemological Verification & Certificate Portal",
    category: "Laboratory Verification & Security",
    tagline: "Sub-8ms anti-counterfeit certificate verification with QR cryptographic hashing.",
    role: "Full-Stack Engineer",
    year: "2022 - 2023",
    featured: true,
    liveUrl: "https://github.com/yashin-chauhan/gems-testing-india-showcase",
    githubUrl: "https://github.com/yashin-chauhan/gems-testing-india-showcase",
    coverGradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accentColor: "#8b5cf6",
    clientView: {
      stats: [
        { value: "<8ms", label: "SQL UNION Verification" },
        { value: "500k+", label: "Certificates Verified" },
        { value: "100%", label: "Counterfeit-Proof QR" },
        { value: "300 DPI", label: "PVC Print Quality" },
      ],
      description:
        "Public verification engine and laboratory reporting system for certified gemstones, diamonds, and precious metals. Generates secure anti-counterfeit PVC card certificates and instant public QR verification.",
      features: [
        "Instant public QR code verification with cryptographic fingerprint check.",
        "High-resolution (300 DPI) PVC plastic card print layout generation for gemological cards.",
        "Spectroscopic analysis data entry and gemstone refractive index calculator.",
        "Historical audit trail with tamper-proof laboratory technician sign-offs.",
        "Bulk laboratory certificate import via batch CSV/Excel processing pipelines.",
      ],
    },
    engView: {
      highlights: [
        "Architected high-speed SQL UNION indexing strategy over multi-million record certificate tables, reducing verification query time to <8ms.",
        "Engineered anti-tamper QR verification pipeline generating vector certificates with encoded SHA-256 validation hashes.",
        "Built exact millimeter-precision printable PVC card templates with custom CSS print stylesheets and CMYK color calibration.",
        "Hardened public verification endpoints against scraping and DDoS attacks using Redis sliding-window rate limiters.",
      ],
      techStack: [
        "Laravel 10",
        "MySQL 8",
        "Redis Cache",
        "Blade",
        "Tailwind CSS",
        "QR Cryptographic Engine",
        "Nginx",
      ],
      latency: "<8ms p99 Public Verification",
      architectureSummary:
        "High-speed indexed relational database with Redis key-value caching layer and rate-limited public verification endpoints.",
    },
  },
  {
    id: "pragya-crop",
    slug: "pragya-crop",
    title: "Pragya Crop Advisory",
    subtitle: "12-Stage Agronomy Lifecycle Engine & Advisory REST API",
    category: "AgriTech & REST API",
    tagline: "Automated agronomy lifecycle tracker with UTF-8 Devanagari regional language engine.",
    role: "Backend & API Architect",
    year: "2023",
    featured: true,
    liveUrl: "https://github.com/yashin-chauhan/pragya-crop-advisory",
    githubUrl: "https://github.com/yashin-chauhan/pragya-crop-advisory",
    coverGradient: "from-amber-500/20 via-emerald-500/10 to-transparent",
    accentColor: "#f59e0b",
    clientView: {
      stats: [
        { value: "12 Stages", label: "Agronomic Lifecycle" },
        { value: "100%", label: "Devanagari UTF-8 Support" },
        { value: "45+", label: "Crop Varieties Covered" },
        { value: "35k+", label: "Farmer Advisory Sessions" },
      ],
      description:
        "An automated crop science lifecycle engine that delivers weather-tailored agronomic recommendations, fertilizer schedules, and pest mitigation alerts in native regional languages across India.",
      features: [
        "12-stage automated crop growth stage tracker (sowing to post-harvest storage).",
        "Localized Devanagari UTF-8 multilingual advisory delivery via low-bandwidth REST APIs.",
        "Dynamic weather-triggered pest and fungal disease alert generation based on humidity & temperature.",
        "Soil nutrient N-P-K recommendation engine based on laboratory soil test input values.",
        "Farmer voice-note and photo diagnosis submission workflow for agronomist review.",
      ],
    },
    engView: {
      highlights: [
        "Constructed structured 12-stage agronomic state machine mapping dynamic climatic conditions to preventative advisory triggers.",
        "Engineered full UTF-8 Devanagari and regional language parsing pipeline across REST APIs with zero Unicode corruption.",
        "Designed geo-fenced weather aggregation service polling micro-climatic satellite feeds and caching forecasts in Redis.",
        "Structured normalized relational schemas supporting complex multi-crop rotational cycles and localized seed variations.",
      ],
      techStack: [
        "Laravel",
        "MySQL 8",
        "Redis",
        "RESTful API",
        "Devanagari UTF-8 Processing",
        "Weather API Integrations",
      ],
      latency: "<25ms API response",
      architectureSummary:
        "State-driven advisory engine with real-time weather ingestion and normalized multilingual relational knowledge base.",
    },
  },
  {
    id: "ysp-university",
    slug: "ysp-university",
    title: "Dr. YSP University Portal & ERP",
    subtitle: "Multi-Campus Academic Governance & Faculty Onboarding ERP",
    category: "Institutional ERP & Governance",
    tagline: "Centralized multi-campus governance platform with automated circular expiration and OTP faculty onboarding.",
    role: "Full-Stack System Architect & Lead Engineer",
    year: "2022 - 2023",
    featured: true,
    liveUrl: "https://uhf.ac.in",
    githubUrl: "https://github.com/yashin-chauhan/ysp-university-showcase",
    coverGradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    accentColor: "#059669",
    clientView: {
      stats: [
        { value: "4+ Colleges", label: "Multi-Campus Hierarchy" },
        { value: "100%", label: "Automated Expiration" },
        { value: "<15ms", label: "Dynamic Matrix Query" },
        { value: "50k+", label: "Monthly Academic Users" },
      ],
      description:
        "A unified institutional portal and faculty onboarding ERP engineered for Dr. Yashwant Singh Parmar University of Horticulture & Forestry (UHF Nauni). Centralizes departmental directories, automated notice/tender archiving, and semester curriculum matrices.",
      features: [
        "Faculty self-service onboarding with async institutional domain filtering and real-time email OTP verification.",
        "Dynamic Faculty-to-Department page-binding engine using global lookup helpers across college websites.",
        "Automated circular, tender, and recruitment vacancy archiving based on submission deadlines.",
        "Dynamic course catalog matrix manager enabling real-time credit-hour updates without code deployments.",
        "Multi-campus navigation engine partitioning constituent colleges, RHR&TS stations, and KVK centers.",
      ],
    },
    engView: {
      highlights: [
        "Constructed dual-tier fail-closed authentication guards (AdminAuth for super-admin console and EmpAuth for faculty self-service).",
        "Engineered automated time-decay query filters archiving expired tenders and recruitment notices without background cron overhead.",
        "Structured normalized multi-campus relational schema in MySQL 8 supporting dynamic department bindings and course syllabi.",
        "Implemented secure AJAX email OTP dispatch pipeline with anti-brute-force rate limiting and institutional domain whitelist.",
      ],
      techStack: [
        "Laravel 8",
        "PHP 8.x",
        "MySQL 8",
        "Bootstrap 4",
        "DataTables",
        "jQuery / AJAX",
        "Nginx / Apache",
      ],
      latency: "<15ms DB Query Latency",
      architectureSummary:
        "Multi-tier MVC architecture with dual session authentication guards, automated temporal date-filtering, and dynamic relational page bindings.",
    },
  },
];

export const ARCHITECTURE_NODES: ArchNode[] = [
  {
    id: "multi-client-layer",
    title: "Multi-Client Presentation Layer",
    subtitle: "Next.js 15 (Edge SSR/RSC) & React Native Expo 52",
    tech: "Next.js 15 App Router, React 19, Expo SDK 52, TanStack Query, Tailwind CSS",
    latency: "<15ms TTFB (Edge CDN)",
    details:
      "Server-side rendered web application with React Server Components (RSC) and cross-platform native iOS/Android mobile client. Features optimistic UI updates, persistent offline cache, biometric authentication, and shared TypeScript domain types.",
    resilience:
      "Edge CDN caching, automatic background revalidation, offline AsyncStorage fallbacks with TanStack Query mutation queue.",
    layer: 1,
    status: "operational",
    badge: "Edge Presentation",
    metrics: [
      { label: "Edge TTFB", value: "<15ms" },
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Offline Sync", value: "100% Reliable" },
    ],
    connections: ["api-gateway"],
  },
  {
    id: "api-gateway",
    title: "API Gateway & Multi-Tenant Partitioning",
    subtitle: "NestJS 11 on Fastify 5 High-Throughput HTTP Engine",
    tech: "NestJS 11, Fastify 5, JWT Claims, Supabase Auth, Class Validator, Helmet",
    latency: "<6ms Gateway Overhead",
    details:
      "High-performance API gateway handling tenant context extraction, rate limiting, request validation, and zero-trust authentication. Injects tenant ID into execution context for strict multi-tenant isolation across all downstream services.",
    resilience:
      "Sliding-window Redis rate limiting, automatic request sanitization, circuit breakers, and structured JSON logging with Pino.",
    layer: 2,
    status: "optimized",
    badge: "Security & Routing",
    metrics: [
      { label: "Gateway Overhead", value: "<6ms" },
      { label: "Throughput", value: "15k req/sec" },
      { label: "Auth Isolation", value: "Zero-Trust JWT" },
    ],
    connections: ["double-entry-core", "async-queue-engine"],
  },
  {
    id: "double-entry-core",
    title: "Double-Entry Accounting Core",
    subtitle: "Zero-Float State Machine & Integer Arithmetic",
    tech: "Prisma 7, PostgreSQL Serializable Transactions, Integer Paise Arithmetic, TypeScript State Machine",
    latency: "<12ms Transaction Execution",
    details:
      "Financial transaction engine enforcing double-entry bookkeeping rules where Sum(Debits) === Sum(Credits). All monetary values stored and computed as signed 64-bit integer paise (1 INR = 100 paise), guaranteeing 0% floating-point drift.",
    resilience:
      "PostgreSQL ACID isolation (SERIALIZABLE), cryptographic audit hash chains, idempotent request keys, and automatic rollback on ledger imbalance.",
    layer: 3,
    status: "operational",
    badge: "Zero-Float Core",
    metrics: [
      { label: "Ledger Drift", value: "₹0.00 (Zero Drift)" },
      { label: "ACID Level", value: "SERIALIZABLE" },
      { label: "Audit Precision", value: "100% Immutable" },
    ],
    connections: ["data-persistence", "async-queue-engine"],
  },
  {
    id: "async-queue-engine",
    title: "Distributed Asynchronous Queue & Document Engine",
    subtitle: "Redis BullMQ & Sub-300ms Vector Rendering",
    tech: "Redis BullMQ, DomPDF / Headless Chromium, Node Worker Threads, AWS S3 / Cloudflare R2",
    latency: "<250ms PDF Compilation",
    details:
      "Decoupled asynchronous worker cluster for CPU-heavy tasks: automated invoice generation, rent receipts, bulk WhatsApp/SMS dispatch, and financial reconciliation reports. Offloads HTTP request loop to achieve instantaneous API responses.",
    resilience:
      "Exponential backoff retry policy (5 attempts), dead-letter queues (DLQ), concurrency throttling, and atomic Redis job locks.",
    layer: 4,
    status: "active",
    badge: "Async Processing",
    metrics: [
      { label: "PDF Rendering", value: "<250ms" },
      { label: "Queue Retry Policy", value: "5x Exponential" },
      { label: "Worker Concurrency", value: "Dynamic Scaling" },
    ],
    connections: ["data-persistence"],
  },
  {
    id: "data-persistence",
    title: "Transactional Persistence & Search Engine",
    subtitle: "PostgreSQL 16 (RLS Partitioning) & MySQL 8 (Indexed UNIONs)",
    tech: "PostgreSQL 16 (Supabase), Row-Level Security (RLS), MySQL 8, Redis Cache, Connection Pooling",
    latency: "<4ms p99 Query Latency",
    details:
      "Primary transactional data store with database-level multi-tenant security via Row-Level Security (RLS). Optimized with composite B-tree indices, partitioned ledger tables, and sub-8ms SQL UNION query plans.",
    resilience:
      "Point-in-time recovery (PITR), automated daily backups, read replicas for analytics queries, and connection pooling via PgBouncer.",
    layer: 5,
    status: "operational",
    badge: "Persistence Layer",
    metrics: [
      { label: "p99 Query Latency", value: "<4ms" },
      { label: "Data Integrity", value: "ACID Guaranteed" },
      { label: "Tenant Isolation", value: "Database RLS" },
    ],
    connections: [],
  },
];

export const CAREER_DATA: CareerItem[] = [
  {
    period: "2024 - Present",
    role: "Full-Stack Software Engineer",
    company: "Bakuun",
    location: "Remote / Hybrid",
    current: true,
    points: [
      "Architected and delivered scalable full-stack features using Next.js 15, NestJS, and TypeScript for high-volume enterprise systems.",
      "Engineered distributed background job queues, optimized database schemas, and reduced critical API p99 latency by over 40%.",
      "Collaborated with cross-functional product and design teams to build resilient, accessible, and high-conversion user interfaces.",
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Redis BullMQ",
      "Docker",
      "Tailwind CSS",
    ],
  },
  {
    period: "2023 - 2024",
    role: "Associate Software Engineer",
    company: "GlobalLogic (A Hitachi Group Company)",
    location: "Noida / Delhi NCR, India",
    current: false,
    points: [
      "Developed enterprise-grade web applications, microservices, and secure RESTful APIs under rigorous corporate quality standards.",
      "Implemented robust automated unit and integration test suites, reducing regression rates across production deployments.",
      "Worked closely with global client stakeholders to gather technical requirements and deliver milestone-driven software increments.",
    ],
    techStack: [
      "React",
      "Node.js",
      "TypeScript",
      "SQL",
      "Jest",
      "Git",
      "Jira",
      "CI/CD Pipelines",
    ],
  },
  {
    period: "2022 - 2023",
    role: "Full-Stack Developer",
    company: "Digitally Bird",
    location: "Delhi, India",
    current: false,
    points: [
      "Built and deployed custom SaaS platforms, logistics portals (Compass Transport ERP), institutional governance hubs (Dr. YSP University), and client web applications from conception to production.",
      "Engineered Compass Transport ERP with high-speed Lorry Receipt generation and multi-branch inventory tracking.",
      "Optimized relational database queries, indexing strategies, and server-side rendering for optimal Core Web Vitals.",
    ],
    techStack: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "REST APIs",
      "Bootstrap",
      "Linux / Nginx",
    ],
  },
  {
    period: "2021 - 2022",
    role: "Junior Web Developer",
    company: "Native Developers",
    location: "Delhi, India",
    current: false,
    points: [
      "Developed custom client websites, laboratory verification portals (Gems Testing India), and dynamic database-driven applications.",
      "Built responsive frontend user interfaces, custom CMS integrations, and secure authentication workflows.",
      "Integrated third-party payment gateways, SMS notification webhooks, and automated PDF reporting utilities.",
    ],
    techStack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5 / CSS3",
      "WordPress",
      "jQuery",
      "Git",
    ],
  },
];

export const TECH_STACK_CATEGORIES: TechStackCategory[] = [
  {
    id: "frontend",
    category: "Frontend & Client Architecture",
    description: "Reactive, accessible, and performant user interfaces with sub-second page loads.",
    skills: [
      { name: "Next.js 15 (App Router)", proficiency: 96, level: "Expert / Daily Driver", tag: "Core" },
      { name: "React 19 / RSC", proficiency: 98, level: "Expert", tag: "Core" },
      { name: "TypeScript", proficiency: 95, level: "Advanced", tag: "Core" },
      { name: "Tailwind CSS & Shadcn UI", proficiency: 98, level: "Expert", tag: "Styling" },
      { name: "Framer Motion", proficiency: 90, level: "Advanced", tag: "Animation" },
      { name: "TanStack Query / Zustand", proficiency: 92, level: "Advanced", tag: "State" },
    ],
  },
  {
    id: "backend",
    category: "Backend & Systems Engineering",
    description: "High-throughput APIs, clean architectural patterns, and resilient microservices.",
    skills: [
      { name: "NestJS 11", proficiency: 94, level: "Expert", tag: "Enterprise" },
      { name: "Fastify 5 / Node.js", proficiency: 95, level: "Expert", tag: "Performance" },
      { name: "Laravel 10 / 8", proficiency: 92, level: "Advanced", tag: "PHP Ecosystem" },
      { name: "RESTful & GraphQL APIs", proficiency: 96, level: "Expert", tag: "API Design" },
      { name: "Redis BullMQ Queues", proficiency: 90, level: "Advanced", tag: "Distributed" },
      { name: "Double-Entry Accounting Engines", proficiency: 96, level: "Specialist", tag: "FinTech" },
    ],
  },
  {
    id: "database",
    category: "Databases, Caching & Cloud",
    description: "ACID-compliant storage, indexing strategies, and database-level security.",
    skills: [
      { name: "PostgreSQL 16 (Supabase)", proficiency: 94, level: "Expert", tag: "SQL" },
      { name: "MySQL 8 (UNION Optimization)", proficiency: 95, level: "Expert", tag: "SQL" },
      { name: "Prisma 7 ORM", proficiency: 92, level: "Advanced", tag: "Type-Safe DB" },
      { name: "Redis Caching & Pub/Sub", proficiency: 90, level: "Advanced", tag: "In-Memory" },
      { name: "Row-Level Security (RLS)", proficiency: 92, level: "Advanced", tag: "Security" },
      { name: "AWS S3 / Cloudflare R2", proficiency: 88, level: "Proficient", tag: "Storage" },
    ],
  },
  {
    id: "mobile-devops",
    category: "Mobile, DevOps & Tooling",
    description: "Cross-platform mobile delivery, containerization, and modern developer workflows.",
    skills: [
      { name: "React Native (Expo SDK 52)", proficiency: 90, level: "Advanced", tag: "Mobile" },
      { name: "Docker & Containerization", proficiency: 86, level: "Proficient", tag: "DevOps" },
      { name: "Git & GitHub Actions CI/CD", proficiency: 92, level: "Advanced", tag: "Automation" },
      { name: "Linux / Nginx Configuration", proficiency: 88, level: "Proficient", tag: "Infra" },
      { name: "DomPDF & Vector Generation", proficiency: 96, level: "Specialist", tag: "Documents" },
      { name: "Vercel / Cloudflare Edge", proficiency: 94, level: "Expert", tag: "Deployment" },
    ],
  },
];

export const ESTIMATOR_OPTIONS: EstimatorOption[] = [
  // Project Scope
  {
    id: "scope-mvp",
    category: "scope",
    title: "High-Speed MVP Launch",
    description: "Core features, clean architecture, responsive UI, authentication, database setup, and production deployment.",
    priceInr: 65000,
    priceUsd: 900,
    timeDays: 14,
    selectedByDefault: true,
    isMultiSelect: false,
  },
  {
    id: "scope-full",
    category: "scope",
    title: "Complete Commercial SaaS Product",
    description: "Multi-tenant architecture, payment gateways, role-based access control, analytics dashboard, automated emails & admin panel.",
    priceInr: 135000,
    priceUsd: 1850,
    timeDays: 30,
    selectedByDefault: false,
    isMultiSelect: false,
  },
  {
    id: "scope-enterprise",
    category: "scope",
    title: "Enterprise Platform & Custom ERP",
    description: "Multi-branch synchronization, distributed background queues, sub-second document engines, custom state machines, and SLA support.",
    priceInr: 250000,
    priceUsd: 3400,
    timeDays: 60,
    selectedByDefault: false,
    isMultiSelect: false,
  },

  // Platform Target
  {
    id: "platform-web",
    category: "platform",
    title: "Next.js 15 Web Application (Edge / SSR)",
    description: "Full responsive web platform optimized for desktop, tablet, and mobile browsers with 99+ Lighthouse score.",
    priceInr: 0,
    priceUsd: 0,
    timeDays: 0,
    selectedByDefault: true,
    isMultiSelect: false,
  },
  {
    id: "platform-mobile-addon",
    category: "platform",
    title: "React Native Cross-Platform App (iOS & Android)",
    description: "Native mobile app with Expo 52, offline caching, biometric authentication, and push notifications.",
    priceInr: 45000,
    priceUsd: 600,
    timeDays: 10,
    selectedByDefault: false,
    isMultiSelect: false,
  },

  // Add-on Modules
  {
    id: "mod-double-entry",
    category: "modules",
    title: "Double-Entry Ledger & Financial Engine",
    description: "Zero-drift integer paise ledger, immutable transaction audit trails, and automatic balance reconciliations.",
    priceInr: 28000,
    priceUsd: 380,
    timeDays: 5,
    selectedByDefault: false,
    isMultiSelect: true,
  },
  {
    id: "mod-pdf-generator",
    category: "modules",
    title: "Sub-300ms PDF & Vector Receipt Engine",
    description: "High-speed printable invoice and certificate generator with barcode / QR verification hashing.",
    priceInr: 18000,
    priceUsd: 250,
    timeDays: 3,
    selectedByDefault: false,
    isMultiSelect: true,
  },
  {
    id: "mod-multi-tenant-rls",
    category: "modules",
    title: "Multi-Tenant RLS & Zero-Trust Auth",
    description: "Database-level Row-Level Security, organization partitioning, and granular role permissions.",
    priceInr: 22000,
    priceUsd: 300,
    timeDays: 4,
    selectedByDefault: false,
    isMultiSelect: true,
  },
  {
    id: "mod-async-queues",
    category: "modules",
    title: "Redis BullMQ Async Background Queues",
    description: "Distributed job processing, automatic retry strategies, webhook dispatches, and email/SMS alerts.",
    priceInr: 20000,
    priceUsd: 280,
    timeDays: 4,
    selectedByDefault: false,
    isMultiSelect: true,
  },

  // Timeline Urgency
  {
    id: "timeline-standard",
    category: "timeline",
    title: "Standard Pace (Thorough Quality)",
    description: "Structured 2-week milestones, regular video demos, and comprehensive test coverage.",
    priceInr: 0,
    priceUsd: 0,
    timeDays: 0,
    selectedByDefault: true,
    isMultiSelect: false,
  },
  {
    id: "timeline-expedited",
    category: "timeline",
    title: "Expedited Turbo Sprint (2x Speed)",
    description: "High-priority development sprint with daily builds and accelerated delivery schedule.",
    priceInr: 25000,
    priceUsd: 350,
    timeDays: -7,
    selectedByDefault: false,
    isMultiSelect: false,
  },
];

export const CONTACT_INFO: ContactInfo = {
  name: "Yashin Chauhan",
  title: "Full-Stack Software Developer & SaaS Architect",
  email: "yashin123786@gmail.com",
  location: "Delhi, India",
  github: "https://github.com/yashin-chauhan",
  linkedin: "https://www.linkedin.com/in/yashin-chauhan/",
  phone: "+91 79828 29013",
  availability: "Open for Full-Time Roles, Staff Engineering & High-Impact Consulting",
  timezone: "IST (UTC +5:30) • Open to Global Overlap",
  bio: "5+ years experienced Full-Stack Software Developer passionate about architecting resilient web applications, double-entry financial systems, and high-performance APIs. Creator of RentKhata.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yashin-chauhan",
    handle: "yashin-chauhan",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yashin-chauhan/",
    handle: "yashin-chauhan",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:yashin123786@gmail.com",
    handle: "yashin123786@gmail.com",
    icon: "Mail",
  },
];

export const TERMINAL_COMMANDS: TerminalCommand[] = [
  {
    command: "help",
    description: "List all available interactive CLI commands",
    output: [
      "Available Terminal Commands:",
      "  whoami      - Display engineer bio and current status",
      "  stack       - Inspect full production technology stack",
      "  projects    - List featured production case studies & metrics",
      "  rentkhata   - Deep-dive into the RentKhata double-entry engine",
      "  experience  - View full career history & enterprise roles",
      "  contact     - Get direct email, GitHub, and LinkedIn links",
      "  estimate    - Run instant project cost & timeline calculator",
      "  clear       - Clear terminal console output",
      "  sudo        - Request root developer privileges",
    ],
  },
  {
    command: "whoami",
    description: "Display engineer profile summary",
    output: [
      "Yashin Chauhan // Full-Stack Software Developer & SaaS Architect",
      "Location: Delhi, India (UTC +5:30)",
      "Experience: 5+ Years in Full-Stack Web, Mobile, FinTech & Enterprise Systems",
      "Current Status: Available for Staff/Senior Engineering & High-Ticket SaaS Builds",
      "Specialty: Next.js 15, NestJS 11, Fastify, Double-Entry Ledgers, PostgreSQL RLS",
    ],
  },
  {
    command: "stack",
    description: "Inspect active technology toolchains",
    output: [
      "⚡ Frontend:  Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, TanStack Query",
      "🚀 Backend:   NestJS 11, Fastify 5, Node.js, Laravel 10/8, REST APIs, Redis BullMQ",
      "💾 Database:  PostgreSQL 16 (Supabase RLS), MySQL 8 (Indexed UNIONs), Prisma 7, Redis Cache",
      "📱 Mobile:    React Native (Expo 52), Offline TanStack Mutations, Biometric Auth",
      "🛠️ DevOps:    Docker, GitHub Actions CI/CD, Linux / Nginx, Vercel, Cloudflare",
    ],
  },
  {
    command: "projects",
    description: "List featured case studies",
    output: [
      "1. RentKhata               - Double-Entry FinTech SaaS (Next.js 15 + NestJS + Expo 52)",
      "2. Compass Transport ERP    - Multi-Branch Logistics Hub & <300ms PDF Generator (Laravel 8 + MySQL 8)",
      "3. Gems Testing India (GTI) - Gemological Verification & <8ms SQL UNION Engine (Laravel 10)",
      "4. Pragya Crop Advisory     - 12-Stage Agronomy State Machine & UTF-8 API (Laravel + Redis)",
      "5. Dr. YSP University ERP   - Multi-Campus Portal & Dynamic Faculty Matrix (Laravel 8 + MySQL 8)",
    ],
  },
  {
    command: "rentkhata",
    description: "Inspect RentKhata architectural specifications",
    output: [
      "=== RENTKHATA FINANCIAL SAAS ARCHITECTURE ===",
      "• Double-Entry Core: Strict integer paise arithmetic (0% IEEE 754 float drift).",
      "• Multi-Tenancy: NestJS 11 + Fastify 5 gateway with Supabase PostgreSQL Row-Level Security.",
      "• Document Pipeline: BullMQ async worker compiling tenant invoices in <200ms.",
      "• Cross-Platform: Next.js 15 web client & React Native Expo 52 client with offline sync.",
    ],
  },
  {
    command: "experience",
    description: "View full career trajectory",
    output: [
      "• [2024 - Present] Bakuun - Full-Stack Software Engineer (Next.js, NestJS, PostgreSQL)",
      "• [2023 - 2024]    GlobalLogic - Associate Software Engineer (React, Node.js, Enterprise APIs)",
      "• [2022 - 2023]    Digitally Bird - Full-Stack Developer (Laravel, MySQL, Compass ERP)",
      "• [2021 - 2022]    Native Developers - Junior Web Developer (PHP, MySQL, GTI Portal)",
    ],
  },
  {
    command: "contact",
    description: "Display direct contact endpoints",
    output: [
      "• Email:    yashin123786@gmail.com",
      "• GitHub:   https://github.com/yashin-chauhan",
      "• LinkedIn: https://www.linkedin.com/in/yashin-chauhan/",
      "• Location: Delhi, India",
    ],
  },
  {
    command: "sudo",
    description: "Root access probe",
    output: "Permission granted: Yashin Chauhan welcomes you to explore the source code!",
  },
];
