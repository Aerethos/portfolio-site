import Reveal from '@/components/Reveal'
import Link from 'next/link'

const projectItems = [
  {
    title: 'Business Cards',
    desc: 'Double-sided cards for a fictional coffee brand "Origen". Front: logo and tagline. Reverse: contact details on textured dark background. Designed to 85×55mm bleed spec.',
    specs: ['85×55mm + 3mm bleed', 'CMYK color space', '350gsm silk', 'Bleed & crop marks'],
    color: '#c84b2f',
    icon: '▪'
  },
  {
    title: 'Trifold Brochure',
    desc: 'Six-panel brochure for the same Origen brand. Interior covers origin story, sourcing, and café offerings. Typography-led layout with generous whitespace and single accent color.',
    specs: ['A4 folded to DL', 'Front + back spreads', '170gsm gloss', '3 panels per side'],
    color: '#c9a84c',
    icon: '◫'
  },
  {
    title: 'Advertisement',
    desc: 'Full-page magazine ad and matching Instagram post (1:1 and 4:5 crops). Hero shot of single espresso, stark white background, minimal copy. Designed for both print and digital.',
    specs: ['A4 print + 1080×1080px', 'RGB & CMYK exports', 'Google Fonts + Adobe Stock', 'Print-ready PDF'],
    color: '#6bcf7f',
    icon: '◉'
  },
  {
    title: 'Café Menu',
    desc: 'Single-page A5 laminated menu. Structured by category: espresso, filter, cold, food. Clean typographic grid with icons and pricing. Seasonal variant built on same grid.',
    specs: ['A5 portrait', 'Two-colour print', 'Font: Cormorant + DM Mono', 'QR code link'],
    color: '#7eb8f7',
    icon: '◈'
  },
  {
    title: 'Opening Hours Board',
    desc: 'Poster-format opening hours display for window/wall use. Large typographic composition — hours as the hero visual element. Available in A2 poster and A6 takeaway card versions.',
    specs: ['A2 + A6 versions', 'Single ink (cost-efficient)', 'Indesign source file', 'Lasercut-ready variant'],
    color: '#b98ce0',
    icon: '◷'
  },
  {
    title: 'Website Mockup',
    desc: 'Figma wireframe and visual mockup for the Origen café website. Home, Menu, and About pages. Mobile-first responsive breakpoints. Exported as interactive prototype.',
    specs: ['Desktop + Mobile', 'Figma prototype', '3 pages', 'Auto layout components'],
    color: '#f7b97e',
    icon: '⊞'
  },
]

