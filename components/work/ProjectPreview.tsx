import Image from "next/image";
import type { Project } from "@/types";

const flows: Record<string, { label: string; title: string; subtitle: string; steps: string[]; note: string }> = {
  releaseroom: { label: "Developer workflow", title: "A patch you can inspect.", subtitle: "CASE-001 / ReleaseRoom", steps: ["Codex prepares patch", "Independent checks", "Exact-hash approval", "Export handoff"], note: "AI builder + deterministic verification + human review" },
  clearcart: { label: "Shopping prototype", title: "A travel kit. Under $75.", subtitle: "ClearCart / Sandbox checkout", steps: ["Describe what you need", "Validate $74 basket", "Buyer approves", "Verify receipt"], note: "Fictional catalog · Genuine Gemini & PayPal sandbox integration" },
  "near-replay-lab": { label: "Recorded testnet comparison", title: "One obligation. One payment.", subtitle: "NEAR Replay Lab / Lost-response retry", steps: ["Unsafe: two credits", "Guarded: one credit", "Finalized receipts", "Balance evidence"], note: "Constructed testnet fixtures · No live-model evaluation" },
  "teletext-venue-bulletin": { label: "Local Wi-Fi bulletin", title: "Your workshop has moved.", subtitle: "PAGE 201 / Teletext Venue Bulletin", steps: ["Staff updates room", "Broadcast revision", "Attendee joins Wi-Fi", "See current room"], note: "Local prototype · Authenticated staff edits · Late-join updates" },
  "claude-referral-monitor": { label: "Automation", title: "Less searching. Better alerts.", subtitle: "Claude Pass Radar / Telegram", steps: ["Check public sources", "Filter stale offers", "Deduplicate links", "Send Telegram alert"], note: "Scheduled scans · Free-budget controls · Redemption not guaranteed" },
};

export default function ProjectPreview({ project }: { project: Project }) {
  const flow = flows[project.id];
  if (!flow) return <div className={`visual-preview visual-${project.id}`}>
    {project.image ? <Image src={project.image.src} alt={project.image.alt} fill quality={100} sizes="(max-width: 767px) 100vw, 70vw" className="preview-photo" /> : <div className="preview-generic"><p>{project.type}</p><strong>{project.title}</strong><span>{project.stack.slice(0, 3).join(" · ")}</span></div>}
  </div>;

  return <div className={`visual-preview workflow-preview visual-${project.id}`}>
    <div className="preview-chrome"><span className="window-controls" aria-hidden="true"><i /><i /><i /></span><span>{flow.label}</span></div>
    <div className="preview-content"><p className="preview-subtitle">{flow.subtitle}</p><p className="preview-title">{flow.title}</p><div className="preview-steps">{flow.steps.map((step, index) => <div key={step}><span className="step-icon" aria-hidden="true">{index < 2 ? "✓" : index === 2 ? "◎" : "▧"}</span><span>{step}</span></div>)}</div><p className="preview-note">{flow.note}</p></div>
    <span className="preview-caption">Workflow overview</span>
  </div>;
}
