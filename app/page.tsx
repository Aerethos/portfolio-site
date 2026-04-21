'use client'
import R from '@/components/R'
import { useEffect, useRef } from 'react'

export default function Home() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = marqueeRef.current
    if (!el) return
    let x = 0
    const speed = 0.4
    const frame = () => {
      x -= speed
      if (x < -el.scrollWidth / 2) x = 0
      el.style.transform = `translateX(${x}px)`
      requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [])

  return (
    <>
      <style>{`
        @keyframes nudge{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}
        @keyframes fadeSlideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }
        .hero-word { display:inline-block; animation: fadeSlideUp 0.9s cubic-bezier(.16,1,.3,1) both; }
      `}</style>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', position: 'relative',
        borderBottom: '1px solid var(--faint)', overflow: 'hidden',
        background: 'var(--bg)'
      }}>

        {/* Top-right tag */}
        <div style={{
          position: 'absolute', top: '32px', right: '48px',
          fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--faint)',
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px',
          zIndex: 3
        }}>
          <span>Graphic Design & Web</span>
          <span style={{ color: 'var(--accent)' }}>Erasmus BIP · Budapest 2026</span>
        </div>

        {/* Left vertical rule with label */}
        <div style={{ position: 'absolute', top: 0, left: '48px', width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent 0%, var(--faint) 25%, var(--faint) 75%, transparent 100%)' }} />
        <div style={{
          position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%) rotate(-90deg)',
          fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--faint)', whiteSpace: 'nowrap'
        }}>Waterford · Ireland</div>

        {/* Large ghost letterform */}
        <div aria-hidden style={{
          position: 'absolute', right: '-80px', bottom: '-60px',
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 900,
          fontSize: 'clamp(320px, 42vw, 580px)',
          color: 'rgba(212,69,12,0.04)', lineHeight: 1,
          userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em'
        }}>N</div>

        {/* Horizontal rule across mid-page */}
        <div style={{
          position: 'absolute', top: '50%', left: 0, right: 0,
          height: '1px', background: 'var(--faint)', opacity: 0.4,
          pointerEvents: 'none'
        }} />

        {/* Main content */}
        <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: '0' }}>

          {/* Name block */}
          <div style={{ marginBottom: '40px' }}>
            <h1
              className="hero-word"
              style={{
                fontFamily: 'var(--serif)', fontWeight: 900,
                fontSize: 'clamp(4rem, 10vw, 10rem)',
                lineHeight: 0.95, letterSpacing: '-0.03em',
                display: 'block', marginBottom: '4px',
                animationDelay: '0.1s'
              }}
            >Nathan</h1>
            <h1
              className="hero-word"
              style={{
                fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic',
                fontSize: 'clamp(4rem, 10vw, 10rem)',
                lineHeight: 0.95, letterSpacing: '-0.03em',
                color: 'var(--accent)', display: 'block',
                animationDelay: '0.22s'
              }}
            >Sfendji.</h1>
          </div>

          {/* Two-column lower block */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', maxWidth: '860px' }}>
            <R delay={400}>
              <p style={{ fontSize: '1rem', color: 'var(--mid)', lineHeight: 1.9 }}>
                Founder of <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>AerEthos</strong>, second-year International Business student at SETU Waterford, and currently in Budapest for an Erasmus study week. This site is part of a Graphic Design &amp; Web module — but if we&apos;re making a site, we might as well make a proper one.
              </p>
            </R>
            <R delay={500}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '12px' }}>
                {[
                  { label: 'Course', value: 'International Business, Year 2' },
                  { label: 'University', value: 'SETU Waterford' },
                  { label: 'Module', value: 'Graphic Design & Web' },
                  { label: 'Built with', value: 'Next.js · Vercel' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '16px', paddingBottom: '10px', borderBottom: '1px solid var(--faint)' }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.1em', width: '80px', flexShrink: 0, paddingTop: '2px' }}>{item.label}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--mid)' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </R>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <p className="label" style={{ fontSize: '0.55rem' }}>Scroll</p>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'nudge 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div style={{ background: 'var(--ink)', padding: '18px 0', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div ref={marqueeRef} style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap' }}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i} style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', paddingRight: '0' }}>
              {['Nathan Sfendji', '·', 'AerEthos', '·', 'SETU Waterford', '·', 'Erasmus Budapest 2026', '·', 'Graphic Design & Web', '·', 'Next.js', '·'].map((w, j) => (
                <span key={j} style={{ marginRight: '32px', color: w === '·' ? 'var(--accent)' : undefined }}>{w}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── QUICK FACTS STRIP ── */}
      <section style={{ padding: '0', background: 'var(--ink)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { num: '20', label: 'Years old' },
              { num: 'IE', label: 'Waterford, Ireland' },
              { num: 'BUD', label: 'Erasmus · Budapest' },
              { num: '\'23', label: 'AerEthos founded' },
            ].map((f, i) => (
              <R key={i} delay={i * 60}>
                <div style={{ padding: '40px 28px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '2.4rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '6px' }}>{f.num}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{f.label}</p>
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
                num: '01', title: 'Weekly Tasks', sub: '50% of module',
                desc: 'Domain pricing across six EU country codes, web hosting comparisons, the Edutus University logo rebuilt as an SVG vector, and a faculty banner created and modified in GIMP.',
              },
              {
                num: '02', title: 'Final Project', sub: '20% of module',
                desc: 'A complete business graphics system — business cards, brochure, advertisement, menu, and opening hours — unified under the AerEthos brand identity.',
              },
              {
                num: '03', title: 'Graphic Review', sub: 'Part of weekly tasks',
                desc: 'Real-world design pieces analysed — poster, advertisement, website, brochure. Problems identified, positives noted, improvements proposed.',
              },
              {
                num: '04', title: 'About', sub: 'Who made this',
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
      <section style={{ padding: '0', background: 'var(--bg2)', borderTop: '1px solid var(--faint)', borderBottom: '1px solid var(--faint)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '280px' }}>
            {/* Left */}
            <div style={{ padding: '64px 0', borderRight: '1px solid var(--faint)', paddingRight: '60px' }}>
              <p className="label" style={{ marginBottom: '12px' }}>Outside of class</p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1.15, marginBottom: '20px' }}>
                I run <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>AerEthos</em> —<br />
                yearbooks for Irish schools.
              </h2>
              <a href="https://aerethos.com" target="_blank" rel="noreferrer" className="btn">
                aerethos.com →
              </a>
            </div>
            {/* Right — a few AerEthos facts */}
            <div style={{ padding: '64px 0 64px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0' }}>
              {[
                { stat: '6+', detail: 'Schools served' },
                { stat: 'EI', detail: 'Enterprise Ireland — New Frontiers' },
                { stat: '\'23', detail: 'Founded in sixth year' },
                { stat: '.com', detail: 'aerethos.com — built from scratch' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: '16px 0', borderBottom: i < 3 ? '1px solid var(--faint)' : undefined }}>
                  <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.6rem', color: 'var(--accent)', width: '48px', flexShrink: 0, lineHeight: 1 }}>{item.stat}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--mid)' }}>{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