export default function Project() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <Reveal>
            <p className="page-header eyebrow">Final Project — 20% of Assessment</p>
            <h1><em>Origen</em> —<br />A Brand Identity</h1>
            <p className="page-header subtitle">
              A complete business graphics system for a fictional specialty coffee brand. Six deliverables across print and digital, unified by a single design language.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Brand intro */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
            <Reveal>
              <div>
                <p className="mono" style={{ marginBottom: '16px' }}>The Concept</p>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '20px' }}>
                  Where origin<br />
                  <span style={{ fontStyle: 'italic', color: 'var(--rust)' }}>becomes identity.</span>
                </h2>
                <p style={{ color: 'var(--mist)', lineHeight: 1.9, marginBottom: '16px', fontSize: '0.95rem' }}>
                  Origen is a fictional specialty coffee brand built around single-origin transparency. The brand identity system communicates authenticity, craft, and geographic story — every piece of collateral reinforces the core message.
                </p>
                <p style={{ color: 'var(--mist)', lineHeight: 1.9, fontSize: '0.95rem' }}>
                  The design system uses a constrained palette of ink, cream, and rust — echoing paper, espresso, and terracotta. Cormorant Garamond provides elegance while DM Mono adds technical precision.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div>
                <p className="mono" style={{ marginBottom: '16px' }}>Brand System</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: 'Primary', color: '#0a0a0a', name: 'Ink #0A0A0A' },
                    { label: 'Accent', color: '#c84b2f', name: 'Rust #C84B2F' },
                    { label: 'Warm', color: '#f4f0e8', name: 'Paper #F4F0E8' },
                    { label: 'Gold', color: '#c9a84c', name: 'Gold #C9A84C' },
                  ].map(c => (
                    <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '40px', height: '40px', background: c.color, border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }} />
                      <div>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--mist)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{c.label}</p>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>{c.name}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '24px' }}>
                  <p className="mono" style={{ marginBottom: '12px' }}>Typography</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '4px' }}>Cormorant Garamond</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--mist)' }}>Display / Headlines / Serif elegance</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginTop: '12px' }}>DM Mono</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--mist)' }}>Labels / Prices / Technical data</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Logo lockup */}
          <Reveal>
            <div style={{ marginBottom: '80px' }}>
              <p className="mono" style={{ marginBottom: '16px' }}>Logo Lockup</p>
              <div className="divider" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginTop: '24px' }}>
                {/* Dark bg */}
                <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--rust)', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'white', fontStyle: 'italic' }}>O</div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', letterSpacing: '0.1em', color: 'var(--paper)' }}>ORIGEN</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.2em', color: 'var(--mist)', textTransform: 'uppercase', marginTop: '4px' }}>Specialty Coffee</p>
                  </div>
                </div>
                {/* Light bg */}
                <div style={{ background: '#f4f0e8', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#0a0a0a', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'white', fontStyle: 'italic' }}>O</div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', letterSpacing: '0.1em', color: '#0a0a0a' }}>ORIGEN</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.2em', color: '#888', textTransform: 'uppercase', marginTop: '4px' }}>Specialty Coffee</p>
                  </div>
                </div>
                {/* Rust bg */}
                <div style={{ background: 'var(--rust)', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid white', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'white', fontStyle: 'italic' }}>O</div>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', letterSpacing: '0.1em', color: 'white' }}>ORIGEN</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginTop: '4px' }}>Specialty Coffee</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Deliverables */}
          <Reveal>
            <p className="mono" style={{ marginBottom: '16px' }}>Deliverables</p>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '48px' }}>
              Six pieces,<br />
              <span style={{ fontStyle: 'italic', color: 'var(--rust)' }}>one voice.</span>
            </h2>
          </Reveal>

          <div className="grid-2">
            {projectItems.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card">
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <span style={{ fontSize: '1.8rem', color: item.color, lineHeight: 1 }}>{item.icon}</span>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>{item.title}</h3>
                    </div>
                  </div>
                  <p style={{ color: 'var(--mist)', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '20px' }}>{item.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {item.specs.map(s => (
                      <span key={s} style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.08em',
                        padding: '3px 8px',
                        border: `1px solid ${item.color}40`,
                        color: item.color,
                        textTransform: 'uppercase'
                      }}>{s}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Process notes */}
          <Reveal>
            <div className="card" style={{ marginTop: '60px' }}>
              <p className="mono" style={{ marginBottom: '16px' }}>Design Process</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px' }}>
                {[
                  { step: '01', title: 'Research', text: 'Competitive analysis of 10 specialty coffee brands. Mood board creation in Figma.' },
                  { step: '02', title: 'Concept', text: 'Two directions sketched. Chosen: minimal editorial. Rejected: botanical illustrated.' },
                  { step: '03', title: 'Design', text: 'Adobe Illustrator for logo and vector assets. Figma for layout and web mockup.' },
                  { step: '04', title: 'Output', text: 'Print files exported to CMYK PDF with bleed. Digital assets exported as RGB PNG/SVG.' },
                ].map(s => (
                  <div key={s.step}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'rgba(255,255,255,0.08)', lineHeight: 1, marginBottom: '12px' }}>{s.step}</p>
                    <p style={{ fontWeight: 500, marginBottom: '8px' }}>{s.title}</p>
                    <p style={{ color: 'var(--mist)', fontSize: '0.82rem', lineHeight: 1.7 }}>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link href="/tasks" className="btn btn-ghost">← Tasks</Link>
          <Link href="/review" className="btn">Graphic Review →</Link>
        </div>
      </section>
    </>
  )
}
