import R from '@/components/R'

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', borderBottom: '1px solid var(--faint)', overflow: 'hidden' }}>

        <div aria-hidden style={{
          position: 'absolute', right: '-60px', top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 900,
          fontSize: 'clamp(280px, 38vw, 520px)',
          color: 'rgba(212,69,12,0.055)', lineHeight: 1,
          userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em'
        }}>N</div>

        <div style={{ position: 'absolute', top: 0, left: '48px', width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent 0%, var(--faint) 30%, var(--faint) 70%, transparent 100%)' }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: '40px' }}>
          <R>
            <p className="label" style={{ marginBottom: '20px' }}>
              Waterford, Ireland &nbsp;·&nbsp; Budapest, 2025
            </p>
          </R>
          <R delay={80}>
            <h1 style={{
              fontFamily: 'var(--serif)', fontWeight: 900,
              fontSize: 'clamp(3.2rem, 8.5vw, 8.5rem)',
              lineHeight: 1, letterSpacing: '-0.03em',
              marginBottom: '6px'
            }}>
              Nathan
            </h1>
          </R>
          <R delay={130}>
            <h1 style={{
              fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic',
              fontSize: 'clamp(3.2rem, 8.5vw, 8.5rem)',
              lineHeight: 1, letterSpacing: '-0.03em',
              color: 'var(--accent)',
              marginBottom: '40px'
            }}>
              Sfendji.
            </h1>
          </R>
          <R delay={200}>
            <p style={{ fontSize: '1.1rem', color: 'var(--mid)', maxWidth: '480px', lineHeight: 1.85 }}>
              Founder of <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>AerEthos</strong>, second-year International Business student at SETU Waterford, and currently in Budapest for an Erasmus study week. This site is part of a Graphic Design &amp; Web module — but I figured if we&apos;re making a site, we might as well make a proper one.
            </p>
          </R>
        </div>

        <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <style>{`@keyframes nudge{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}`}</style>
          <p className="label" style={{ fontSize: '0.55rem' }}>Scroll</p>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'nudge 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ── QUICK FACTS STRIP ── */}
      <section style={{ padding: '0', background: 'var(--ink)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              { num: '20', label: 'Years old' },
              { num: 'IE', label: 'Waterford, Ireland' },
              { num: 'BUD', label: 'Erasmus · Budapest' },
              { num: '\'23', label: 'AerEthos founded' },
            ].map((f, i) => (
              <R key={i} delay={i * 60}>
                <div style={{ padding: '40px 28px', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                  <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '2.4rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '6px' }}>{f.num}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>{f.label}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULE WORK ── */}
      <section>
        <div className="wrap">
          <R>
            <p className="label">Module Work</p>
            <div className="rule" />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '14px' }}>
              What&apos;s on this site
            </h2>
            <p style={{ color: 'var(--mid)', maxWidth: '520px', lineHeight: 1.85, marginBottom: '56px' }}>
              Four sections covering everything required for the Graphic Design &amp; Web module — done properly, not just ticked off.
            </p>
          </R>

          <div className="g2">
            {[
              {
                num: '01',
                title: 'Weekly Tasks',
                sub: '50% of module',
                desc: 'Domain pricing across six EU country codes, web hosting comparisons, the Edutus University logo rebuilt as an SVG vector, and a faculty banner created and modified in GIMP.',
              },
              {
                num: '02',
                title: 'Final Project',
                sub: '20% of module',
                desc: 'A complete business graphics system — business cards, brochure, advertisement, menu, and opening hours — unified under a single brand identity.',
              },
              {
                num: '03',
                title: 'Graphic Review',
                sub: 'Part of weekly tasks',
                desc: 'Real-world design pieces analysed — poster, advertisement, website, brochure. Problems identified, strong points noted, improvements proposed.',
              },
              {
                num: '04',
                title: 'About',
                sub: 'Who made this',
                desc: 'A short introduction to me — Nathan Sfendji — and what I\'m up to right now.',
              },
            ].map((s, i) => (
              <R key={i} delay={i * 80}>
                <div className="card" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <p className="label" style={{ color: 'var(--mid)' }}>{s.sub}</p>
                    <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '2.5rem', color: 'var(--faint)', lineHeight: 1 }}>{s.num}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.55rem', marginBottom: '10px' }}>{s.title}</h3>
                  <p style={{ color: 'var(--mid)', fontSize: '0.88rem', lineHeight: 1.8 }}>{s.desc}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── AERETHOS CALLOUT ── */}
      <section style={{ padding: '80px 0', background: 'var(--bg2)', borderTop: '1px solid var(--faint)', borderBottom: '1px solid var(--faint)' }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '28px' }}>
            <div>
              <p className="label" style={{ marginBottom: '10px' }}>Outside of class</p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                I run <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>AerEthos</em> —<br />
                a yearbook company for Irish schools.
              </h2>
            </div>
            <a href="https://aerethos.com" target="_blank" rel="noreferrer" className="btn">
              aerethos.com →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
