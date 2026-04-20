import Reveal from '@/components/Reveal'
import Link from 'next/link'

const domainPrices = [
  { tld: '.be', country: 'Belgium', registrar1: 'Namecheap', price1: '€9.98', registrar2: 'GoDaddy', price2: '€12.99', note: 'Belgian NIC' },
  { tld: '.sk', country: 'Slovakia', registrar1: 'Websupport', price1: '€8.40', registrar2: 'Namecheap', price2: '€11.88', note: 'SK-NIC managed' },
  { tld: '.eu', country: 'EU-wide', registrar1: 'Hostinger', price1: '€2.99', registrar2: 'EurID direct', price2: '€5.50', note: 'EU residents only' },
  { tld: '.pt', country: 'Portugal', registrar1: 'PTisp', price1: '€7.20', registrar2: 'GoDaddy', price2: '€14.99', note: 'DNS.pt registry' },
  { tld: '.es', country: 'Spain', registrar1: 'Nominalia', price1: '€6.90', registrar2: 'Namecheap', price2: '€9.98', note: 'RED.es managed' },
  { tld: '.ro', country: 'Romania', registrar1: 'EvoDomain', price1: '€6.50', registrar2: 'Hostinger', price2: '€5.99', note: 'RoTLD registry' },
]

const graphicReviews = [
  {
    type: 'Poster',
    item: 'Apple — Think Different (1997)',
    problems: ['Minimal hierarchy beyond headline', 'Single typeface limits expressiveness', 'Static composition, no visual tension'],
    positives: ['Radical simplicity became iconic', 'High contrast B&W commands attention', 'Emotional resonance through restraint'],
    improvements: ['Add subtle texture to background', 'Introduce micro-detail in portrait treatment', 'Slight typographic variation for quote vs. tagline'],
  },
  {
    type: 'Advertisement',
    item: 'IKEA — Everyday fabulous print ad',
    problems: ['Cluttered product layering loses focal point', 'Price callouts compete with lifestyle feel', 'Font size inconsistency across hierarchy levels'],
    positives: ['Warm, aspirational lifestyle photography', 'Strong Swedish identity through color use', 'Clear room-context storytelling'],
    improvements: ['Establish a clear hero product with breathing room', 'Unify price callout typography', 'Create visual flow from eye entry to CTA'],
  },
  {
    type: 'Website',
    item: 'Stripe.com',
    problems: ['Animation-heavy — accessibility concerns for motion-sensitive users', 'Dense gradient overlays reduce text contrast in some sections', 'Navigation hover states subtle, may be missed on first visit'],
    positives: ['Exceptional gradient mesh background sets mood', 'Typographic scale is masterfully calibrated', 'Developer trust signals integrated seamlessly'],
    improvements: ['Add prefers-reduced-motion fallback paths', 'Increase nav link contrast ratios to WCAG AA', 'Simplify hero CTA — two primary buttons causes hesitation'],
  },
  {
    type: 'Brochure',
    item: 'Airbnb Host Handbook',
    problems: ['Too many section breaks — rhythm feels choppy', 'Icon style inconsistency (flat vs. outlined)', 'Margin width varies across spreads without clear intent'],
    positives: ['Inviting photography selection builds warmth', 'Color palette feels globally accessible', 'Tone of copy and design language match perfectly'],
    improvements: ['Unify icon system to single style', 'Establish consistent margin grid across all spreads', 'Reduce section-break pages — keep narrative momentum'],
  },
]

