export default function TemplateMinimal() {
  return (
    <div className="bg-white text-gray-900">
      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight">YourSaaS</div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-900">Features</a>
          <a href="#" className="hover:text-gray-900">Pricing</a>
          <a href="#" className="hover:text-gray-900">Docs</a>
          <a href="#" className="hover:text-gray-900">Blog</a>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-gray-500 hover:text-gray-900">Sign in</a>
          <a href="#" className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800">Get Started</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Build faster.<br />Ship sooner.
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          The minimal developer platform that lets you focus on code, not infrastructure. Deploy in seconds.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">Start for free</a>
          <a href="#" className="border border-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-50">View docs</a>
        </div>
      </section>

      {/* Logos */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-6">Trusted by teams at</p>
        <div className="flex justify-center gap-12 text-gray-300 font-bold text-lg">
          <span>Vercel</span><span>Stripe</span><span>Linear</span><span>Notion</span>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Everything you need</h2>
        <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Simple tools for complex problems.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Instant Deploy", desc: "Push to git and your app is live. Zero configuration needed." },
            { title: "Edge Fast", desc: "Your app runs on the edge, closest to your users. Sub-100ms responses." },
            { title: "Auto Scaling", desc: "From 0 to 1 million users without changing a single config." },
            { title: "Built-in Auth", desc: "Add authentication in 5 minutes. OAuth, magic links, and more." },
            { title: "Type Safety", desc: "Full TypeScript support with auto-generated types from your database." },
            { title: "Real-time Logs", desc: "See every request, error, and performance metric in real time." },
          ].map((f) => (
            <div key={f.title} className="p-6">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Simple pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Free", price: "$0", period: "/mo", features: ["3 projects", "1GB storage", "Community support", "Basic analytics"] },
            { name: "Pro", price: "$19", period: "/mo", features: ["Unlimited projects", "100GB storage", "Priority support", "Advanced analytics", "Custom domains", "Team collaboration"], featured: true },
            { name: "Enterprise", price: "Custom", period: "", features: ["Everything in Pro", "SSO/SAML", "SLA guarantee", "Dedicated support", "On-premise option"] },
          ].map((p) => (
            <div key={p.name} className={`p-8 rounded-2xl border ${p.featured ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200"}`}>
              <h3 className="font-semibold mb-1">{p.name}</h3>
              <div className="text-3xl font-bold mb-6">{p.price}<span className="text-sm font-normal opacity-60">{p.period}</span></div>
              <ul className="space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <svg className="w-4 h-4 opacity-60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-8 block text-center py-2.5 rounded-lg text-sm font-medium ${p.featured ? "bg-white text-gray-900 hover:bg-gray-100" : "border border-gray-200 hover:bg-gray-50"}`}>
                {p.name === "Enterprise" ? "Contact sales" : "Get started"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Loved by developers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Sarah Chen", role: "CTO at StartupX", quote: "We went from idea to production in 2 days. The DX is unmatched." },
            { name: "Marcus Johnson", role: "Indie Hacker", quote: "Finally a platform that doesn't get in my way. Just code and ship." },
            { name: "Emily Park", role: "Lead Engineer at Scale", quote: "Migrated our entire stack in a weekend. Zero downtime. Impressive." },
          ].map((t) => (
            <div key={t.name} className="p-6 rounded-xl border border-gray-100">
              <p className="text-sm text-gray-600 mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200" />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to start building?</h2>
        <p className="text-gray-500 mb-8">Join thousands of developers shipping faster.</p>
        <a href="#" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800">Get started for free</a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm text-gray-500">
          <div>
            <div className="text-gray-900 font-semibold mb-3">YourSaaS</div>
            <p className="text-xs">Build faster. Ship sooner.</p>
          </div>
          <div>
            <div className="font-medium text-gray-900 mb-3">Product</div>
            <div className="space-y-2"><a href="#" className="block hover:text-gray-900">Features</a><a href="#" className="block hover:text-gray-900">Pricing</a><a href="#" className="block hover:text-gray-900">Changelog</a></div>
          </div>
          <div>
            <div className="font-medium text-gray-900 mb-3">Resources</div>
            <div className="space-y-2"><a href="#" className="block hover:text-gray-900">Docs</a><a href="#" className="block hover:text-gray-900">Blog</a><a href="#" className="block hover:text-gray-900">API</a></div>
          </div>
          <div>
            <div className="font-medium text-gray-900 mb-3">Company</div>
            <div className="space-y-2"><a href="#" className="block hover:text-gray-900">About</a><a href="#" className="block hover:text-gray-900">Twitter</a><a href="#" className="block hover:text-gray-900">GitHub</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
