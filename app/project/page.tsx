import R from '@/components/R'
import Link from 'next/link'

export default function Project() {
  return (
    <>
      <div className="ptop">
        <div className="wrap">
          <R>
            <p className="label" style={{ marginBottom: '12px' }}>Final Project — 20%</p>
            <h1><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Folia</em> —<br />a brand identity</h1>
            <p className="sub">Business graphics for a fictional specialty bookshop. Cards, brochure, ads, menu, opening hours — one cohesive system.</p>
          </R>
        </div>
      </div>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">

          {/* Brand overview */}
          <div className="g2" style={{ gap: '64px', alignItems: 'start', marginBottom: '80px' }}>
            <R>
              <div>
                <p className="label" style={{ marginBottom: '12px' }}>The concept</p>
                <div className="rule" />
                <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--mid)', marginBottom: '20px' }}>
                  <strong style={{ color: 'var(--ink)' }}>Folia</strong> is a fictional independent bookshop in Waterford city. The brand is built around the idea of quiet, intentional reading — earthy tones, serif type, and a complete refusal to be loud about it.
                </p>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--mid)' }}>
                  The name comes from the Latin <em>folium</em> — a leaf, a page. Every design decision points back to that: paper textures, soft greens, a logo mark that echoes a turned page.
                </p>

                {/* Logo display */}
                <div style={{ marginTop: '36px', background: '#f9f6f0', border: '1px solid var(--faint)', padding: '48px 40px', display: 'flex', justifyContent: 'center' }}>
                  <svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '220px' }}>
                    {/* Page-turn mark */}
                    <path d="M 20 80 L 20 20 Q 20 12 28 12 L 55 12 Q 63 12 63 20 L 63 68 Q 63 76 55 80 Z" fill="none" stroke="#3d6b4f" strokeWidth="3.5"/>
                    <path d="M 40 12 L 63 30" stroke="#3d6b4f" strokeWidth="3.5" strokeLinecap="round"/>
                    <text x="80" y="52" fontFamily="Georgia,serif" fontSize="28" fontWeight="700" fill="#2a2520" letterSpacing="1">FOLIA</text>
                    <text x="80" y="70" fontFamily="Georgia,serif" fontSize="10" fill="#7a6f64" letterSpacing="3">BOOKS · WATERFORD</text>
                  </svg>
                </div>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)', marginTop: '8px', letterSpacing: '0.08em' }}>Primary logo — SVG, works at any scale</p>
              </div>
            </R>

            <R delay={100}>
              <div>
                <p className="label" style={{ marginBottom: '12px' }}>Brand system</p>
                <div className="rule" />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                  {[
                    { swatch: '#2a2520', name: 'Bark', hex: '#2A2520' },
                    { swatch: '#3d6b4f', name: 'Fern', hex: '#3D6B4F' },
                    { swatch: '#f9f6f0', name: 'Vellum', hex: '#F9F6F0' },
                    { swatch: '#c4793a', name: 'Amber', hex: '#C4793A' },
                  ].map(c => (
                    <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{ width: '36px', height: '36px', background: c.swatch, flexShrink: 0, border: '1px solid var(--faint)' }} />
                      <div>
                        <p style={{ fontSize: '0.85rem', fontWeight: 500 }}>{c.name}</p>
                        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)' }}>{c.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', marginBottom: '2px' }}>Playfair Display</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)', marginBottom: '12px', letterSpacing: '0.08em' }}>HEADINGS — SERIF — EMOTIONAL</p>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', marginBottom: '2px' }}>Instrument Sans</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)', letterSpacing: '0.08em' }}>BODY COPY — CLEAN — READABLE</p>
                </div>
              </div>
            </R>
          </div>

          {/* Deliverables */}
          <R>
            <p className="label" style={{ marginBottom: '12px' }}>Deliverables</p>
            <div className="rule" />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '48px' }}>Six pieces</h2>
          </R>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: '1px solid var(--faint)', overflow: 'hidden', marginBottom: '60px' }}>
            {[
              {
                num: '01', title: 'Business Cards', format: '85 × 55mm · CMYK · 350gsm',
                desc: 'Double-sided. Front: logo, name, role on vellum background. Back: Fern green with contact details in white. Designed with 3mm bleed throughout.',
                tool: 'Adobe Illustrator'
              },
              {
                num: '02', title: 'Trifold Brochure', format: 'A4 folded to DL · 6 panels',
                desc: 'Interior tells the Folia story: founding, curation philosophy, events. Generous white space, a single pull quote per panel. Photography direction: warm, natural light on books.',
                tool: 'Adobe InDesign'
              },
              {
                num: '03', title: 'Print Advertisement', format: 'A4 + 1080×1080px social',
                desc: 'Magazine-format print ad. Single overhead photo of an open book, minimal headline. Cropped to 1:1 and 4:5 for Instagram. Both exports included.',
                tool: 'Adobe Photoshop + Illustrator'
              },
              {
                num: '04', title: 'Café Menu', format: 'A5 portrait · two-colour',
                desc: 'Folia has a small café section. Menu covers hot drinks and light food. Typographic hierarchy: Playfair for section headers, Instrument Sans for items and prices.',
                tool: 'Adobe InDesign'
              },
              {
                num: '05', title: 'Opening Hours', format: 'A2 poster + A6 card',
                desc: 'Hours as the visual centrepiece — large, editorial, proud. Also produced as a small A6 card for the counter. One-colour print version included for cost efficiency.',
                tool: 'Adobe Illustrator'
              },
              {
                num: '06', title: 'Website Mockup', format: 'Figma · desktop + mobile',
                desc: 'Three-page prototype: Home, Shop, Visit. Designed mobile-first. Interactive Figma prototype linked from this page. Reflects the same warm editorial tone as the print materials.',
                tool: 'Figma'
              },
            ].map((d, i) => (
              <R key={i} delay={i * 50}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '56px 1fr',
                  borderBottom: i < 5 ? '1px solid var(--faint)' : undefined
                }}>
                  <div style={{
                    background: i % 2 === 0 ? 'var(--bg2)' : 'var(--white)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRight: '1px solid var(--faint)',
                    fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--faint)'
                  }}>{d.num}</div>
                  <div style={{ padding: '22px 28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                      <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem' }}>{d.title}</h3>
                      <span className="tag">{d.tool}</span>
                    </div>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)', letterSpacing: '0.1em', marginBottom: '8px', textTransform: 'uppercase' }}>{d.format}</p>
                    <p style={{ color: 'var(--mid)', fontSize: '0.86rem', lineHeight: 1.8 }}>{d.desc}</p>
                  </div>
                </div>
              </R>
            ))}
          </div>

          {/* Business card mockup inline */}
          <R>
            <p className="label" style={{ marginBottom: '12px' }}>Business card — preview</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '600px' }}>
              {/* Front */}
              <div style={{ background: '#f9f6f0', border: '1px solid var(--faint)', aspectRatio: '1.55/1', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" style={{ width: '130px' }}>
                  <path d="M 12 48 L 12 12 Q 12 7 16 7 L 32 7 Q 36 7 36 12 L 36 40 Q 36 45 32 48 Z" fill="none" stroke="#3d6b4f" strokeWidth="2.5"/>
                  <path d="M 24 7 L 36 17" stroke="#3d6b4f" strokeWidth="2.5" strokeLinecap="round"/>
                  <text x="48" y="30" fontFamily="Georgia,serif" fontSize="18" fontWeight="700" fill="#2a2520">FOLIA</text>
                  <text x="48" y="44" fontFamily="Georgia,serif" fontSize="7" fill="#7a6f64" letterSpacing="2.5">BOOKS · WATERFORD</text>
                </svg>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', color: 'var(--mid)', letterSpacing: '0.06em' }}>Front — Vellum (#F9F6F0)</p>
              </div>
              {/* Back */}
              <div style={{ background: '#3d6b4f', aspectRatio: '1.55/1', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '0.95rem', color: '#fff', marginBottom: '4px' }}>Aoife Brennan</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Founder & Head Bookseller</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.9 }}>
                    hello@folia.ie<br />
                    +353 51 000 000<br />
                    12 Broad St, Waterford
                  </p>
                </div>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)', marginTop: '10px', letterSpacing: '0.08em' }}>Actual print dimensions: 85 × 55mm · 350gsm silk laminate</p>
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