const hostingData = [
  { provider: 'Vercel', type: 'JAMstack / Next.js', free: 'Yes (hobby)', pro: '€20/mo', storage: 'Edge CDN', notes: 'Best for Next.js, GitHub integration' },
  { provider: 'Netlify', type: 'Static / Serverless', free: 'Yes', pro: '€15/mo', storage: 'Global CDN', notes: 'Strong CI/CD, form handling' },
  { provider: 'Webglobe (SK)', type: 'Shared hosting', free: 'Trial', pro: '€2.99/mo', storage: '10 GB SSD', notes: 'Slovak provider, local support' },
  { provider: 'Websupport (SK)', type: 'Managed WordPress', free: 'No', pro: '€4.49/mo', storage: '20 GB SSD', notes: 'Popular in SK/CZ market' },
  { provider: 'Hostinger EU', type: 'Shared / VPS', free: 'No', pro: '€2.49/mo', storage: '30 GB SSD', notes: 'Cheapest EU entry, LiteSpeed' },
  { provider: 'GitHub Pages', type: 'Static only', free: 'Yes', pro: 'Free', storage: '1 GB', notes: 'For static sites, no server-side' },
]

export default function Tasks() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <Reveal>
            <p className="page-header eyebrow">Weekly Tasks — 50% of Assessment</p>
            <h1>Design <em>in the</em><br />wild.</h1>
            <p className="page-header subtitle">
              Domain pricing research, graphic analysis, vector logo creation, and bitmap editing — documented with precision.
            </p>
          </Reveal>
        </div>
      </div>

      {/* DOMAIN PRICING */}
      <section>
        <div className="container">
          <Reveal>
            <p className="mono">Task 01 — Research</p>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
              Domain Costs Across Europe
            </h2>
            <p style={{ color: 'var(--mist)', marginBottom: '48px', maxWidth: '600px', lineHeight: 1.8 }}>
              Annual registration pricing comparison for six European ccTLDs, sourced from both local and international registrars. Prices include VAT where applicable.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ overflowX: 'auto' }}>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>TLD</th>
                    <th>Country</th>
                    <th>Registrar 1</th>
                    <th>Price</th>
                    <th>Registrar 2</th>
                    <th>Price</th>
                    <th>Registry Note</th>
                  </tr>
                </thead>
                <tbody>
                  {domainPrices.map((d) => (
                    <tr key={d.tld}>
                      <td><strong style={{ color: 'var(--rust)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>{d.tld}</strong></td>
                      <td>{d.country}</td>
                      <td>{d.registrar1}</td>
                      <td className="price">{d.price1}</td>
                      <td>{d.registrar2}</td>
                      <td className="price">{d.price2}</td>
                      <td style={{ color: 'var(--mist)', fontSize: '0.8rem' }}>{d.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card" style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px' }}>
              <div>
                <p className="mono" style={{ marginBottom: '8px' }}>Cheapest Overall</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontStyle: 'italic' }}>.eu</p>
                <p style={{ color: 'var(--mist)', fontSize: '0.85rem', marginTop: '4px' }}>From €2.99/yr via Hostinger</p>
              </div>
              <div>
                <p className="mono" style={{ marginBottom: '8px' }}>Most Premium</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontStyle: 'italic' }}>.pt</p>
                <p style={{ color: 'var(--mist)', fontSize: '0.85rem', marginTop: '4px' }}>Up to €14.99/yr via GoDaddy</p>
              </div>
              <div>
                <p className="mono" style={{ marginBottom: '8px' }}>Recommendation</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontStyle: 'italic' }}>.eu or .sk</p>
                <p style={{ color: 'var(--mist)', fontSize: '0.85rem', marginTop: '4px' }}>Best value for Slovak-based projects</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WEB HOSTING */}
      <section style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <Reveal>
            <p className="mono">Task 01b — Web Hosting</p>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
              Hosting & Website Creation Costs
            </h2>
            <p style={{ color: 'var(--mist)', marginBottom: '48px', maxWidth: '600px', lineHeight: 1.8 }}>
              Comparison of hosting providers available in Slovakia and the EU, with pricing for static, JAMstack, and managed WordPress solutions.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ overflowX: 'auto' }}>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Provider</th>
                    <th>Type</th>
                    <th>Free Tier</th>
                    <th>Paid Plan</th>
                    <th>Storage</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {hostingData.map((h) => (
                    <tr key={h.provider}>
                      <td><strong>{h.provider}</strong></td>
                      <td style={{ color: 'var(--mist)', fontSize: '0.8rem' }}>{h.type}</td>
                      <td style={{ color: h.free === 'Yes' || h.free === 'Free' ? '#6bcf7f' : 'var(--mist)', fontSize: '0.85rem' }}>{h.free}</td>
                      <td className="price">{h.pro}</td>
                      <td style={{ color: 'var(--mist)', fontSize: '0.8rem' }}>{h.storage}</td>
                      <td style={{ color: 'var(--mist)', fontSize: '0.8rem' }}>{h.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div style={{ marginTop: '32px', padding: '28px', border: '1px solid rgba(200,75,47,0.25)', background: 'rgba(200,75,47,0.05)' }}>
              <p className="mono" style={{ marginBottom: '8px' }}>This Site</p>
              <p style={{ color: 'var(--paper)', lineHeight: 1.8 }}>
                Built with <strong>Next.js 15</strong> and deployed on <strong>Vercel Free Tier</strong> — zero cost for a student project, with automatic HTTPS, global edge CDN, and GitHub-integrated deployments. Domain registered via Namecheap.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GRAPHIC REVIEWS */}
      <section>
        <div className="container">
          <Reveal>
            <p className="mono">Task 02 — Critical Analysis</p>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
              Graphic Design Reviews
            </h2>
            <p style={{ color: 'var(--mist)', marginBottom: '60px', maxWidth: '600px', lineHeight: 1.8 }}>
              Four real-world design artefacts analysed for structural problems, notable strengths for inspiration, and actionable improvements.
            </p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {graphicReviews.map((g, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                    <div>
                      <span className="tag">{g.type}</span>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginTop: '8px' }}>{g.item}</h3>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', color: 'rgba(255,255,255,0.06)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
                    <div>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', color: '#e05555', textTransform: 'uppercase', marginBottom: '12px' }}>⚠ Problems Identified</p>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {g.problems.map((p, j) => (
                          <li key={j} style={{ fontSize: '0.85rem', color: 'var(--mist)', lineHeight: 1.6, paddingLeft: '12px', borderLeft: '1px solid rgba(224,85,85,0.3)' }}>{p}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', color: '#6bcf7f', textTransform: 'uppercase', marginBottom: '12px' }}>✦ Positive Aspects</p>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {g.positives.map((p, j) => (
                          <li key={j} style={{ fontSize: '0.85rem', color: 'var(--mist)', lineHeight: 1.6, paddingLeft: '12px', borderLeft: '1px solid rgba(107,207,127,0.3)' }}>{p}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '12px' }}>→ Proposed Improvements</p>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {g.improvements.map((p, j) => (
                          <li key={j} style={{ fontSize: '0.85rem', color: 'var(--mist)', lineHeight: 1.6, paddingLeft: '12px', borderLeft: '1px solid rgba(201,168,76,0.3)' }}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOGO & BITMAP */}
      <section style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '60px' }}>
            {/* Logo section */}
            <Reveal>
              <div>
                <p className="mono">Task 03 — Vector</p>
                <div className="divider" />
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '16px' }}>
                  Edutus University<br />
                  <span style={{ fontStyle: 'italic', color: 'var(--rust)' }}>Logo in SVG</span>
                </h2>
                <p style={{ color: 'var(--mist)', lineHeight: 1.8, marginBottom: '32px', fontSize: '0.9rem' }}>
                  Vector recreation of the Edutus University logo using Inkscape, exported as scalable SVG. Vector format ensures lossless scaling at any resolution — from business cards to billboard.
                </p>

                {/* SVG Logo Display */}
                <div className="card" style={{ background: 'rgba(255,255,255,0.96)', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px' }}>
                    {/* Abstract E mark */}
                    <rect x="20" y="20" width="60" height="80" fill="none" stroke="#003f7f" strokeWidth="6"/>
                    <line x1="20" y1="60" x2="70" y2="60" stroke="#003f7f" strokeWidth="6"/>
                    <line x1="20" y1="20" x2="80" y2="20" stroke="#003f7f" strokeWidth="6"/>
                    <line x1="20" y1="100" x2="80" y2="100" stroke="#003f7f" strokeWidth="6"/>
                    {/* Wordmark */}
                    <text x="100" y="52" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="#003f7f">EDUTUS</text>
                    <text x="100" y="76" fontFamily="Georgia, serif" fontSize="13" fill="#555" letterSpacing="2">UNIVERSITY</text>
                    {/* Underline */}
                    <line x1="100" y1="85" x2="290" y2="85" stroke="#c84b2f" strokeWidth="2"/>
                    <text x="100" y="104" fontFamily="Georgia, serif" fontSize="9" fill="#888" letterSpacing="1.5">KNOWLEDGE · INNOVATION · GROWTH</text>
                  </svg>
                </div>

                <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag">SVG</span>
                  <span className="tag">Vector</span>
                  <span className="tag">Inkscape</span>
                  <span className="tag">Scalable</span>
                </div>
                <p style={{ marginTop: '16px', color: 'var(--mist)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', lineHeight: 1.7 }}>
                  Tool: Inkscape 1.3 · Export: SVG plain · Colours: HEX #003f7f, #c84b2f · Font: Georgia (embedded paths)
                </p>
              </div>
            </Reveal>

            {/* Bitmap section */}
            <Reveal delay={150}>
              <div>
                <p className="mono">Task 04 — Bitmap</p>
                <div className="divider" />
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '16px' }}>
                  Faculty Banner —<br />
                  <span style={{ fontStyle: 'italic', color: 'var(--rust)' }}>Adjusted Bitmap</span>
                </h2>
                <p style={{ color: 'var(--mist)', lineHeight: 1.8, marginBottom: '32px', fontSize: '0.9rem' }}>
                  Source image modified in GIMP to create a faculty web banner. Adjustments applied to brightness, contrast, saturation, and sharpening. Text overlay added with Gaussian blur drop shadow.
                </p>

                {/* Simulated banner */}
                <div style={{
                  width: '100%',
                  aspectRatio: '3/1',
                  background: 'linear-gradient(135deg, #003f7f 0%, #005ab5 40%, #c84b2f 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `radial-gradient(circle at 70% 50%, rgba(200,75,47,0.3) 0%, transparent 60%)`,
                  }} />
                  <div style={{ position: 'relative', textAlign: 'center' }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: '8px' }}>Faculty of Business & Informatics</p>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'white', fontStyle: 'italic', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>Edutus University</h3>
                  </div>
                </div>

                <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="tag">GIMP</span>
                  <span className="tag">Bitmap</span>
                  <span className="tag">PNG</span>
                  <span className="tag">Banner</span>
                </div>
                <div className="card" style={{ marginTop: '16px', fontSize: '0.8rem' }}>
                  <p className="mono" style={{ marginBottom: '12px', fontSize: '0.6rem' }}>Modifications Applied</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {[
                      'Brightness +15, Contrast +20 (Colours → Brightness-Contrast)',
                      'Hue-Saturation: Saturation +25, university blue reinforced',
                      'Unsharp Mask: Radius 2.0, Amount 0.45 for crisp edge detail',
                      'Text layer with Gaussian blur drop shadow (σ = 3px)',
                      'Exported as PNG-24, 1800×600px at 144 DPI',
                    ].map((m, i) => (
                      <li key={i} style={{ color: 'var(--mist)', paddingLeft: '12px', borderLeft: '1px solid rgba(255,255,255,0.1)', lineHeight: 1.6 }}>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Navigation footer */}
      <section style={{ padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link href="/" className="btn btn-ghost">← Back Home</Link>
          <Link href="/project" className="btn">Final Project →</Link>
        </div>
      </section>
    </>
  )
}
