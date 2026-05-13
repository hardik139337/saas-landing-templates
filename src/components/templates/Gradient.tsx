export default function TemplateGradient() {
  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">YourSaaS</div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-900">Features</a>
          <a href="#" className="hover:text-gray-900">Pricing</a>
          <a href="#" className="hover:text-gray-900">Testimonials</a>
        </div>
        <a href="#" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90">Start Free Trial</a>
      </nav>

      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Create beautiful<br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
            digital experiences
          </span>
        </h1>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          The all-in-one platform for creators who want to build stunning websites and apps without writing a single line of code.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:opacity-90 shadow-lg shadow-purple-500/25">
            Start Building — It&apos;s Free
          </a>
          <a href="#" className="border border-gray-200 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50">See Examples</a>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Powerful features for modern creators</h2>
        <p className="text-center text-gray-500 mb-12">Everything you need to go from idea to live.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Drag & Drop Builder", desc: "Intuitive visual editor that makes building pages feel like a breeze.", gradient: "from-purple-500 to-pink-500" },
            { title: "Smart Templates", desc: "100+ professionally designed templates for every industry and use case.", gradient: "from-blue-500 to-cyan-500" },
            { title: "Built-in SEO", desc: "Automatic meta tags, sitemaps, and structured data for maximum visibility.", gradient: "from-green-500 to-emerald-500" },
            { title: "E-commerce Ready", desc: "Sell products, subscriptions, and digital downloads with zero fees.", gradient: "from-orange-500 to-yellow-500" },
            { title: "Analytics Dashboard", desc: "Real-time insights into your traffic, conversions, and revenue.", gradient: "from-red-500 to-pink-500" },
            { title: "Global CDN", desc: "Lightning-fast load times with content served from 200+ locations.", gradient: "from-indigo-500 to-purple-500" },
          ].map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} mb-4 flex items-center justify-center text-white`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Choose your plan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Starter", price: "$0", features: ["5 pages", "Basic templates", "Community support"] },
            { name: "Creator", price: "$19", features: ["Unlimited pages", "Premium templates", "Custom domains", "Analytics", "Priority support"], featured: true },
            { name: "Business", price: "$49", features: ["Everything in Creator", "E-commerce", "Team collaboration", "API access", "White label"] },
          ].map((p) => (
            <div key={p.name} className={`p-8 rounded-3xl ${p.featured ? "bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/20" : "border border-gray-200"}`}>
              <h3 className="text-lg font-bold mb-1">{p.name}</h3>
              <div className="text-4xl font-bold mb-6">{p.price}<span className="text-sm font-normal opacity-70">/mo</span></div>
              <ul className="space-y-3 text-sm mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="opacity-70">&#10003;</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`block text-center py-3 rounded-full font-semibold text-sm ${p.featured ? "bg-white text-purple-600 hover:bg-gray-100" : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"}`}>
                {p.name === "Business" ? "Contact Sales" : "Start Free Trial"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What creators are saying</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Alex Rivera", role: "YouTuber, 500K subs", quote: "I built my entire website in 2 hours. It would've taken me weeks before." },
            { name: "Jordan Lee", role: "Online Course Creator", quote: "The templates are gorgeous and the builder is incredibly intuitive." },
            { name: "Sam Patel", role: "Freelance Designer", quote: "My clients love the sites I build with this. And I ship 3x faster now." },
          ].map((t) => (
            <div key={t.name} className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
              <p className="text-sm text-gray-600 mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center relative">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-purple-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <h2 className="text-4xl font-bold mb-4">Ready to create something amazing?</h2>
        <p className="text-gray-500 mb-8">Join 50,000+ creators already building with YourSaaS.</p>
        <a href="#" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full font-bold hover:opacity-90 shadow-lg shadow-purple-500/25">
          Start Building for Free
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm text-gray-500">
          <div>
            <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">YourSaaS</div>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Templates", "Integrations"] },
            { title: "Resources", links: ["Blog", "Help Center", "API Docs", "Community"] },
            { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="font-semibold text-gray-900 mb-3">{col.title}</div>
              <div className="space-y-2">{col.links.map((l) => <a key={l} href="#" className="block hover:text-gray-900">{l}</a>)}</div>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
