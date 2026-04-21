import R from '@/components/R'
import Link from 'next/link'

export default function Project() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');
        .ae-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .ae-sans { font-family: 'League Spartan', sans-serif; }
      `}</style>

      {/* ── HERO ── */}
      <div style={{ background: '#001E3C', paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{
          position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'League Spartan, sans-serif', fontWeight: 900,
          fontSize: 'clamp(120px, 18vw, 220px)',
          color: 'rgba(176,138,74,0.07)', lineHeight: 1,
          userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em',
          whiteSpace: 'nowrap'
        }}>AERETHOS</div>
        <div style={{ position: 'absolute', top: 0, left: '48px', width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(176,138,74,0.3), transparent)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <R>
            <p style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B08A4A', marginBottom: '20px' }}>Final Project — 20%</p>
          </R>
          <R delay={80}>
            <h1 className="ae-serif" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1, color: '#CFC9B8', marginBottom: '8px', letterSpacing: '-0.02em' }}>AerEthos</h1>
          </R>
          <R delay={140}>
            <h2 className="ae-sans" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', fontWeight: 300, color: 'rgba(207,201,184,0.5)', marginBottom: '32px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Brand Identity & Business Graphics System</h2>
          </R>
          <R delay={200}>
            <div style={{ width: '40px', height: '1px', background: '#B08A4A', marginBottom: '24px' }} />
            <p className="ae-serif" style={{ fontSize: '1.2rem', fontWeight: 300, color: 'rgba(207,201,184,0.65)', maxWidth: '520px', lineHeight: 1.9 }}>
              Premium yearbook and memory publishing for Irish secondary schools — every piece of collateral built to feel as considered as the books themselves.
            </p>
          </R>
        </div>
      </div>

      <section>
        <div className="wrap">

          {/* ── BRAND SYSTEM OVERVIEW ── */}
          <R>
            <p style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>The System</p>
            <div style={{ width: '32px', height: '2px', background: 'var(--accent)', marginBottom: '20px' }} />
            <h2 className="ae-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, fontStyle: 'italic', marginBottom: '56px' }}>One language. Six applications.</h2>
          </R>

          {/* Colour + Type bar */}
          <R delay={60}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', marginBottom: '60px', border: '1px solid var(--faint)', overflow: 'hidden' }}>
              {[
                { bg: '#001E3C', label: 'Navy', hex: '#001E3C', light: true },
                { bg: '#B08A4A', label: 'Gold', hex: '#B08A4A', light: true },
                { bg: '#CFC9B8', label: 'Stone', hex: '#CFC9B8', light: false },
              ].map((c, i) => (
                <div key={i} style={{ background: c.bg, padding: '32px 24px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: c.light ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>{c.label}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: c.light ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }}>{c.hex}</p>
                </div>
              ))}
              <div style={{ padding: '32px 24px', borderRight: '1px solid var(--faint)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p className="ae-serif" style={{ fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 300, marginBottom: '4px' }}>Cormorant</p>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Display serif</p>
              </div>
              <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p className="ae-sans" style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '4px' }}>League Spartan</p>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Body sans</p>
              </div>
            </div>
          </R>

          {/* ── 01 BUSINESS CARDS ── */}
          <R>
            <div style={{ marginBottom: '80px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#B08A4A', fontSize: '1rem' }}>01</span>
                <h3 className="ae-sans" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Business Cards</h3>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--mid)', marginLeft: 'auto' }}>85 × 55mm · 350gsm · CMYK</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '560px' }}>
                {/* Front */}
                <div style={{ background: '#CFC9B8', aspectRatio: '1.75/1', padding: '28px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <p className="ae-serif" style={{ fontStyle: 'italic', fontWeight: 300, fontSize: '1.4rem', color: '#001E3C', letterSpacing: '0.02em', marginBottom: '6px' }}>AerEthos</p>
                    <div style={{ width: '28px', height: '1px', background: '#B08A4A' }} />
                  </div>
                  <p className="ae-sans" style={{ fontSize: '0.45rem', fontWeight: 400, color: '#001E3C', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.45 }}>Memory Publishing · Ireland</p>
                </div>
                {/* Back */}
                <div style={{ background: '#001E3C', aspectRatio: '1.75/1', padding: '28px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <p className="ae-sans" style={{ fontSize: '0.72rem', fontWeight: 500, color: '#CFC9B8', marginBottom: '2px', letterSpacing: '0.02em' }}>Nathan Sfendji</p>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.48rem', color: '#B08A4A', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Founder</p>
                  </div>
                  <div>
                    <div style={{ width: '100%', height: '1px', background: 'rgba(176,138,74,0.25)', marginBottom: '10px' }} />
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.48rem', color: 'rgba(207,201,184,0.55)', lineHeight: 2 }}>nathan@aerethos.com<br />aerethos.com</p>
                  </div>
                </div>
              </div>
            </div>
          </R>

          {/* ── 02 LETTERHEAD / BROCHURE SPREAD ── */}
          <R>
            <div style={{ marginBottom: '80px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#B08A4A', fontSize: '1rem' }}>02</span>
                <h3 className="ae-sans" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Letterhead & Brochure</h3>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--mid)', marginLeft: 'auto' }}>A4 · DL trifold</span>
              </div>
              {/* Letterhead mockup */}
              <div style={{ background: '#fafaf8', border: '1px solid var(--faint)', padding: '48px 52px', maxWidth: '520px', marginBottom: '16px', position: 'relative' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', paddingBottom: '20px', borderBottom: '1px solid #CFC9B8' }}>
                  <div>
                    <p className="ae-serif" style={{ fontStyle: 'italic', fontWeight: 300, fontSize: '1.6rem', color: '#001E3C', letterSpacing: '0.02em', lineHeight: 1, marginBottom: '4px' }}>AerEthos</p>
                    <p className="ae-sans" style={{ fontSize: '0.45rem', fontWeight: 400, color: '#B08A4A', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Memory Publishing</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.52rem', color: 'var(--mid)', lineHeight: 1.8 }}>
                      aerethos.com<br />
                      Waterford, Ireland
                    </p>
                  </div>
                </div>
                {/* Body */}
                <div style={{ marginBottom: '32px' }}>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', color: 'var(--mid)', letterSpacing: '0.08em', marginBottom: '20px' }}>15 April 2025</p>
                  <p className="ae-serif" style={{ fontSize: '0.95rem', lineHeight: 1.95, color: '#1a1a1a', marginBottom: '14px' }}>
                    Dear Principal,
                  </p>
                  <p className="ae-serif" style={{ fontSize: '0.9rem', lineHeight: 1.95, color: 'var(--mid)', marginBottom: '14px' }}>
                    We would like to introduce AerEthos — a premium yearbook and memory publishing service designed specifically for Irish secondary schools. Our approach combines thoughtful photography direction, editorial design, and quality print production...
                  </p>
                  <p className="ae-serif" style={{ fontSize: '0.9rem', lineHeight: 1.95, color: 'var(--mid)' }}>
                    Every school has a story worth telling. We make sure it&apos;s told well.
                  </p>
                </div>
                <p className="ae-serif" style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#001E3C' }}>Nathan Sfendji, Founder</p>
                {/* Footer rule */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, #001E3C, #B08A4A)' }} />
              </div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)', letterSpacing: '0.08em' }}>A4 letterhead — gradient rule footer, Cormorant body copy</p>
            </div>
          </R>

          {/* ── 03 ADVERTISEMENT ── */}
          <R>
            <div style={{ marginBottom: '80px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#B08A4A', fontSize: '1rem' }}>03</span>
                <h3 className="ae-sans" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Print Advertisement</h3>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--mid)', marginLeft: 'auto' }}>A4 + 1080×1080px social</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px' }}>
                {/* Print ad */}
                <div style={{ background: '#001E3C', padding: '52px 48px', position: 'relative', overflow: 'hidden', minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '45%', background: 'linear-gradient(135deg, transparent 0%, rgba(176,138,74,0.08) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '220px', height: '220px', borderRadius: '50%', border: '1px solid rgba(176,138,74,0.1)' }} />
                  <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', width: '140px', height: '140px', borderRadius: '50%', border: '1px solid rgba(176,138,74,0.08)' }} />
                  <div style={{ position: 'relative' }}>
                    <p className="ae-sans" style={{ fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#B08A4A', marginBottom: '24px' }}>AerEthos · Memory Publishing</p>
                    <h3 className="ae-serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300, fontStyle: 'italic', color: '#CFC9B8', lineHeight: 1.2, maxWidth: '280px' }}>
                      The year your students will want to remember.
                    </h3>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div style={{ width: '32px', height: '1px', background: '#B08A4A', marginBottom: '16px' }} />
                    <p className="ae-sans" style={{ fontSize: '0.6rem', fontWeight: 300, color: 'rgba(207,201,184,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                      Premium yearbooks for Irish secondary schools
                    </p>
                    <p className="ae-sans" style={{ fontSize: '0.65rem', fontWeight: 500, color: '#B08A4A', letterSpacing: '0.08em' }}>aerethos.com</p>
                  </div>
                </div>
                {/* Square social crop */}
                <div style={{ background: '#001E3C', aspectRatio: '1/1', padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '120px', height: '120px', borderRadius: '50%', border: '1px solid rgba(176,138,74,0.12)' }} />
                  <p className="ae-sans" style={{ fontSize: '0.45rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B08A4A', position: 'relative' }}>AerEthos</p>
                  <div style={{ position: 'relative' }}>
                    <p className="ae-serif" style={{ fontSize: '1.3rem', fontWeight: 300, fontStyle: 'italic', color: '#CFC9B8', lineHeight: 1.3, marginBottom: '12px' }}>The year worth remembering.</p>
                    <div style={{ width: '20px', height: '1px', background: '#B08A4A' }} />
                  </div>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.42rem', color: '#B08A4A', letterSpacing: '0.1em', position: 'relative' }}>1080 × 1080px</p>
                </div>
              </div>
            </div>
          </R>

          {/* ── 04 OPENING HOURS ── */}
          <R>
            <div style={{ marginBottom: '80px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#B08A4A', fontSize: '1rem' }}>04</span>
                <h3 className="ae-sans" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Opening Hours Poster</h3>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--mid)', marginLeft: 'auto' }}>A2 poster + A6 card</span>
              </div>
              <div style={{ background: '#001E3C', padding: '64px 56px', maxWidth: '480px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '40px', width: '1px', height: '100%', background: 'rgba(176,138,74,0.12)' }} />
                <p className="ae-sans" style={{ fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#B08A4A', marginBottom: '40px' }}>AerEthos Studio · Waterford</p>
                {[
                  { day: 'Mon — Fri', hours: '09:00 – 17:30' },
                  { day: 'Saturday', hours: '10:00 – 14:00' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(176,138,74,0.12)', paddingBottom: '18px', marginBottom: '18px' }}>
                    <p className="ae-sans" style={{ fontSize: '0.65rem', fontWeight: 300, color: 'rgba(207,201,184,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{row.day}</p>
                    <p className="ae-serif" style={{ fontStyle: 'italic', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: row.hours === 'Closed' ? 'rgba(207,201,184,0.2)' : '#CFC9B8', fontWeight: 300 }}>{row.hours}</p>
                  </div>
                ))}
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', color: 'rgba(176,138,74,0.45)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '8px' }}>By appointment outside these hours</p>
              </div>
            </div>
          </R>

          {/* ── 05 WEBSITE ── */}
          <R>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#B08A4A', fontSize: '1rem' }}>05</span>
                <h3 className="ae-sans" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Website Mockup</h3>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--mid)', marginLeft: 'auto' }}>Figma · desktop + mobile</span>
              </div>
              {/* Browser chrome mockup */}
              <div style={{ border: '1px solid var(--faint)', overflow: 'hidden', maxWidth: '640px' }}>
                {/* Browser bar */}
                <div style={{ background: 'var(--bg2)', padding: '10px 16px', borderBottom: '1px solid var(--faint)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />)}
                  </div>
                  <div style={{ flex: 1, background: 'var(--bg)', border: '1px solid var(--faint)', borderRadius: '3px', padding: '4px 12px', marginLeft: '8px' }}>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', color: 'var(--mid)' }}>aerethos.com</p>
                  </div>
                </div>
                {/* Page content */}
                <div style={{ background: '#001E3C', padding: '40px 44px', minHeight: '280px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', right: '-40px', bottom: '-40px', width: '280px', height: '280px', borderRadius: '50%', border: '1px solid rgba(176,138,74,0.07)' }} />
                  <p className="ae-sans" style={{ fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B08A4A', marginBottom: '20px' }}>
                    AerEthos &nbsp;·&nbsp; Schools &nbsp;·&nbsp; Our Work &nbsp;·&nbsp; Contact
                  </p>
                  <p className="ae-serif" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', fontWeight: 300, fontStyle: 'italic', color: '#CFC9B8', lineHeight: 1.15, maxWidth: '380px', marginBottom: '20px' }}>
                    Your school&apos;s story,<br />told properly.
                  </p>
                  <div style={{ width: '36px', height: '1px', background: '#B08A4A', marginBottom: '20px' }} />
                  <p className="ae-sans" style={{ fontSize: '0.62rem', fontWeight: 300, color: 'rgba(207,201,184,0.45)', maxWidth: '320px', lineHeight: 1.8, marginBottom: '28px' }}>
                    Premium yearbooks and memory publishing for Irish secondary schools. Backed by Enterprise Ireland.
                  </p>
                  <div style={{ display: 'inline-block', background: '#B08A4A', padding: '10px 20px' }}>
                    <p className="ae-sans" style={{ fontSize: '0.55rem', fontWeight: 600, color: '#001E3C', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get in touch</p>
                  </div>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)', marginTop: '10px', letterSpacing: '0.08em' }}>Homepage hero — reflects live aerethos.com aesthetic</p>
            </div>
          </R>

        </div>
      </section>

      <section style={{ padding: '60px 0', borderTop: '1px solid var(--faint)' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
          <Link href="/tasks" className="btn btn-outline">← Tasks</Link>
          <Link href="/review" className="btn">Graphic Review →</Link>
        </div>
      </section>
    </>
  )
}
