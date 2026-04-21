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

      {/* ── HERO HEADER ── */}
      <div style={{ background: '#001E3C', paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>

        {/* Large decorative background text */}
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
            <p style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B08A4A', marginBottom: '20px' }}>
              Final Project — 20%
            </p>
          </R>
          <R delay={80}>
            <h1 className="ae-serif" style={{
              fontSize: 'clamp(3rem, 7vw, 6.5rem)',
              fontWeight: 300, fontStyle: 'italic',
              lineHeight: 1, color: '#CFC9B8',
              marginBottom: '8px', letterSpacing: '-0.02em'
            }}>
              AerEthos
            </h1>
          </R>
          <R delay={140}>
            <h2 className="ae-sans" style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              fontWeight: 300, color: 'rgba(207,201,184,0.55)',
              marginBottom: '32px', letterSpacing: '0.08em', textTransform: 'uppercase'
            }}>
              Brand Identity & Business Graphics
            </h2>
          </R>
          <R delay={200}>
            <div style={{ width: '40px', height: '1px', background: '#B08A4A', marginBottom: '24px' }} />
            <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.2rem', fontWeight: 300, color: 'rgba(207,201,184,0.7)', maxWidth: '520px', lineHeight: 1.9 }}>
              Premium yearbook and memory publishing for Irish secondary schools — built around the belief that the moments worth remembering deserve to be kept properly.
            </p>
          </R>
        </div>
      </div>

      <section style={{ paddingTop: '80px' }}>
        <div className="wrap">

          {/* Brand system */}
          <div className="g2" style={{ gap: '64px', alignItems: 'start', marginBottom: '80px' }}>
            <R>
              <div>
                <p style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>The Brand</p>
                <div style={{ width: '32px', height: '2px', background: 'var(--accent)', marginBottom: '20px' }} />
                <p className="ae-serif" style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'var(--mid)', marginBottom: '20px' }}>
                  <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>AerEthos</strong> sits at the intersection of memory and craft. The name draws from <em>aer</em> — air, atmosphere — and <em>ethos</em> — character, soul. The identity has to feel both premium and permanent: something a student opens in ten years and still respects.
                </p>
                <p className="ae-serif" style={{ fontSize: '1.05rem', lineHeight: 1.95, color: 'var(--mid)' }}>
                  Navy as the anchor. Gold as the signal of quality. Stone as the breath between them. Nothing loud — everything deliberate.
                </p>

                {/* Logo lockup */}
                <div style={{ marginTop: '36px', background: '#001E3C', padding: '48px 40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{
                      fontFamily: 'Cormorant Garamond, Georgia, serif',
                      fontSize: '2.8rem', fontWeight: 300, fontStyle: 'italic',
                      color: '#CFC9B8', letterSpacing: '0.04em', lineHeight: 1,
                      marginBottom: '8px'
                    }}>AerEthos</p>
                    <div style={{ width: '100%', height: '1px', background: '#B08A4A', marginBottom: '8px' }} />
                    <p style={{
                      fontFamily: 'League Spartan, sans-serif',
                      fontSize: '0.55rem', fontWeight: 400,
                      letterSpacing: '0.28em', textTransform: 'uppercase',
                      color: '#B08A4A'
                    }}>Memory Publishing · Ireland</p>
                  </div>
                </div>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)', marginTop: '10px', letterSpacing: '0.08em' }}>Primary lockup — reversed on navy</p>
              </div>
            </R>

            <R delay={100}>
              <div>
                <p style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>Brand System</p>
                <div style={{ width: '32px', height: '2px', background: 'var(--accent)', marginBottom: '20px' }} />

                {/* Colours */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '36px', border: '1px solid var(--faint)', overflow: 'hidden' }}>
                  {[
                    { swatch: '#001E3C', name: 'Navy', hex: '#001E3C', light: true, role: 'Primary — anchor colour' },
                    { swatch: '#B08A4A', name: 'Gold', hex: '#B08A4A', light: true, role: 'Accent — quality signal' },
                    { swatch: '#CFC9B8', name: 'Stone', hex: '#CFC9B8', light: false, role: 'Neutral — warmth & breath' },
                  ].map((c, i) => (
                    <div key={c.name} style={{
                      display: 'flex', alignItems: 'center', gap: '0',
                      borderBottom: i < 2 ? '1px solid var(--faint)' : undefined
                    }}>
                      <div style={{ width: '64px', height: '64px', background: c.swatch, flexShrink: 0 }} />
                      <div style={{ padding: '14px 20px', flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <p style={{ fontSize: '0.9rem', fontWeight: 500 }}>{c.name}</p>
                          <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)' }}>{c.hex}</p>
                        </div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--mid)', marginTop: '2px' }}>{c.role}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Typography */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ padding: '20px 24px', background: '#001E3C' }}>
                    <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.8rem', fontStyle: 'italic', fontWeight: 300, color: '#CFC9B8', marginBottom: '4px' }}>
                      Cormorant Garamond
                    </p>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: '#B08A4A', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Headlines · Display · Emotional weight
                    </p>
                  </div>
                  <div style={{ padding: '20px 24px', border: '1px solid var(--faint)' }}>
                    <p style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '1.1rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '4px', letterSpacing: '0.02em' }}>
                      League Spartan
                    </p>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--mid)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Body · Labels · Navigation
                    </p>
                  </div>
                </div>
              </div>
            </R>
          </div>

          {/* Deliverables */}
          <R>
            <p style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>Deliverables</p>
            <div style={{ width: '32px', height: '2px', background: 'var(--accent)', marginBottom: '20px' }} />
            <h2 className="ae-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, fontStyle: 'italic', marginBottom: '48px' }}>
              Six pieces, one system.
            </h2>
          </R>

          <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--faint)', overflow: 'hidden', marginBottom: '60px' }}>
            {[
              {
                num: '01', title: 'Business Cards', format: '85 × 55mm · CMYK · 350gsm',
                desc: 'Double-sided. Front: AerEthos wordmark in Cormorant italic on stone background, gold rule beneath. Back: full navy with contact in League Spartan light. 3mm bleed throughout.',
                tool: 'Adobe Illustrator'
              },
              {
                num: '02', title: 'Trifold Brochure', format: 'A4 folded to DL · 6 panels',
                desc: 'School-facing brochure covering the AerEthos process: consultation, photography, design, print. Panel one opens on the brand story. Inside spreads use a clean two-column grid with generous margins.',
                tool: 'Adobe InDesign'
              },
              {
                num: '03', title: 'Print Advertisement', format: 'A4 + 1080×1080px',
                desc: 'Magazine-format ad targeting school principals and year heads. Hero: a single yearbook spread photograph, minimal copy. Social crop exported for Instagram in both 1:1 and 4:5.',
                tool: 'Adobe Photoshop + Illustrator'
              },
              {
                num: '04', title: 'Event Menu', format: 'A5 portrait · two-colour',
                desc: 'A menu card for school graduation events — a product extension of the AerEthos memory brand. Cormorant Garamond for course headers, League Spartan for items. Navy and gold only.',
                tool: 'Adobe InDesign'
              },
              {
                num: '05', title: 'Opening Hours', format: 'A2 poster + A6 card',
                desc: 'Studio hours displayed as a typographic poster for the AerEthos workspace. Hours set large in Cormorant italic — the time itself becomes the visual. A6 version for handouts.',
                tool: 'Adobe Illustrator'
              },
              {
                num: '06', title: 'Website Mockup', format: 'Figma · desktop + mobile',
                desc: 'Three-page Figma prototype mirroring the live aerethos.com aesthetic: Home, Schools, and Contact. Mobile-first layout, interactive prototype, same navy/gold/stone system throughout.',
                tool: 'Figma'
              },
            ].map((d, i) => (
              <R key={i} delay={i * 40}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '64px 1fr',
                  borderBottom: i < 5 ? '1px solid var(--faint)' : undefined,
                  transition: 'background 0.2s'
                }}>
                  <div style={{
                    background: '#001E3C',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRight: '1px solid var(--faint)',
                  }}>
                    <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic', fontSize: '1rem', color: '#B08A4A' }}>{d.num}</span>
                  </div>
                  <div style={{ padding: '24px 28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                      <h3 style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '1rem', fontWeight: 500, letterSpacing: '0.01em' }}>{d.title}</h3>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 8px', border: '1px solid var(--faint)', color: 'var(--mid)' }}>{d.tool}</span>
                    </div>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: '#B08A4A', letterSpacing: '0.1em', marginBottom: '8px', textTransform: 'uppercase' }}>{d.format}</p>
                    <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1rem', color: 'var(--mid)', lineHeight: 1.85 }}>{d.desc}</p>
                  </div>
                </div>
              </R>
            ))}
          </div>

          {/* Business card preview */}
          <R>
            <p style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
              Business card — preview
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '580px' }}>
              {/* Front */}
              <div style={{
                background: '#CFC9B8', aspectRatio: '1.75/1',
                padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
              }}>
                <div>
                  <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic', fontWeight: 300, fontSize: '1.3rem', color: '#001E3C', letterSpacing: '0.02em', marginBottom: '4px' }}>AerEthos</p>
                  <div style={{ width: '28px', height: '1px', background: '#B08A4A' }} />
                </div>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', color: '#001E3C', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5 }}>Front — Stone (#CFC9B8)</p>
              </div>
              {/* Back */}
              <div style={{
                background: '#001E3C', aspectRatio: '1.75/1',
                padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
              }}>
                <div>
                  <p style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '0.7rem', fontWeight: 500, color: '#CFC9B8', marginBottom: '2px', letterSpacing: '0.04em' }}>Nathan Sfendji</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', color: '#B08A4A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Founder</p>
                </div>
                <div>
                  <div style={{ width: '100%', height: '1px', background: 'rgba(176,138,74,0.3)', marginBottom: '10px' }} />
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', color: 'rgba(207,201,184,0.6)', lineHeight: 1.9 }}>
                    nathan@aerethos.com<br />
                    aerethos.com
                  </p>
                </div>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)', marginTop: '10px', letterSpacing: '0.08em' }}>85 × 55mm · 350gsm silk laminate · 3mm bleed</p>
          </R>

          {/* Opening hours poster preview */}
          <R>
            <div style={{ marginTop: '60px' }}>
              <p style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '16px' }}>
                Opening hours — poster preview
              </p>
              <div style={{
                background: '#001E3C', padding: '64px 56px',
                maxWidth: '480px', position: 'relative', overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: 0, left: '40px', width: '1px', height: '100%', background: 'rgba(176,138,74,0.15)' }} />
                <p style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#B08A4A', marginBottom: '32px' }}>AerEthos Studio · Waterford</p>
                {[
                  { day: 'Mon — Fri', hours: '09:00 – 17:30' },
                  { day: 'Saturday', hours: '10:00 – 14:00' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(176,138,74,0.15)', paddingBottom: '16px', marginBottom: '16px' }}>
                    <p style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '0.7rem', fontWeight: 300, color: 'rgba(207,201,184,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{row.day}</p>
                    <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic', fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: row.hours === 'Closed' ? 'rgba(207,201,184,0.25)' : '#CFC9B8', fontWeight: 300 }}>{row.hours}</p>
                  </div>
                ))}
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.52rem', color: 'rgba(176,138,74,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '8px' }}>By appointment outside these hours</p>
              </div>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)', marginTop: '10px', letterSpacing: '0.08em' }}>A2 poster version · one-colour print variant available</p>
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
