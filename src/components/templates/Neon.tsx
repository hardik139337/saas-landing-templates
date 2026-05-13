export default function TemplateNeon() {
  return (
    <div className="bg-gray-950 text-gray-100">
      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-xl font-bold text-cyan-400">{"<YourSaaS />"}</div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500 font-mono">
          <a href="#" className="hover:text-cyan-400 transition">features</a>
          <a href="#" className="hover:text-cyan-400 transition">pricing</a>
          <a href="#" className="hover:text-cyan-400 transition">docs</a>
        </div>
        <a href="#" className="border border-cyan-500 text-cyan-400 px-5 py-2 rounded-lg text-sm font-mono hover:bg-cyan-500/10 transition">
          npm install yoursaas
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-32 text-center relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        </div>
        <div className="font-mono text-sm text-cyan-400 mb-6 opacity-60">&#47;&#47; the developer platform</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
          <span className="text-gray-500">const</span> app <span className="text-gray-500">=</span> <span className="text-cyan-400">launch</span><span className="text-gray-500">()</span>
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-mono">
          The platform that speaks your language. Built by developers, for developers. Type-safe, edge-ready, and blazingly fast.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="bg-cyan-500 text-gray-950 px-6 py-3 rounded-lg font-bold font-mono hover:bg-cyan-400 transition">
            npx create-app
          </a>
          <a href="#" className="border border-gray-700 px-6 py-3 rounded-lg font-mono text-sm hover:border-cyan-500/50 transition">
            Read the Docs
          </a>
        </div>
        {/* Terminal preview */}
        <div className="mt-12 max-w-lg mx-auto bg-gray-900 rounded-xl border border-gray-800 p-4 text-left font-mono text-sm">
          <div className="text-gray-500 mb-2">$ npx create-yoursaas-app my-app</div>
          <div className="text-cyan-400">&#10003; Creating project...</div>
          <div className="text-cyan-400">&#10003; Installing dependencies...</div>
          <div className="text-cyan-400">&#10003; Setting up database...</div>
          <div className="text-green-400">&#10003; Ready in 4.2s → http://localhost:3000</div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4 font-mono">
          <span className="text-gray-500">export</span> features
        </h2>
        <p className="text-center text-gray-500 mb-12 font-mono">Built for the modern stack</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Type-safe API", desc: "Auto-generated TypeScript types from your database schema.", color: "border-cyan-500/30 text-cyan-400" },
            { title: "Edge Runtime", desc: "Deploy to 300+ edge locations. Sub-50ms responses globally.", color: "border-purple-500/30 text-purple-400" },
            { title: "GitOps Workflow", desc: "Preview deployments, rollbacks, and branch-based environments.", color: "border-green-500/30 text-green-400" },
            { title: "Real-time Sync", desc: "WebSocket-powered real-time data sync with zero config.", color: "border-yellow-500/30 text-yellow-400" },
            { title: "Auth Primitives", desc: "OAuth, passkeys, MFA — implement auth in 5 lines of code.", color: "border-pink-500/30 text-pink-400" },
            { title: "Serverless Functions", desc: "Write functions, we handle scaling. Pay only for invocations.", color: "border-orange-500/30 text-orange-400" },
          ].map((f) => (
            <div key={f.title} className={`p-6 rounded-xl border ${f.color} bg-gray-900/50`}>
              <h3 className="font-bold mb-2 font-mono">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 font-mono">
          <span className="text-gray-500">const</span> pricing <span className="text-gray-500">=</span> {"["}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "hobby", price: "$0", features: ["3 projects", "1GB bandwidth", "Community support"] },
            { name: "pro", price: "$19", features: ["Unlimited projects", "100GB bandwidth", "Custom domains", "Priority support", "Analytics"], featured: true },
            { name: "team", price: "$49", features: ["Everything in Pro", "Team collaboration", "SSO", "SLA guarantee"] },
          ].map((p) => (
            <div key={p.name} className={`p-8 rounded-2xl font-mono ${p.featured ? "border-2 border-cyan-500 bg-cyan-500/5" : "border border-gray-800"}`}>
              <div className="text-sm text-gray-500 mb-1">{p.name}</div>
              <div className="text-3xl font-bold mb-6">{p.price}<span className="text-sm text-gray-500">/mo</span></div>
              <ul className="space-y-2 text-sm mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-400">
                    <span className="text-cyan-400">&#10003;</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`block text-center py-2.5 rounded-lg text-sm font-bold ${p.featured ? "bg-cyan-500 text-gray-950 hover:bg-cyan-400" : "border border-gray-700 hover:border-cyan-500/50"}`}>
                {p.name === "team" ? "contact_sales()" : "get_started()"}
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-4 font-mono text-gray-600 text-sm">{"]"}</div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-5xl font-bold mb-6 font-mono">
          <span className="text-cyan-400">deploy</span><span className="text-gray-500">(</span>now<span className="text-gray-500">)</span>
        </div>
        <a href="#" className="inline-block bg-cyan-500 text-gray-950 px-10 py-4 rounded-xl font-bold font-mono hover:bg-cyan-400 transition">
          Start Building Free
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between font-mono text-sm text-gray-600">
          <div className="text-cyan-400">{"<YourSaaS />"}</div>
          <div>&copy; 2026</div>
        </div>
      </footer>
    </div>
  );
}
