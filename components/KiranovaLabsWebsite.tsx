export default function KiranovaLabsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.25),transparent_40%)]" />

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-sm">
        <div>
          <h1 className="text-2xl font-semibold tracking-[0.3em]">KIRANOVA</h1>
          <p className="text-xs text-purple-400 tracking-[0.5em] mt-1">LABS</p>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-white/70">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-purple-500 to-violet-700 shadow-2xl shadow-purple-500/30 flex items-center justify-center mb-8">
          <span className="text-5xl font-bold">K</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-5xl">
          Building Digital
          <br />
          Experiences for the Future.
        </h2>

        <p className="mt-8 text-lg text-white/60 max-w-2xl leading-relaxed">
          Kiranova Labs creates modern mobile applications, games, and digital products with a strong focus on simplicity, innovation, and immersive user experiences.
        </p>

        <div className="mt-12 flex gap-4 flex-wrap justify-center">
          <button className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition text-white font-medium shadow-lg shadow-purple-500/20">
            Explore Projects
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-white/80">
            Contact
          </button>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 px-8 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-purple-400 uppercase tracking-[0.3em] text-sm">Projects</p>
            <h3 className="text-4xl font-bold mt-3">Featured Work</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'MindJump',
                type: 'Puzzle Game',
                desc: 'A modern minimalist brain puzzle experience designed for mobile platforms.'
              },
              {
                title: 'FocusFlow',
                type: 'Productivity App',
                desc: 'A clean productivity tool focused on clarity, routines, and deep work.'
              },
              {
                title: 'NovaAI',
                type: 'AI Tool',
                desc: 'Experimental AI-powered utilities crafted for creators and developers.'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md hover:bg-white/[0.07] transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-700 mb-6" />

                <p className="text-sm text-purple-400 uppercase tracking-widest">
                  {project.type}
                </p>

                <h4 className="text-2xl font-semibold mt-3">{project.title}</h4>

                <p className="text-white/60 mt-4 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 px-8 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm">About</p>

          <h3 className="text-4xl md:text-5xl font-bold mt-4">
            Independent Innovation.
            <br />
            Global Vision.
          </h3>

          <p className="mt-8 text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
            Founded by Utku Kıran, Kiranova Labs focuses on creating elegant and impactful digital products across gaming, productivity, and emerging technologies.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 px-8 py-24 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm">Contact</p>

          <h3 className="text-4xl font-bold mt-4">Let&apos;s Build Something Great</h3>

          <p className="mt-6 text-white/60 leading-relaxed">
            For collaborations, partnerships, or support inquiries.
          </p>

          <div className="mt-10 inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-lg text-white/80">
            hello@kiranovalabs.com
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-10 border-t border-white/10 text-center text-white/40 text-sm">
        © 2026 Kiranova Labs. All rights reserved.
      </footer>
    </div>
  )
}
