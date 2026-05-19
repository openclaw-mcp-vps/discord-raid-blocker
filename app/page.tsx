export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Discord Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Auto-block Discord server raids<br />
          <span className="text-[#58a6ff]">before damage is done</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Discord Raid Blocker monitors your server in real-time, detects coordinated spam attacks, and automatically triggers slowmode, lockdowns, and bulk moderation — so you never wake up to a ruined community.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors"
        >
          Protect My Server — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works with any Discord server.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "🛡️", title: "Raid Detection", desc: "Pattern analysis catches coordinated join/spam waves instantly." },
          { icon: "⚡", title: "Auto Lockdown", desc: "Slowmode and channel locks trigger in seconds, not minutes." },
          { icon: "🔨", title: "Bulk Moderation", desc: "Mass-ban or kick raiders with one automated action." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-bold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$29</p>
          <p className="text-[#8b949e] mb-6">/month per server</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Real-time raid detection",
              "Auto slowmode & lockdowns",
              "Bulk ban / kick raiders",
              "Webhook alerts to your channel",
              "Dashboard & audit logs",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the bot connect to my server?",
              a: "After subscribing, you'll receive a bot invite link. Add it to your server with the required permissions and it starts monitoring immediately — no coding required."
            },
            {
              q: "Will it accidentally ban legitimate users?",
              a: "The detection engine uses multi-signal analysis (join velocity, message similarity, account age) to minimize false positives. You can also tune sensitivity thresholds in the dashboard."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your billing portal at any time. The bot will be deactivated at the end of your billing period with no extra charges."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} Discord Raid Blocker. Not affiliated with Discord Inc.
      </footer>
    </main>
  );
}
