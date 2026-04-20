import Link from 'next/link'
import Reveal from '@/components/Reveal'

const sections = [
  {
    href: '/tasks',
    number: '01',
    label: '50%',
    title: 'Weekly Tasks',
    description: 'Domain research, graphic reviews, logo design, bitmap editing, and web hosting analysis across six European TLDs.',
    tags: ['Design', 'Research', 'Typography']
  },
  {
    href: '/project',
    number: '02',
    label: '20%',
    title: 'Final Project',
    description: 'Business graphics with real-world application — cards, menus, brochures, advertisements, and opening hours.',
    tags: ['Branding', 'Print', 'Digital']
  },
  {
    href: '/quiz',
    number: '03',
    label: '20%',
    title: 'Quiz',
    description: 'Short knowledge test covering graphic design principles, tools, file formats, and web technologies.',
    tags: ['Theory', 'Formats', 'Tools']
  },
  {
    href: '/about',
    number: '04',
    label: '10%',
    title: 'Presentation',
    description: 'Five-minute walkthrough of the personal site, weekly tasks, and final project with live demonstration.',
    tags: ['Speaking', 'Demo', 'Summary']
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Background grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          pointerEvents: 'none'
        }} />
        {/* Red accent line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '40px',
          width: '1px',
          height: '100vh',
          background: 'linear-gradient(to bottom, transparent, var(--rust), transparent)',
          opacity: 0.4
        }} />
        {/* Large decorative number */}
        <div style={{
          position: 'absolute',
          right: '-40px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(200px, 30vw, 380px)',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.02)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.05em'
        }}>GD</div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '900px' }}>
            <Reveal>
              <p className="mono" style={{ marginBottom: '24px' }}>
                ◈ &nbsp; Graphic Design & Web — Portfolio
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: '8px'
              }}>
                Where design
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                marginBottom: '40px',
                color: 'var(--rust)'
              }}>
                meets intention.
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <p style={{
                fontSize: '1.15rem',
                color: 'var(--mist)',
                maxWidth: '500px',
                lineHeight: 1.8,
                marginBottom: '48px'
              }}>
                A complete portfolio documenting graphic design principles in practice — from domain research and logo creation to business identity systems.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/tasks" className="btn">Explore Tasks →</Link>
                <Link href="/project" className="btn btn-ghost">Final Project</Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          animation: 'bounce 2s ease-in-out infinite'
        }}>
          <style>{`
            @keyframes bounce {
              0%, 100% { transform: translateX(-50%) translateY(0); }
              50% { transform: translateX(-50%) translateY(8px); }
            }
          `}</style>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--mist)', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--rust), transparent)' }} />
        </div>
      </section>

      {/* Assessment breakdown */}
      <section style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <Reveal>
            <p className="mono" style={{ marginBottom: '16px' }}>Assessment Structure</p>
            <div className="divider" />
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', border: '1px solid rgba(255,255,255,0.07)' }}>
            {[
              { pct: '50%', label: 'Weekly Tasks', desc: 'Ongoing work' },
              { pct: '20%', label: 'Final Project', desc: 'Business graphics' },
              { pct: '20%', label: 'Quiz', desc: 'Knowledge test' },
              { pct: '10%', label: 'Presentation', desc: '5 min demo' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{
                  padding: '40px 32px',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : undefined,
                  position: 'relative'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                    fontWeight: 300,
                    color: 'var(--rust)',
                    lineHeight: 1,
                    marginBottom: '12px'
                  }}>{item.pct}</div>
                  <div style={{ fontWeight: 500, marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--mist)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nav cards */}
      <section>
        <div className="container">
          <Reveal>
            <p className="mono" style={{ marginBottom: '16px' }}>Navigate</p>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '60px', maxWidth: '600px' }}>
              Everything documented,<br />
              <span style={{ fontStyle: 'italic', color: 'var(--rust)' }}>every decision explained.</span>
            </h2>
          </Reveal>

          <div className="grid-2">
            {sections.map((s, i) => (
              <Reveal key={s.href} delay={i * 100}>
                <Link href={s.href} style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="card" style={{ position: 'relative', overflow: 'hidden', minHeight: '200px' }}>
                    <div style={{
                      position: 'absolute',
                      top: '24px',
                      right: '24px',
                      fontFamily: 'var(--font-display)',
                      fontSize: '4rem',
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.04)',
                      lineHeight: 1
                    }}>{s.number}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>
                      {s.label} — {s.title}
                    </div>
                    <p style={{ color: 'var(--mist)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px', maxWidth: '380px' }}>
                      {s.description}
                    </p>
                    <div>
                      {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <div style={{
                      marginTop: '24px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      color: 'var(--rust)',
                      textTransform: 'uppercase'
                    }}>View →</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links strip */}
      <section style={{ padding: '60px 0', background: 'var(--rust)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--white)', fontStyle: 'italic' }}>
                Final Project →
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginTop: '4px' }}>
                Business graphics · Cards, brochures, menus & more
              </p>
            </div>
            <Link href="/project" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--white)',
              border: '1px solid rgba(255,255,255,0.5)',
              padding: '14px 28px',
              transition: 'background 0.3s'
            }}>
              View Project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
