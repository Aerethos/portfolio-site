import R from '@/components/R'
import Link from 'next/link'

const domains = [
  { tld: '.be', country: 'Belgium', r1: 'Namecheap', p1: '€9.98', r2: 'GoDaddy', p2: '€12.99' },
  { tld: '.sk', country: 'Slovakia', r1: 'Websupport', p1: '€8.40', r2: 'Namecheap', p2: '€11.88' },
  { tld: '.eu', country: 'EU-wide', r1: 'Hostinger', p1: '€2.99', r2: 'EurID', p2: '€5.50' },
  { tld: '.pt', country: 'Portugal', r1: 'PTisp', p1: '€7.20', r2: 'GoDaddy', p2: '€14.99' },
  { tld: '.es', country: 'Spain', r1: 'Nominalia', p1: '€6.90', r2: 'Namecheap', p2: '€9.98' },
  { tld: '.ro', country: 'Romania', r1: 'EvoDomain', p1: '€6.50', r2: 'Hostinger', p2: '€5.99' },
]

const hosting = [
  { name: 'Vercel', type: 'JAMstack', free: 'Yes', paid: '€20/mo', note: 'What this site runs on. GitHub push → live in seconds.' },
  { name: 'Netlify', type: 'Static / Serverless', free: 'Yes', paid: '€15/mo', note: 'Strong alternative to Vercel, great form handling.' },
  { name: 'Webnode', type: 'Website builder', free: 'Yes', paid: '€3.90/mo', note: 'Popular in Central Europe, drag-and-drop builder.' },
  { name: 'Webglobe', type: 'Shared hosting', free: 'Trial', paid: '€2.99/mo', note: 'Central European provider, entry-level option.' },
  { name: 'Hostinger EU', type: 'Shared / VPS', free: 'No', paid: '€2.49/mo', note: 'Cheapest in this list. LiteSpeed, decent performance.' },
  { name: 'GitHub Pages', type: 'Static only', free: 'Free', paid: '—', note: 'Only for static sites, no server-side. Great for portfolios.' },
]

const EdutusLogo = ({ dark = false }: { dark?: boolean }) => (
  <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px' }}>
    {/* Green circle */}
    <circle cx="56" cy="60" r="48" fill="#6abf1e" />
    {/* Three white horizontal bars (the E mark) */}
    <rect x="32" y="44" width="48" height="8" rx="4" fill="white" />
    <rect x="32" y="56" width="48" height="8" rx="4" fill="white" />
    <rect x="32" y="68" width="48" height="8" rx="4" fill="white" />
    {/* Wordmark */}
    <text
      x="120" y="52"
      fontFamily="Arial Black, Arial, sans-serif"
      fontSize="28"
      fontWeight="900"
      fill={dark ? '#ffffff' : '#1a1a1a'}
      letterSpacing="1"
    >EDUTUS</text>
    <text
      x="120" y="82"
      fontFamily="Arial Black, Arial, sans-serif"
      fontSize="28"
      fontWeight="900"
      fill={dark ? '#ffffff' : '#1a1a1a'}
      letterSpacing="1"
    >EGYETEM</text>
  </svg>
)

