export default function TemplateCorporate() {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 text-center">
        New: SOC 2 Type II certified. <a href="#" className="text-blue-400 underline">Learn more about security</a>
      </div>

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between bg-white border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">Y</div>
          <div className="text-lg font-bold text-slate-900">YourSaaS</div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Product</a>
          <a href="#" className="hover:text-slate-900">Solutions</a>
          <a href="#" className="hover:text-slate-900">Pricing</a>
          <a href="#" className="hover:text-slate-900">Resources</a>
          <a href="#" className="hover:text-slate-900">Enterprise</a>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-slate-600 hover:text-slate-900">Sign in</a>
          <a href="#" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700">Request Demo</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Trusted by 10,000+ companies worldwide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
            The enterprise platform for<br />scaling your operations
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
            Unify your workflows, automate processes, and make data-driven decisions with the platform built for modern enterprises.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 shadow-lg shadow-blue-500/20">
              Start Free Trial
            </a>
            <a href="#" className="bg-white border border-slate-200 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-50 text-slate-700">
              Schedule Demo
            </a>
          </div>
          <div className="flex items-center justify-center gap-8 mt-10 text-sm text-slate-400">
            <span className="flex items-center gap-1.5"><span className="text-green-500">&#10003;</span> No credit card required</span>
            <span className="flex items-center gap-1.5"><span className="text-green-500">&#10003;</span> 14-day free trial</span>
            <span className="flex items-center gap-1.5"><span className="text-green-500">&#10003;</span> Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-6 font-medium">Trusted by industry leaders</p>
          <div className="flex justify-center gap-12 text-slate-300 font-bold text-lg">
            <span>Microsoft</span><span>Shopify</span><span>HubSpot</span><span>Slack</span><span>Notion</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive solution for every team</h2>
            <p className="text-slate-500 max-w-xl mx-auto">From engineering to marketing, YourSaaS adapts to your organization&apos;s unique needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Workflow Automation", desc: "Automate repetitive tasks with visual workflow builder. No code required.", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
              { title: "Advanced Analytics", desc: "Real-time dashboards with custom reports, KPI tracking, and predictive insights.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
              { title: "Enterprise Security", desc: "SOC 2, SSO, RBAC, audit logs, and encryption at rest and in transit.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Team Collaboration", desc: "Shared workspaces, comments, mentions, and real-time co-editing.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { title: "API & Integrations", desc: "REST and GraphQL APIs with 200+ pre-built integrations for your stack.", icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
              { title: "24/7 Support", desc: "Dedicated support team with SLA guarantees. Enterprise gets a CSM.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Straightforward pricing</h2>
            <p className="text-slate-500">No hidden fees. Scale as you grow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "$29", desc: "For small teams getting started", features: ["Up to 10 users", "5 workflows", "Basic analytics", "Email support"] },
              { name: "Business", price: "$79", desc: "For growing organizations", features: ["Up to 50 users", "Unlimited workflows", "Advanced analytics", "Priority support", "API access", "Custom integrations"], featured: true },
              { name: "Enterprise", price: "Custom", desc: "For large-scale operations", features: ["Unlimited users", "Everything in Business", "SSO/SAML", "Dedicated CSM", "SLA guarantee", "On-premise option"] },
            ].map((p) => (
              <div key={p.name} className={`p-8 rounded-2xl ${p.featured ? "bg-blue-600 text-white shadow-xl" : "border border-slate-200 bg-white"}`}>
                <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                <div className="text-3xl font-bold mb-1">{p.price}{p.price !== "Custom" && <span className="text-sm font-normal opacity-70">/mo</span>}</div>
                <div className="text-sm opacity-70 mb-6">{p.desc}</div>
                <ul className="space-y-3 text-sm mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <svg className="w-4 h-4 opacity-70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={`block text-center py-2.5 rounded-lg font-semibold text-sm ${p.featured ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
                  {p.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your operations?</h2>
          <p className="text-slate-400 mb-8">Join 10,000+ companies already using YourSaaS.</p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700">Start Free Trial</a>
            <a href="#" className="border border-slate-600 text-slate-300 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-800">Schedule Demo</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-5 gap-8 text-sm">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">Y</div>
                <div className="font-bold text-white">YourSaaS</div>
              </div>
              <p className="text-slate-500 text-xs">The enterprise platform for scaling operations. SOC 2 certified.</p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Security", "Integrations"] },
              { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
              { title: "Support", links: ["Help Center", "API Docs", "Status", "Contact"] },
            ].map((col) => (
              <div key={col.title}>
                <div className="font-semibold text-white mb-3">{col.title}</div>
                <div className="space-y-2 text-slate-500">{col.links.map((l) => <a key={l} href="#" className="block hover:text-slate-300">{l}</a>)}</div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
