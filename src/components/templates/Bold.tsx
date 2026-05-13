export default function TemplateBold() {
  return (
    <div className="bg-gray-950 text-white">
      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter">YOURSAAS</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">About</a>
        </div>
        <a href="#" className="bg-white text-gray-950 px-5 py-2.5 font-bold rounded-lg text-sm hover:bg-gray-200">START FREE</a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-32 text-center">
        <div className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-sm font-bold mb-8 tracking-wider">
          LAUNCHING V2.0
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
          THE FUTURE<br />OF BUILDING
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
          Stop wasting time on boilerplate. YourSaaS gives you everything you need to build, deploy, and scale — in one powerful platform.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="bg-white text-gray-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200">Get Started Now</a>
          <a href="#" className="border-2 border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5">Watch Demo</a>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { num: "50K+", label: "Developers" },
            { num: "99.9%", label: "Uptime" },
            { num: "<50ms", label: "Response Time" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black mb-1">{s.num}</div>
              <div className="text-sm text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Lightning Fast Builds", desc: "Build your entire app in record time with our optimized toolchain and instant hot reload.", accent: "bg-blue-500" },
            { title: "Enterprise Security", desc: "SOC 2 compliant, end-to-end encryption, and role-based access control out of the box.", accent: "bg-purple-500" },
            { title: "Global CDN", desc: "Your app is served from 200+ edge locations worldwide. Blazing fast for every user.", accent: "bg-green-500" },
            { title: "Real-time Analytics", desc: "Track every metric that matters with built-in dashboards and custom alerts.", accent: "bg-orange-500" },
          ].map((f) => (
            <div key={f.title} className="p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className={`w-12 h-1.5 ${f.accent} rounded-full mb-6`} />
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-black text-center mb-4 tracking-tighter">PRICING</h2>
        <p className="text-gray-500 text-center mb-12 font-medium">No surprises. No hidden fees.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "STARTER", price: "$0", desc: "For side projects", features: ["3 projects", "1GB bandwidth", "Community support"] },
            { name: "PRO", price: "$29", desc: "For professionals", features: ["Unlimited projects", "100GB bandwidth", "Priority support", "Custom domains", "Analytics"], featured: true },
            { name: "SCALE", price: "$99", desc: "For teams", features: ["Everything in Pro", "SSO", "SLA", "Dedicated support", "On-premise"] },
          ].map((p) => (
            <div key={p.name} className={`p-8 rounded-2xl ${p.featured ? "bg-white text-gray-950" : "border border-white/10"}`}>
              <div className="text-sm font-black tracking-wider mb-1 opacity-60">{p.name}</div>
              <div className="text-4xl font-black mb-1">{p.price}<span className="text-sm font-medium opacity-60">/mo</span></div>
              <div className="text-sm opacity-60 mb-6">{p.desc}</div>
              <ul className="space-y-3 text-sm mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-medium">
                    <span className="opacity-60">&#10003;</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`block text-center py-3 rounded-xl font-bold text-sm ${p.featured ? "bg-gray-950 text-white hover:bg-gray-800" : "border border-white/20 hover:bg-white/5"}`}>
                {p.name === "SCALE" ? "CONTACT US" : "GET STARTED"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-black mb-6 tracking-tighter">START BUILDING<br />TODAY.</h2>
        <a href="#" className="inline-block bg-white text-gray-950 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-200">GET STARTED FREE</a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between text-sm text-gray-500">
          <div className="font-black text-white tracking-tighter">YOURSAAS</div>
          <div>&copy; 2026 YourSaaS. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
