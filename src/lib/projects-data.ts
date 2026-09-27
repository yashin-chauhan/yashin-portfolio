import { ProjectData, ArchLayer, CareerExperience, TechSkillCategory } from "@/types";

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: "rentkhata",
    title: "RentKhata",
    subtitle: "Automated Property & Rental Double-Entry Accounting Engine",
    category: "Fintech / PropTech SaaS",
    status: "Production Ready / Enterprise Scaled",
    featured: true,
    accentColor: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.15)",
    metrics: [
      { label: "Ledger Accuracy", value: "100%", change: "Zero reconciliation gaps" },
      { label: "p99 Latency", value: "32ms", change: "Fastify & Redis Cache" },
      { label: "Rent Recovery Rate", value: "+38%", change: "Via automated WhatsApp nudges" },
      { label: "Monthly Invoices", value: "10k+", change: "Automated batch runs" },
    ],
    clientView: {
      headline: "Eliminating Rent Leakage & Landlord-Tenant Friction with Autonomous Ledgers",
      businessProblem:
        "Property management companies and landlords lose up to 14% of annual revenue through untracked rent dues, delayed maintenance charge allocations, and disputed deposit deductions.",
      solutionROI: [
        "Replaced manual spreadsheet accounting with a strict, self-balancing double-entry ledger.",
        "Integrated multi-channel automated payment reminders (WhatsApp, SMS, Email) with dynamic UPI payment links.",
        "Delivered granular tenant onboarding portals with digital KYC and instantaneous automated rent receipts.",
        "Saved property operators an average of 18 hours per property per month in manual bookkeeping.",
      ],
      deliverables: [
        "Multi-tenant SaaS web application with super-admin and tenant portals",
        "Automated PDF rent receipt & tax invoice generator",
        "Role-based access control for property managers, accountants, and tenants",
        "Real-time revenue forecast and overdue rent analytics dashboard",
      ],
      liveUrl: "https://rentkhata.vercel.app",
      demoUrl: "https://github.com/yashin-chauhan/rentkhata",
    },
    engineeringView: {
      architectureHighlight:
        "ACID-compliant double-entry journal engine with cryptographic hash linking, Redis BullMQ event queues, and PostgreSQL Row-Level Security.",
      techStack: [
        "Next.js 15 App Router",
        "TypeScript",
        "NestJS / Fastify",
        "PostgreSQL (Supabase)",
        "Redis BullMQ",
        "Tailwind CSS",
        "Prisma / Drizzle",
      ],
      latencyP99: "32ms",
      keyDecisions: [
        "Engineered ledger transactions using strict pessimistic locking (`SELECT ... FOR UPDATE`) to prevent double-spending in concurrent payments.",
        "Separated write-heavy payment webhook ingestion from read-heavy ledger queries using CQRS patterns.",
        "Implemented BullMQ job workers for idempotent payment webhook processing and automated invoice PDF rendering.",
        "Enforced multi-tenant data isolation at the database layer via PostgreSQL Row Level Security (RLS).",
      ],
      githubUrl: "https://github.com/yashin-chauhan/rentkhata",
      dockerized: true,
    },
  },
  {
    id: "compass-transport",
    title: "Compass Transport ERP",
    subtitle: "High-Throughput Freight Operations & Fleet Management Suite",
    category: "Logistics & Enterprise ERP",
    status: "Active Production Deployment",
    featured: true,
    accentColor: "#06b6d4",
    glowColor: "rgba(6, 182, 212, 0.15)",
    metrics: [
      { label: "Fleet Visibility", value: "Real-time", change: "Sub-second GPS telemetry" },
      { label: "Dispatch Overhead", value: "-65%", change: "Automated route matching" },
      { label: "Consignment Search", value: "<15ms", change: "Indexed PostgreSQL & Redis" },
      { label: "Trip Ledgers", value: "₹4.5Cr+", change: "Audited transport billing" },
    ],
    clientView: {
      headline: "Consolidating 500+ Interstate Truck Dispatches into a Unified Real-Time ERP",
      businessProblem:
        "Freight operators suffered from fragmented WhatsApp dispatching, manual paper bilti (consignment notes) reconciliation, and rampant fuel theft across long-haul interstate corridors.",
      solutionROI: [
        "Digitized end-to-end trip lifecycles: driver assignment, fuel advances, e-Way bill ingestion, and pod uploads.",
        "Reduced consignment query response times from 30 minutes of phone calls to 2 seconds self-serve.",
        "Automated driver expense accounting, preventing over ₹24L in unverified fuel claims in the first 6 months.",
        "Provided executive freight profit-margin analytics per route and vehicle class.",
      ],
      deliverables: [
        "Responsive web ERP for dispatchers, hub managers, and finance officers",
        "Offline-capable mobile-friendly driver pod verification flow",
        "Automated freight bilti & GST invoice generation pipeline",
        "Fuel expense and trip profitability analytics suite",
      ],
      liveUrl: "https://compasstransport.in",
      demoUrl: "https://github.com/yashin-chauhan/compass-transport-showcase",
    },
    engineeringView: {
      architectureHighlight:
        "High-throughput consignment indexing engine with geo-fenced trip checkpoints, idempotent state machines, and microservice audit trails.",
      techStack: [
        "Next.js 15",
        "Node.js / Express",
        "PostgreSQL",
        "Redis",
        "Mapbox Geofencing",
        "Tailwind CSS",
        "Docker",
      ],
      latencyP99: "45ms",
      keyDecisions: [
        "Built finite state machines for trip lifecycles (`PLANNED -> DISPATCHED -> IN_TRANSIT -> DELIVERED -> SETTLED`) to prevent invalid state jumps.",
        "Implemented composite B-Tree indexes on consignment tracking numbers, truck license plates, and GST numbers for instant retrieval.",
        "Integrated AWS S3 pre-signed URLs for zero-load direct upload of heavy Proof-of-Delivery documents from driver smartphones.",
        "Used Redis pub/sub for broadcast updates to the fleet dispatcher board when truck statuses change.",
      ],
      githubUrl: "https://github.com/yashin-chauhan/compass-transport-showcase",
      dockerized: true,
    },
  },
  {
    id: "gems-testing-india",
    title: "Gems Testing India (GTI)",
    subtitle: "High-Security Gemstone Certification Vault & Verification Engine",
    category: "Security & Verification SaaS",
    status: "Live Enterprise Client",
    featured: true,
    accentColor: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.15)",
    metrics: [
      { label: "Verification Latency", value: "<8ms", change: "Edge-cached static lookup" },
      { label: "Certificates Vaulted", value: "50k+", change: "Anti-tamper digital records" },
      { label: "Counterfeit Rate", value: "0%", change: "Cryptographic QR watermarking" },
      { label: "Lab Throughput", value: "3.5x", change: "Bulk barcode scanning" },
    ],
    clientView: {
      headline: "Protecting High-Value Gemological Authenticity with Instant Anti-Tamper Verification",
      businessProblem:
        "The gemstone trading industry is plagued by forged paper certificates and counterfeit gemstone lab reports, eroding buyer trust in high-ticket transactions.",
      solutionROI: [
        "Built an immutable certification record system with secure QR code verification accessible on any smartphone worldwide.",
        "Engineered anti-tamper PDF certificate generation with dynamic cryptographic hash watermarks.",
        "Enabled laboratory gemologists to issue, photograph, and print certified lab cards in under 60 seconds.",
        "Eliminated certificate fraud for over 50,000 certified precious stones.",
      ],
      deliverables: [
        "Instant public gemstone certificate verification web portal",
        "Secure laboratory management backoffice for gemologists",
        "High-resolution micro-photography cataloging tool",
        "Dynamic high-dpi thermal and card printer layout engine",
      ],
      liveUrl: "https://github.com/yashin-chauhan/gems-testing-india-showcase",
      demoUrl: "https://github.com/yashin-chauhan/gems-testing-india-showcase",
    },
    engineeringView: {
      architectureHighlight:
        "Cryptographically hashed document verification engine deployed on global edge CDN with sub-10ms lookup times.",
      techStack: [
        "React / Next.js",
        "Node.js",
        "PostgreSQL",
        "AWS S3 CloudFront",
        "Puppeteer PDF Engine",
        "Tailwind CSS",
      ],
      latencyP99: "8ms",
      keyDecisions: [
        "Employed SHA-256 digital fingerprinting of laboratory records to guarantee zero tampering post-issuance.",
        "Edge-cached public verification endpoints using Cloudflare CDN with stale-while-revalidate caching strategies.",
        "Implemented high-concurrency PDF rendering pipeline with headless Chromium worker pools.",
        "Designed responsive, high-density print stylesheets for physical laboratory credit-card certificates.",
      ],
      githubUrl: "https://github.com/yashin-chauhan/gems-testing-india-showcase",
      dockerized: true,
    },
  },
  {
    id: "pragya-agritech",
    title: "Pragya AgriTech",
    subtitle: "AI-Powered Smart Farming Advisory & Direct Commodity Marketplace",
    category: "AgriTech & Direct Marketplace",
    status: "Production Scaled",
    featured: true,
    accentColor: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.15)",
    metrics: [
      { label: "Active Farmers", value: "15k+", change: "Regional onboarding" },
      { label: "Mandi Price Accuracy", value: "99.4%", change: "Real-time scrapers & feeds" },
      { label: "Intermediary Fee", value: "0%", change: "Direct buyer-to-farmer trade" },
      { label: "Multilingual Support", value: "5 Languages", change: "Hindi, Punjabi, English+" },
    ],
    clientView: {
      headline: "Empowering Rural Farmers with Live Market Intelligence & Direct Buyer Access",
      businessProblem:
        "Smallholder farmers face severe price exploitation from local middlemen due to information asymmetry regarding live mandi commodity rates and unscientific crop disease diagnoses.",
      solutionROI: [
        "Delivered live daily mandi price discovery across 200+ regional agricultural markets.",
        "Integrated AI-assisted crop disease identification from simple smartphone camera uploads.",
        "Created a direct zero-commission marketplace connecting farmers with bulk commercial buyers.",
        "Increased average farmer realization price by 22% on harvest sales.",
      ],
      deliverables: [
        "Lightweight multilingual progressive mobile and web platform",
        "Live Mandi price ticker and historical price trend analytics",
        "Crop calendar advisory with localized weather alerts",
        "Direct verified buyer connection directory",
      ],
      liveUrl: "https://github.com/yashin-chauhan/pragya-crop-advisory",
      demoUrl: "https://github.com/yashin-chauhan/pragya-crop-advisory",
    },
    engineeringView: {
      architectureHighlight:
        "Offline-first mobile architecture with FastAPI crop diagnostic microservices and asynchronous market data aggregators.",
      techStack: [
        "React Native / Expo",
        "Next.js 15",
        "Python FastAPI",
        "PostgreSQL",
        "Redis Cache",
        "Tailwind CSS",
      ],
      latencyP99: "55ms",
      keyDecisions: [
        "Built resilient offline-first caching on the client with IndexedDB / SQLite for low-connectivity rural zones.",
        "Constructed distributed background scrapers with exponential backoff to ingest APMC mandi price bulletins hourly.",
        "Optimized image compression pipeline in client-side Web Workers prior to transmission to conserve rural bandwidth.",
        "Architected localized internationalization (i18n) layer supporting Hindi, Punjabi, and English seamlessly.",
      ],
      githubUrl: "https://github.com/yashin-chauhan/pragya-crop-advisory",
      dockerized: true,
    },
  },
];

