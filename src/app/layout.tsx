import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yashin Chauhan // Full-Stack Product Engineer & SaaS Architect",
  description:
    "Full-Stack Software Developer with 5+ years of experience building web applications, SaaS systems, REST APIs, and financial double-entry engines. Creator of RentKhata.",
  keywords: [
    "Yashin Chauhan",
    "Full Stack Engineer",
    "Product Engineer",
    "Next.js 15",
    "RentKhata",
    "NestJS",
    "Laravel",
    "PostgreSQL",
    "React Native",
    "Delhi Software Engineer",
  ],
  authors: [{ name: "Yashin Chauhan", url: "https://github.com/yashin-chauhan" }],
  openGraph: {
    title: "Yashin Chauhan // Full-Stack Product Engineer",
    description:
      "Engineering Production-Grade SaaS Products & High-Impact Digital Platforms. 5+ Years Experience.",
    url: "https://github.com/yashin-chauhan",
    siteName: "Yashin Chauhan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#07090e] text-slate-100 min-h-screen relative antialiased selection:bg-emerald-500 selection:text-black">
        <div className="ambient-glow-1"></div>
        <div className="ambient-glow-2"></div>
        {children}
      </body>
    </html>
  );
}
