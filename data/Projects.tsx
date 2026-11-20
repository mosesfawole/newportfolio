import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "teletext-venue-bulletin",
    title: "Teletext Venue Bulletin",
    description: "A local Wi-Fi bulletin for event room changes. Staff update a numbered page; attendees see its latest room, revision, and timestamp.",
    year: "2026", type: "Local-first prototype",
    github: "https://github.com/mosesfawole/teletext-venue-bulletin",
    stack: ["Node.js", "Server-Sent Events", "Kiro"], featured: false,
    problem: "Event attendees need the current room information, including when they arrive after an announcement.",
    approach: "A dependency-free local server broadcasts numbered bulletin pages. Staff edits require authentication, while new subscribers receive the current revision.",
    evidence: "A physical phone and browser displayed the same updated room and revision on local Wi-Fi. Integration checks cover unauthorized edits and late subscribers.",
    scope: "An in-memory HTTP prototype for a trusted LAN. A complete internet-outage trial was not verified; modeled scheduling waits are not measured network latency."
  },
  {
    id: "claude-referral-monitor", title: "Claude Pass Radar",
    description: "A scheduled public-source monitor with deduplicated Telegram alerts, source health checks, and controls for a capped free search budget.",
    year: "2026", type: "Automation", github: "https://github.com/mosesfawole/claude-referral-monitor",
    stack: ["Node.js", "GitHub Actions", "Telegram"], featured: false,
    problem: "Public guest passes are scattered across sources and can become stale before someone finds them.",
    approach: "Scheduled scans filter by publication age, remove known claimed or expired offers, deduplicate links, and deliver Telegram alerts. Owner-only controls expose source health and budget status.",
    evidence: "The public repository contains the scan workflow, source adapters, filtering tests, and Telegram webhook implementation.",
    scope: "Finding a public link does not prove it remains redeemable. Source coverage and GitHub scheduling depend on external services. This monitor does not use a language model."
  },
  {
    id: "near-replay-lab",
    problem: "Retries and recipient substitutions can make an agent payment look successful while violating the intended obligation.",
    approach: "A deterministic runner compares deliberately unsafe and guarded contracts across five scenarios. The dashboard inspects finalized receipts, contract state, and recipient balance evidence.",
    evidence: "Recorded NEAR testnet runs demonstrate legitimate payments, expiry rejection, recipient substitution, lost-response retries, and concurrent duplicates. Public reports preserve transaction provenance.",
    scope: "Constructed testnet fixtures, not a live-model evaluation or production security guarantee. Incomplete settlement evidence remains inconclusive.",
    title: "NEAR Replay Lab",
    description:
      "A test harness and dashboard for agent payments. Replays five payment scenarios on NEAR testnet and uses finalized receipts and balance changes to verify who got paid.",
    year: "2026",
    type: "Payment test harness",
    github: "https://github.com/mosesfawole/near-replay-lab",
    image: {
      src: "/projects/near-replay-lab.jpg",
      alt: "NEAR Replay Lab dashboard comparing two recorded testnet payment outcomes",
    },
    stack: ["TypeScript", "Rust", "Next.js", "NEAR"],
    featured: true,
  },
  {
    id: "releaseroom",
    image: { src: "/projects/releaseroom.png", alt: "ReleaseRoom exported handoff and verified approval in the recorded demo" },
    demo: "https://youtu.be/CgD3kSIa8W0",
    problem: "An AI-generated patch needs more than a confident message before a reviewer can trust the handoff.",
    approach: "A Codex builder prepares a patch in a Switch room. An independent deterministic gatekeeper runs protected checks and binds human approval to the exact patch and evidence hash.",
    evidence: "The recorded walkthrough shows the builder, independent verification, authorized approval relay, and exported patch with a review report.",
    scope: "A controlled single-case demonstration. It exports a reviewable handoff; it does not merge or deploy code, and is not an isolation boundary against a malicious local process.",
    title: "ReleaseRoom",
    description:
      "A Mattermost workflow where an AI agent prepares a patch, automated checks verify it, and a human approves the exact patch hash before the handoff is exported.",
    year: "2026",
    type: "AI developer workflow",
    github: "https://github.com/mosesfawole/releaseroom",
    stack: ["TypeScript", "Codex", "Switch"],
    featured: true,
  },
  {
    id: "clearcart",
    image: { src: "/projects/clearcart.jpg", alt: "ClearCart verified PayPal sandbox receipt using fictional funds" },
    demo: "https://www.youtube.com/watch?v=slJc7aeOWz8",
    problem: "A shopping assistant can suggest a basket without reliably enforcing the full budget or establishing payment truth.",
    approach: "Gemini interprets the request. Server code independently validates catalog prices, constraints and totals. The buyer approves checkout; the server verifies the captured payment against the saved order.",
    evidence: "A genuine Gemini request and buyer-approved $74 PayPal sandbox capture are documented. Tests cover budget violations, receipt mismatches, ownership, and repeated callbacks.",
    scope: "Fictional catalog and sandbox funds. Sample mode is explicitly labeled. No live fulfillment or measured usability improvement is claimed.",
    title: "ClearCart",
    description:
      "An AI-assisted shopping prototype that checks a basket against a budget, asks the buyer to approve checkout, and verifies the resulting PayPal sandbox receipt.",
    year: "2026",
    type: "AI shopping prototype",
    github: "https://github.com/mosesfawole/clearcart",
    stack: ["Next.js", "Gemini API", "PayPal Sandbox"],
    featured: true,
  },
  {
    id: "homeland",
    title: "Homeland",
    description:
      "A Nigerian property marketplace project with listing exploration, agent profiles, authentication, and booking flows.",
    year: "2026",
    type: "Personal Project",
    live: "https://homeland-rosy.vercel.app/",
    github: "https://github.com/mosesfawole/homeland",
    image: {
      src: "/projects/homeland.png",
      alt: "Homepage screenshot of Homeland",
    },
    stack: ["Next.js", "TypeScript", "Supabase", "NextAuth", "Tailwind CSS"],
    featured: true,
  },

  {
    id: "baroque",
    title: "Baroque Works",
    description:
      "Cinematic One Piece fan site with interactive 3D character models, Apple-style scroll storytelling and Framer Motion page transitions.",
    year: "2026",
    type: "Personal Project",
    live: "https://baroque-theta.vercel.app/",
    github: "https://github.com/mosesfawole/baroque",
    image: {
      src: "/projects/baroque.png",
      alt: "Homepage screenshot of Baroque Works",
    },
    stack: ["Next.js", "React Three Fiber", "Framer Motion"],
    featured: true,
  },

  {
    id: "hireboard",
    title: "HireBoard",
    description:
      "Full-stack job board with role-based auth, company dashboards, admin approval workflow and server-side rendered job listings.",
    year: "2026",
    type: "Personal Project",
    stack: ["Next.js", "Supabase", "NextAuth", "Zustand", "TypeScript"],
    live: "https://hireboard-steel.vercel.app/",
    github: "https://github.com/mosesfawole/hireboard",
    image: {
      src: "/projects/hireboard.png",
      alt: "Homepage screenshot of HireBoard",
    },
    featured: true,
  },
  {
    id: "pricehunt",
    title: "PriceHunt",
    description:
      "Product price aggregator that queries Google Shopping and sorts results by lowest price with server-side caching.",
    year: "2026",
    type: "Personal Project",
    stack: ["Next.js", "SerpAPI", "TypeScript"],
    live: "https://price-hunt-sand.vercel.app/search",
    github: "https://github.com/mosesfawole/price-hunt",
    image: {
      src: "/projects/pricehunt.png",
      alt: "Search page screenshot of PriceHunt",
    },
    featured: false,
  },
  {
    id: "kipclean",
    title: "KipClean",
    description:
      "Freelance landing page for a professional cleaning services company. Mobile-first, smooth animations, deployed on Vercel.",
    year: "2024",
    type: "Freelance",
    stack: ["React", "Vite", "Tailwind CSS"],
    live: "https://kipclean-v1.vercel.app/",
    github: "https://github.com/mosesfawole/kipclean-v1",
    image: {
      src: "/projects/kipclean.png",
      alt: "Homepage screenshot of KipClean",
    },
    featured: false,
  },
  {
    id: "cryptoview",
    title: "CryptoView",
    description:
      "Real-time cryptocurrency dashboard with live WebSocket price feeds, an interactive 3D globe showing global exchange activity, and a persistent watchlist.",
    year: "2026",
    type: "Personal Project",
    stack: ["Next.js", "Three.js", "Zustand", "Binance API"],
    live: "https://crypto-dashboard-ten-beta.vercel.app/dashboard",
    github: "https://github.com/mosesfawole/crypto-dashboard",
    featured: false,
  },
  {
    id: "mousa",
    title: "Mousa",
    description:
      "AI-powered Twitter content dashboard - generate post ideas, expand them into full tweets, and analyze performance with Claude AI.",
    year: "2026",
    type: "Personal Project",
    stack: ["Next.js", "Claude API", "Supabase"],
    github: "https://github.com/mosesfawole/mousa",
    featured: false,
  },
];