export const ARCH_LAYERS: ArchLayer[] = [
  {
    id: "layer-edge",
    layerNumber: 1,
    name: "Edge Routing & Security Shield",
    category: "edge",
    shortDescription: "Global CDN distribution, TLS termination, WAF rate-limiting, and JWT authentication at edge.",
    tech: ["Cloudflare Edge", "Next.js Edge Middleware", "JWT / JOSE", "Upstash Redis RateLimiter"],
    latency: "2-8 ms",
    throughput: "50,000+ req/sec",
    adr: {
      title: "ADR-001: Edge Authentication & DDoS Mitigation",
      context:
        "High-frequency unauthorized scraping and credential stuffing attacks on public login and verification endpoints.",
      decision:
        "Deploy lightweight JWT validation and IP token-bucket rate limiting directly on edge nodes before hitting the core application cluster.",
      consequences: [
        "Eliminated 94% of malicious traffic before consuming origin server compute.",
        "Sub-10ms response time for unauthenticated and cached requests.",
        "Requires edge-compatible libraries (no native Node.js crypto dependencies in middleware).",
      ],
    },
    faultTolerance: {
      protocol: "Autonomous CDN failover to multi-region origin mirrors with static error payloads.",
      fallback: "Edge-cached read-only replicas served if origin database goes into maintenance.",
      monitoring: "Real-time edge telemetry with Datadog & Prometheus alerts on 5xx spikes > 0.05%.",
    },
  },
  {
    id: "layer-gateway",
    layerNumber: 2,
    name: "API Gateway & Ingestion Proxy",
    category: "gateway",
    shortDescription: "Strict schema validation, idempotency key tracking, rate allocation, and request routing.",
    tech: ["NestJS / Fastify", "Zod Runtime Validation", "Idempotency-Key Header", "OpenAPI Spec"],
    latency: "12-18 ms",
    throughput: "12,000 req/sec",
    adr: {
      title: "ADR-002: Fastify HTTP Engine with Zero-Allocation JSON Parsing",
      context:
        "High-volume webhook ingestion from payment gateways (Razorpay, Stripe) and IoT fleet trackers caused event-loop lag in Express.",
      decision:
        "Migrate to Fastify core with `fast-json-stringify` and Zod type compilation for incoming payload verification.",
      consequences: [
        "Reduced p99 API ingestion latency from 85ms to 14ms.",
        "Halved memory consumption per container under high concurrent load.",
        "Strict input typing prevented malformed ledger mutations at the gateway boundary.",
      ],
    },
    faultTolerance: {
      protocol: "Circuit breaker pattern (hystrix-style) on downstream microservices with 500ms timeout.",
      fallback: "Idempotent write retries buffered in temporary Redis write-ahead buffer.",
      monitoring: "Distributed tracing via OpenTelemetry with baggage propagation.",
    },
  },
  {
    id: "layer-core",
    layerNumber: 3,
    name: "Double-Entry Ledger & State Machine",
    category: "core",
    shortDescription: "ACID transactions, pessimistic concurrency control, journal immutability, and state transitions.",
    tech: ["TypeScript Core Engine", "PostgreSQL Transactions", "Pessimistic Locking", "Event Sourcing"],
    latency: "24-35 ms",
    throughput: "4,500 tx/sec",
    adr: {
      title: "ADR-003: Immutable Double-Entry Ledger Invariant Guarantee",
      context:
        "Financial systems must guarantee zero reconciliation discrepancy under concurrent rent payment webhooks.",
      decision:
        "Enforce strict double-entry accounting where every transaction consists of balanced debit and credit entries with database CHECK constraints.",
      consequences: [
        "Mathematically impossible for funds to appear or disappear without a counter-entry.",
        "Transactions are append-only; reversals require offsetting adjustment entries for full auditability.",
        "Requires explicit pessimistic row locks on account balances during settlement.",
      ],
    },
    faultTolerance: {
      protocol: "Atomic two-phase commit with automatic transaction rollback on invariant breach.",
      fallback: "Dead-letter isolation of suspect transactions with immediate pager alert.",
      monitoring: "Automated continuous ledger balance invariant verifier running every 60 seconds.",
    },
  },
  {
    id: "layer-async",
    layerNumber: 4,
    name: "Asynchronous Queue & Event Pipeline",
    category: "async",
    shortDescription: "Delayed job scheduling, automated invoice generation, webhooks, and WhatsApp message dispatch.",
    tech: ["Redis BullMQ", "Worker Pods", "Puppeteer PDF Engine", "WhatsApp Business API", "SendGrid"],
    latency: "Sub-100ms queue dispatch",
    throughput: "8,000 jobs/min",
    adr: {
      title: "ADR-004: Redis BullMQ for Non-Blocking Heavy Operations",
      context:
        "Generating PDF tax invoices and dispatching WhatsApp reminders blocked the primary HTTP request lifecycle.",
      decision:
        "Offload all PDF generation, email dispatches, and WhatsApp webhook broadcasts to distributed Redis BullMQ worker pools.",
      consequences: [
        "Immediate HTTP 202 Accepted responses returned to clients within 20ms.",
        "Built-in exponential backoff retry mechanism handles external API downtime gracefully.",
        "Independent horizontal scaling of worker pods separate from API web servers.",
      ],
    },
    faultTolerance: {
      protocol: "Exponential backoff with 5 retries and automatic dead-letter queue (DLQ) routing.",
      fallback: "Fallback SMS notification gateway if primary WhatsApp API returns timeout.",
      monitoring: "Bull-Board dashboard monitoring job delay, wait time, and failure rates.",
    },
  },
  {
    id: "layer-persistence",
    layerNumber: 5,
    name: "Data Persistence & Multi-Tenant Isolation",
    category: "persistence",
    shortDescription: "Relational database clustering, Row Level Security (RLS), connection pooling, and automated backups.",
    tech: ["PostgreSQL", "Supabase", "Row-Level Security", "PgBouncer", "Prisma / Drizzle ORM"],
    latency: "4-12 ms query execution",
    throughput: "99.99% Availability",
    adr: {
      title: "ADR-005: Multi-Tenant Data Isolation via Postgres RLS",
      context:
        "SaaS architecture needed strict tenant data separation without the overhead of maintaining thousands of separate databases.",
      decision:
        "Utilize PostgreSQL native Row Level Security (RLS) policies keyed on the verified `tenant_id` session variable.",
      consequences: [
        "Guarantees that a tenant can never access or query another landlord's data, even if an API bug misses a WHERE clause.",
        "Single unified database migration pipeline and simplified horizontal scaling.",
        "Requires PgBouncer transaction-mode connection pooling to set session configs cleanly.",
      ],
    },
    faultTolerance: {
      protocol: "Hot-standby read replica with automated failover via Patroni / managed cloud replica.",
      fallback: "Point-in-time recovery (PITR) with continuous WAL archiving to cloud storage.",
      monitoring: "PgHero and Supabase index optimization tracking slow queries > 50ms.",
    },
  },
];

