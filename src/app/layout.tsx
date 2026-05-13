import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaaS Landing Templates — 5 Premium Templates for Next.js",
  description: "Beautiful, conversion-optimized SaaS landing page templates. Built with Next.js 16 and Tailwind CSS v4.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
