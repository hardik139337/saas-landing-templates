"use client";

import { useState } from "react";
import TemplateMinimal from "@/components/templates/Minimal";
import TemplateBold from "@/components/templates/Bold";
import TemplateGradient from "@/components/templates/Gradient";
import TemplateNeon from "@/components/templates/Neon";
import TemplateCorporate from "@/components/templates/Corporate";

const templates = [
  { id: "minimal", name: "Minimal", desc: "Clean, whitespace-focused. Perfect for dev tools.", color: "bg-white", component: TemplateMinimal },
  { id: "bold", name: "Bold", desc: "Strong typography, high contrast. Great for B2B SaaS.", color: "bg-gray-950", component: TemplateBold },
  { id: "gradient", name: "Gradient", desc: "Colorful, modern. Ideal for creative tools.", color: "bg-gradient-to-br from-purple-600 to-blue-600", component: TemplateGradient },
  { id: "neon", name: "Neon", desc: "Dark, vibrant accents. Perfect for developer tools.", color: "bg-gray-950", component: TemplateNeon },
  { id: "corporate", name: "Corporate", desc: "Professional, trustworthy. Great for enterprise SaaS.", color: "bg-slate-50", component: TemplateCorporate },
];

export default function Home() {
  const [active, setActive] = useState("minimal");
  const ActiveTemplate = templates.find((t) => t.id === active)!.component;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
          <h1 className="text-xl font-bold">SaaS Landing Templates</h1>
        </div>
        <a href="https://github.com/hardik139337/saas-landing-templates" className="text-sm text-gray-400 hover:text-white transition">View on GitHub</a>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
          5 Premium Templates — Next.js 16 + Tailwind v4
        </div>
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Ship a beautiful landing page in minutes, not days.
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          5 conversion-optimized SaaS landing page templates. Copy, customize, deploy. Built with Next.js 16 and Tailwind CSS v4.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/hardik139337/saas-landing-templates" className="px-6 py-3 bg-white text-gray-950 rounded-lg font-semibold hover:bg-gray-200 transition">
            Get Free on GitHub
          </a>
          <a href="#preview" className="px-6 py-3 border border-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition">
            Preview Templates
          </a>
        </div>
      </section>

      {/* Template Selector */}
      <section id="preview" className="px-6 pb-6">
        <div className="flex gap-3 justify-center flex-wrap mb-8">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-3 rounded-xl border transition text-left max-w-[200px] ${
                active === t.id
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-800 bg-gray-900 hover:border-gray-600"
              }`}
            >
              <div className="font-semibold text-sm">{t.name}</div>
              <div className="text-xs text-gray-500 mt-0.5">{t.desc}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Live Preview */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
            {/* Browser chrome */}
            <div className="bg-gray-900 px-4 py-2.5 flex items-center gap-2 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 ml-3 bg-gray-800 rounded-md px-3 py-1 text-xs text-gray-400 text-center">
                yoursaas.com
              </div>
            </div>
            {/* Template preview */}
            <div className="bg-white max-h-[800px] overflow-y-auto">
              <ActiveTemplate />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">What&apos;s included in each template</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Hero Section", desc: "Headline, subheadline, CTA buttons, and hero image/illustration placeholder" },
              { title: "Features Grid", desc: "3-column feature cards with icons, titles, and descriptions" },
              { title: "Pricing Table", desc: "3-tier pricing with Free, Pro, and Enterprise plans" },
              { title: "Testimonials", desc: "Customer quotes with avatars, names, and company info" },
              { title: "FAQ Accordion", desc: "Expandable question/answer section for common objections" },
              { title: "CTA Section", desc: "Final call-to-action with headline, description, and button" },
              { title: "Footer", desc: "Multi-column footer with links, social icons, and copyright" },
              { title: "Responsive", desc: "Mobile-first design that looks great on every screen size" },
              { title: "Dark Mode Ready", desc: "Easy toggle to dark mode with Tailwind dark: variants" },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-xl border border-gray-800 bg-gray-900">
                <h4 className="font-semibold mb-2">{f.title}</h4>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20 border-t border-gray-800 text-center">
        <h3 className="text-3xl font-bold mb-4">Get all 5 templates</h3>
        <p className="text-gray-400 mb-8">Free and open source. Use for unlimited projects.</p>
        <a href="https://github.com/hardik139337/saas-landing-templates" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-lg hover:opacity-90 transition">
          Download from GitHub — Free
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800 text-center text-sm text-gray-500">
        Built with Next.js 16 and Tailwind CSS v4. Open source under MIT license.
      </footer>
    </div>
  );
}