export const CAREER_HISTORY: CareerExperience[] = [
  {
    id: "bakuun",
    role: "Senior Full-Stack Engineer",
    company: "Bakuun",
    companyUrl: "https://bakuun.com",
    location: "Remote / Hybrid",
    period: "2024 — Present",
    type: "Full-Time",
    badgeColor: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    highlights: [
      "Architecting high-concurrency booking engines and multi-tenant hospitality SaaS applications handling thousands of daily transactions.",
      "Spearheading the modernization of core microservices with Next.js 15, TypeScript, Fastify, and Redis caching layers.",
      "Optimized database query performance by 45% through composite indexing and connection pool tuning on PostgreSQL.",
      "Collaborating directly with product directors to deliver automated invoice pipelines and settlement reconciliation.",
    ],
    skills: ["Next.js 15", "TypeScript", "Fastify", "PostgreSQL", "Redis", "Docker", "Microservices"],
  },
  {
    id: "globallogic",
    role: "Software Engineer",
    company: "GlobalLogic (Hitachi Group)",
    companyUrl: "https://globallogic.com",
    location: "Noida / Gurugram, India",
    period: "2023 — 2024",
    type: "Full-Time",
    badgeColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
    highlights: [
      "Developed high-throughput enterprise fintech integrations and modular micro-frontends for global enterprise clients.",
      "Built resilient REST & GraphQL APIs with comprehensive automated testing suites and CI/CD pipelines.",
      "Collaborated with cross-functional engineering teams across US and European timezones to maintain 99.9% service SLA.",
      "Implemented strict security standards, OAuth2/OIDC authentication protocols, and zero-trust API validation.",
    ],
    skills: ["React", "Node.js", "GraphQL", "Enterprise Architecture", "CI/CD", "Jest", "PostgreSQL"],
  },
  {
    id: "digitally-bird",
    role: "Full-Stack Developer",
    company: "Digitally Bird",
    companyUrl: "https://digitallybird.com",
    location: "New Delhi, India",
    period: "2022 — 2023",
    type: "Full-Time",
    badgeColor: "border-violet-500/40 text-violet-400 bg-violet-500/10",
    highlights: [
      "Delivered 12+ scalable web applications and bespoke client platforms from concept through cloud deployment.",
      "Engineered responsive, accessible frontends using Next.js, React, and Tailwind CSS with sub-second First Contentful Paint.",
      "Designed relational database schemas, migration scripts, and RESTful backends using Node.js and PostgreSQL.",
      "Implemented automated client email notification triggers, payment gateway integrations, and CMS backends.",
    ],
    skills: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS S3", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "native-developers",
    role: "Frontend & Mobile Application Engineer",
    company: "Native Developers",
    companyUrl: "https://nativedevelopers.com",
    location: "New Delhi, India",
    period: "2021 — 2022",
    type: "Full-Time",
    badgeColor: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    highlights: [
      "Crafted cross-platform mobile apps for iOS and Android using React Native and Expo with native performance.",
      "Built interactive UI component libraries with smooth 60fps animations and gesture handlers.",
      "Integrated third-party APIs, real-time push notifications, and local offline storage synchronization.",
      "Streamlined app release workflows across Apple App Store and Google Play Console.",
    ],
    skills: ["React Native", "Expo", "JavaScript / ES6+", "Mobile UI/UX", "Redux", "REST APIs"],
  },
];

