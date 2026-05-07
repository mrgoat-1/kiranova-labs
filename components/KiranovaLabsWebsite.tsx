"use client";

import { useEffect, useState } from "react";

export default function KiranovaLabsWebsite() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifySent, setNotifySent] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Pati Oyunu - Bildirim İsteği");
    const body = encodeURIComponent(
      `Merhaba,\n\nPati Oyunu App Store'da yayınlandığında beni bilgilendirmenizi istiyorum.\n\nE-posta: ${notifyEmail}`
    );
    window.location.href = `mailto:krn.utku@icloud.com?subject=${subject}&body=${body}`;
    setNotifySent(true);
    setNotifyEmail("");
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans overflow-x-hidden">

      {/* Cursor glow */}
      <div
        className="pointer-events-none fixed z-40 w-96 h-96 rounded-full bg-purple-600 opacity-[0.06] blur-3xl"
        style={{
          transform: `translate(${mousePos.x - 192}px, ${mousePos.y - 192}px)`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_-10%,rgba(120,60,255,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(109,40,217,0.08),transparent)]" />
      </div>

      {/* Subtle grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-white/[0.06] backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
            <rect width="40" height="40" rx="10" fill="url(#navLogoGrad)" />
            <path d="M13 10V30M13 20L23 10M13 20L25 30" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="navLogoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#6D28D9" />
              </linearGradient>
            </defs>
          </svg>
          <div>
            <h1 className="text-base font-semibold tracking-[0.25em] leading-none">KIRANOVA</h1>
            <p className="text-[9px] text-purple-400 tracking-[0.5em] mt-0.5">LABS</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-white/40">
          <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-32">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/25 bg-purple-500/8 text-purple-300 text-[11px] tracking-widest uppercase mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Independent Game & App Studio
        </div>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] max-w-4xl">
          Building Digital
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-500 bg-clip-text text-transparent">
            Experiences
          </span>{" "}
          for the Future.
        </h2>

        <p className="mt-8 text-lg text-white/35 max-w-xl leading-relaxed">
          Kiranova Labs crafts mobile games and apps with a sharp focus on simplicity, innovation, and immersive design.
        </p>

        <div className="mt-12 flex gap-3 flex-wrap justify-center">
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 transition-all duration-200 text-white text-sm font-medium shadow-lg shadow-purple-900/40"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-200 text-white/60 text-sm"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 px-6 md:px-16 py-24 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="text-purple-400 uppercase tracking-[0.3em] text-xs mb-3">Projects</p>
              <h3 className="text-4xl font-bold">Featured Work</h3>
            </div>
            <span className="text-white/20 text-sm hidden md:block">1 active project</span>
          </div>

          {/* Pati Oyunu Card */}
          <div className="group relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 md:p-10 backdrop-blur-sm hover:border-purple-500/25 transition-all duration-500 overflow-hidden">

            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/8 via-transparent to-violet-900/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <div className="relative">

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 flex items-center justify-center text-[2.5rem] shadow-xl shadow-orange-900/25 flex-shrink-0">
                    🐱
                  </div>
                  <div>
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full mb-2">
                      2D Arcade · iOS
                    </span>
                    <h4 className="text-2xl font-bold">Pati Oyunu</h4>
                    <p className="text-white/30 text-sm mt-0.5">by Kiranova Labs</p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Yakında App Store&apos;da
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg font-medium text-white/70 mb-4 italic">
                &ldquo;Pençeni hazırla, avın başlıyor!&rdquo;
              </p>

              {/* Description */}
              <p className="text-white/35 leading-relaxed mb-8 max-w-2xl text-sm">
                Apple SpriteKit ile geliştirilmiş 2D mobil arcade oyunu. Sevimli kedilerle hayvan yakalama mekaniği, güç-up sistemi, günlük görevler ve Game Center entegrasyonu ile eksiksiz bir casual oyun deneyimi sunar.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {["🐱 10 Kedi Irkı", "⚡ Güç-Up'lar", "🏆 Game Center", "📋 Günlük Görevler"].map((f) => (
                  <span
                    key={f}
                    className="px-3.5 py-2 rounded-xl text-sm text-white/55 bg-white/[0.05] border border-white/[0.08] hover:border-white/20 transition-colors"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-10 border-b border-white/[0.06]">
                <span className="text-white/20 text-xs mr-1">Built with</span>
                {["Swift", "SpriteKit", "Game Center", "StoreKit"].map((t) => (
                  <span
                    key={t}
                    className="text-xs text-white/30 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Notify Me */}
              <div>
                <p className="text-sm text-white/40 mb-4">
                  Oyun App Store&apos;da yayınlandığında haberdar ol:
                </p>
                {notifySent ? (
                  <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                    ✓ Teşekkürler! Seni haberdar edeceğiz.
                  </div>
                ) : (
                  <form onSubmit={handleNotify} className="flex gap-3 flex-wrap">
                    <input
                      type="email"
                      value={notifyEmail}
                      onChange={(e) => setNotifyEmail(e.target.value)}
                      placeholder="E-posta adresin"
                      required
                      className="flex-1 min-w-[220px] px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.09] text-white placeholder-white/20 text-sm outline-none focus:border-purple-500/40 transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition-colors text-sm font-medium text-white whitespace-nowrap shadow-lg shadow-purple-900/30"
                    >
                      Beni Bilgilendir
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 px-6 md:px-16 py-24 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-purple-400 uppercase tracking-[0.3em] text-xs mb-4">About</p>
              <h3 className="text-4xl font-bold leading-tight mb-6">
                Independent Innovation.
                <br />
                <span className="text-white/30">Global Vision.</span>
              </h3>
              <p className="text-white/35 leading-relaxed text-sm">
                Utku Kıran tarafından kurulan Kiranova Labs; oyun, üretkenlik ve yeni nesil teknolojiler alanında zarif ve etkili dijital ürünler geliştirmeye odaklanmaktadır.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Platform", value: "iOS" },
                { label: "Teknoloji", value: "Swift" },
                { label: "Odak", value: "Games & Apps" },
                { label: "Durum", value: "Active Dev" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:border-white/[0.12] transition-colors"
                >
                  <p className="text-white/25 text-[10px] uppercase tracking-widest mb-2">{item.label}</p>
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 px-6 md:px-16 py-24 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-xs mb-4">Contact</p>
          <h3 className="text-4xl font-bold mb-4">Let&apos;s Build Something Great</h3>
          <p className="text-white/35 mb-10 text-sm">For collaborations, partnerships, or support inquiries.</p>
          <a
            href="mailto:hello@kiranovalabs.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/[0.09] bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/[0.18] transition-all duration-200 text-white/50 hover:text-white text-sm"
          >
            hello@kiranovalabs.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3 text-white/20 text-xs">
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-50">
            <rect width="40" height="40" rx="10" fill="url(#footerLogoGrad)" />
            <path d="M13 10V30M13 20L23 10M13 20L25 30" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#6D28D9" />
              </linearGradient>
            </defs>
          </svg>
          <span>Kiranova Labs</span>
        </div>
        <span>© 2026 Kiranova Labs. All rights reserved.</span>
      </footer>

    </div>
  );
}
