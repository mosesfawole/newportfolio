import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Moses Fawole",
  description: "Get in touch with Moses Fawole about AI development, full-stack products, roles, and collaborations.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