export const TECH_RADAR_CATEGORIES: TechSkillCategory[] = [
  {
    title: "Frontend & Interface Engineering",
    badge: "User Experience & Web Performance",
    icon: "Layout",
    description: "Building ultra-fast, accessible, and animated web applications with modern React ecosystems.",
    skills: [
      { name: "Next.js 15 (App Router, RSC, Server Actions)", proficiency: 98, level: "Expert", note: "Production Standard" },
      { name: "TypeScript & Strict Type Safety", proficiency: 96, level: "Expert", note: "Zero Any Policy" },
      { name: "React 19 & Concurrent Features", proficiency: 98, level: "Expert", note: "Hooks & Transitions" },
      { name: "Tailwind CSS & Modern Design Tokens", proficiency: 95, level: "Expert", note: "Design Systems" },
      { name: "Framer Motion & Micro-Interactions", proficiency: 92, level: "Advanced", note: "60fps Fluid UI" },
      { name: "Web Audio API & Canvas 2D / 3D", proficiency: 88, level: "Production", note: "Interactive FX" },
    ],
  },
  {
    title: "Backend & Distributed Systems",
    badge: "Microservices & Concurrency",
    icon: "Server",
    description: "Designing resilient REST & GraphQL APIs, double-entry ledgers, and event-driven microservices.",
    skills: [
      { name: "NestJS / Fastify / Node.js Engine", proficiency: 95, level: "Expert", note: "High Throughput" },
      { name: "Laravel & PHP Enterprise", proficiency: 90, level: "Advanced", note: "Robust MVC & Eloquent" },
      { name: "Python FastAPI & Scrapers", proficiency: 85, level: "Production", note: "AI & Market APIs" },
      { name: "Event-Driven Queues (BullMQ / Redis)", proficiency: 92, level: "Expert", note: "Async Pipelines" },
      { name: "Double-Entry Accounting Engines", proficiency: 96, level: "Expert", note: "Zero Invariant Breach" },
      { name: "OAuth2, JWT, RLS & Edge Auth", proficiency: 94, level: "Expert", note: "Defense in Depth" },
    ],
  },
  {
    title: "Databases, Caching & Storage",
    badge: "Persistence & ACID Invariants",
    icon: "Database",
    description: "Data modeling, multi-tenant isolation, query optimization, and memory-tier caching.",
    skills: [
      { name: "PostgreSQL & Supabase Architecture", proficiency: 96, level: "Expert", note: "RLS & Indexing" },
      { name: "Redis In-Memory Cache & Pub/Sub", proficiency: 94, level: "Expert", note: "Sub-1ms Latency" },
      { name: "Prisma, Drizzle & TypeORM", proficiency: 92, level: "Expert", note: "Type-safe ORMs" },
      { name: "MySQL & Transactional Engines", proficiency: 90, level: "Advanced", note: "Schema Optimization" },
      { name: "AWS S3 Cloud Storage & Pre-signed URLs", proficiency: 92, level: "Production", note: "Secure Vaults" },
      { name: "Vector Embeddings & Search", proficiency: 82, level: "Production", note: "pgvector & AI" },
    ],
  },
  {
    title: "Mobile, Cloud & DevOps",
    badge: "Deployment & Cross-Platform",
    icon: "Smartphone",
    description: "Shipping mobile applications to App Stores and orchestrating containerized cloud infrastructure.",
    skills: [
      { name: "React Native & Expo Ecosystem", proficiency: 92, level: "Expert", note: "iOS & Android Apps" },
      { name: "Docker & Container Orchestration", proficiency: 88, level: "Advanced", note: "Reproducible Builds" },
      { name: "Vercel, Cloudflare & Edge Workers", proficiency: 95, level: "Expert", note: "Sub-second TTFB" },
      { name: "CI/CD Workflows (GitHub Actions)", proficiency: 90, level: "Advanced", note: "Automated Deployments" },
      { name: "Linux Administration & Nginx", proficiency: 86, level: "Production", note: "Server Management" },
      { name: "Puppeteer & Headless Automation", proficiency: 90, level: "Advanced", note: "PDF & Scrapers" },
    ],
  },
];