export default function Tasks() {
  return (
    <>
      <div className="ptop">
        <div className="wrap">
          <R>
            <p className="label" style={{ marginBottom: '12px' }}>Weekly Tasks — 50%</p>
            <h1>The work.</h1>
            <p className="sub">Domain research, web hosting costs, a vector logo, and a bitmap edit.</p>
          </R>
        </div>
      </div>

      {/* DOMAIN COSTS */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <R>
            <p className="label">Task 1 — Domain Pricing</p>
            <div className="rule" />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '12px' }}>Six European domain extensions</h2>
            <p style={{ color: 'var(--mid)', maxWidth: '560px', lineHeight: 1.85, marginBottom: '40px', fontSize: '0.92rem' }}>
              Annual registration prices comparing a local/specialist registrar vs. a global one for each ccTLD.
            </p>
          </R>
          <R delay={80}>
            <div style={{ overflowX: 'auto' }}>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>TLD</th><th>Country</th><th>Registrar 1</th><th>Price</th><th>Registrar 2</th><th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {domains.map(d => (
                    <tr key={d.tld}>
                      <td><strong className="hi">{d.tld}</strong></td>
                      <td>{d.country}</td>
                      <td>{d.r1}</td><td className="hi">{d.p1}</td>
                      <td>{d.r2}</td><td className="hi">{d.p2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </R>
          <R delay={120}>
            <p style={{ marginTop: '16px', fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'var(--mid)', letterSpacing: '0.08em' }}>
              * .eu requires EU residency. Prices correct as of April 2025.
            </p>
          </R>
        </div>
      </section>

      {/* HOSTING */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--faint)', borderBottom: '1px solid var(--faint)' }}>
        <div className="wrap">
          <R>
            <p className="label">Task 1b — Web Hosting</p>
            <div className="rule" />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '12px' }}>Hosting & website creation costs</h2>
            <p style={{ color: 'var(--mid)', maxWidth: '560px', lineHeight: 1.85, marginBottom: '40px', fontSize: '0.92rem' }}>
              Covers European providers and international platforms — from drag-and-drop builders to modern JAMstack, which is what this site uses.
            </p>
          </R>
          <R delay={80}>
            <div style={{ overflowX: 'auto' }}>
              <table className="tbl">
                <thead>
                  <tr><th>Provider</th><th>Type</th><th>Free tier</th><th>Paid plan</th><th>Notes</th></tr>
                </thead>
                <tbody>
                  {hosting.map(h => (
                    <tr key={h.name}>
                      <td><strong>{h.name}</strong></td>
                      <td style={{ color: 'var(--mid)', fontSize: '0.8rem' }}>{h.type}</td>
                      <td style={{ color: h.free === 'Yes' || h.free === 'Free' ? '#2b8a3e' : 'var(--mid)', fontFamily: 'var(--mono)', fontSize: '0.75rem' }}>{h.free}</td>
                      <td className="hi">{h.paid}</td>
                      <td style={{ color: 'var(--mid)', fontSize: '0.8rem', maxWidth: '240px' }}>{h.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </R>
        </div>
      </section>

      {/* LOGO — SVG */}
      <section>
        <div className="wrap">
          <R>
            <p className="label">Task 2 — Vector Logo</p>
            <div className="rule" />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '12px' }}>Edutus Egyetem — SVG</h2>
            <p style={{ color: 'var(--mid)', maxWidth: '560px', lineHeight: 1.85, marginBottom: '48px', fontSize: '0.92rem' }}>
              Recreated in vector format using SVG — the same format used by professional design tools like Illustrator and Inkscape. A vector file scales to any size without ever losing quality, unlike a PNG or JPEG.
            </p>
          </R>

          <div className="g2" style={{ gap: '24px', marginBottom: '32px' }}>
            {/* Light version */}
            <R>
              <div>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid var(--faint)',
                  padding: '52px 40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <EdutusLogo dark={false} />
                </div>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)', marginTop: '10px', letterSpacing: '0.08em' }}>
                  Primary — on white
                </p>
              </div>
            </R>

            {/* Dark version */}
            <R delay={80}>
              <div>
                <div style={{
                  background: '#1a1a1a',
                  padding: '52px 40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <EdutusLogo dark={true} />
                </div>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)', marginTop: '10px', letterSpacing: '0.08em' }}>
                  Reversed — on dark
                </p>
              </div>
            </R>
          </div>

          {/* Brand identity breakdown */}
          <R delay={100}>
            <div className="card" style={{ marginTop: '8px' }}>
              <p className="label" style={{ marginBottom: '20px' }}>Brand identity — colour & type</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '32px' }}>

                {/* Colours */}
                <div>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid)', marginBottom: '14px' }}>Colour palette</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { swatch: '#6abf1e', name: 'Edutus Green', hex: '#6ABF1E' },
                      { swatch: '#1a1a1a', name: 'Near Black', hex: '#1A1A1A' },
                      { swatch: '#ffffff', name: 'White', hex: '#FFFFFF', border: true },
                    ].map(c => (
                      <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '32px', height: '32px', background: c.swatch, flexShrink: 0, border: c.border ? '1px solid var(--faint)' : undefined }} />
                        <div>
                          <p style={{ fontSize: '0.82rem', fontWeight: 500 }}>{c.name}</p>
                          <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)' }}>{c.hex}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typography */}
                <div>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid)', marginBottom: '14px' }}>Typography</p>
                  <p style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '1.4rem', fontWeight: 900, marginBottom: '4px', letterSpacing: '0.5px' }}>Arial Black</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)', marginBottom: '16px' }}>Wordmark — Bold, uppercase</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--mid)', lineHeight: 1.75 }}>
                    Heavy geometric sans-serif. Communicates authority and clarity — appropriate for an academic institution that positions itself as modern.
                  </p>
                </div>

                {/* Logo mark */}
                <div>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid)', marginBottom: '14px' }}>Logo mark</p>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '14px' }}>
                    <svg viewBox="0 0 80 80" style={{ width: '56px', height: '56px' }}>
                      <circle cx="40" cy="40" r="38" fill="#6abf1e" />
                      <rect x="18" y="26" width="44" height="7" rx="3.5" fill="white" />
                      <rect x="18" y="36.5" width="44" height="7" rx="3.5" fill="white" />
                      <rect x="18" y="47" width="44" height="7" rx="3.5" fill="white" />
                    </svg>
                    <svg viewBox="0 0 80 80" style={{ width: '56px', height: '56px' }}>
                      <circle cx="40" cy="40" r="38" fill="#1a1a1a" />
                      <rect x="18" y="26" width="44" height="7" rx="3.5" fill="#6abf1e" />
                      <rect x="18" y="36.5" width="44" height="7" rx="3.5" fill="#6abf1e" />
                      <rect x="18" y="47" width="44" height="7" rx="3.5" fill="#6abf1e" />
                    </svg>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--mid)', lineHeight: 1.75 }}>
                    The circular mark uses three bars referencing an abstract &ldquo;E&rdquo; — scalable to favicon size. The dark variant swaps to green bars for digital contexts.
                  </p>
                </div>

              </div>
            </div>
          </R>
        </div>
      </section>

      {/* BITMAP */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--faint)' }}>
        <div className="wrap">
          <R>
            <p className="label">Task 3 — Bitmap Edit</p>
            <div className="rule" />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '12px' }}>Faculty banner</h2>
            <p style={{ color: 'var(--mid)', maxWidth: '540px', lineHeight: 1.85, marginBottom: '48px', fontSize: '0.92rem' }}>
              A web banner for the Faculty of Business &amp; Informatics. Source image adjusted for brightness, contrast, and saturation, then a text layer was added with a shadow for legibility.
            </p>
          </R>

          <R delay={80}>
            <div style={{
              width: '100%', aspectRatio: '4/1', minHeight: '160px',
              background: 'linear-gradient(105deg, #1a1a1a 0%, #2d2d2d 50%, #3a5c1a 100%)',
              position: 'relative', overflow: 'hidden',
              border: '1px solid var(--faint)',
              display: 'flex', alignItems: 'center', padding: '0 48px',
              gap: '32px'
            }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.06\'/%3E%3C/svg%3E")', opacity: 0.5 }} />
              <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '40%', background: 'linear-gradient(to left, rgba(106,191,30,0.15), transparent)' }} />

              {/* Mini logo in banner */}
              <svg viewBox="0 0 80 80" style={{ width: '52px', height: '52px', flexShrink: 0, position: 'relative' }}>
                <circle cx="40" cy="40" r="38" fill="#6abf1e" />
                <rect x="18" y="26" width="44" height="7" rx="3.5" fill="white" />
                <rect x="18" y="36.5" width="44" height="7" rx="3.5" fill="white" />
                <rect x="18" y="47" width="44" height="7" rx="3.5" fill="white" />
              </svg>

              <div style={{ position: 'relative' }}>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '6px' }}>Edutus Egyetem</p>
                <h3 style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: 'clamp(1rem, 2.5vw, 1.8rem)', color: '#ffffff', textShadow: '0 2px 18px rgba(0,0,0,0.5)', fontWeight: 900, letterSpacing: '0.5px' }}>
                  Faculty of Business &amp; Informatics
                </h3>
              </div>
            </div>
          </R>

          <R delay={120}>
            <div className="card" style={{ marginTop: '20px' }}>
              <p className="label" style={{ marginBottom: '12px' }}>Modifications made.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px' }}>
                {[
                  { step: 'Brightness / Contrast', detail: '+15 brightness, +22 contrast — Colours → Brightness-Contrast' },
                  { step: 'Hue-Saturation', detail: 'Saturation +28, shifting the background toward the brand green' },
                  { step: 'Unsharp Mask', detail: 'Radius 2.0, Amount 0.45, Threshold 0 — sharpens edges' },
                  { step: 'Text layer', detail: 'Added over image with Gaussian blur drop shadow (σ = 3px, black, 60% opacity)' },
                  { step: 'Export', detail: 'PNG-24, 1800×450px at 144 DPI for retina screens' },
                  { step: 'Tool', detail: 'GIMP 2.10 (free, open-source raster editor)' },
                ].map((m, i) => (
                  <div key={i} style={{ paddingLeft: '12px', borderLeft: '2px solid var(--faint)' }}>
                    <p style={{ fontWeight: 500, fontSize: '0.85rem', marginBottom: '2px' }}>{m.step}</p>
                    <p style={{ color: 'var(--mid)', fontSize: '0.8rem', lineHeight: 1.7 }}>{m.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </R>
        </div>
      </section>

      <section style={{ padding: '60px 0', borderTop: '1px solid var(--faint)' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
          <Link href="/about" className="btn btn-outline">← About</Link>
          <Link href="/project" className="btn">Final Project →</Link>
        </div>
      </section>
    </>
  )
}
