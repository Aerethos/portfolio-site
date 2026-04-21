import R from '@/components/R'
import Link from 'next/link'

const reviews = [
  {
    type: 'Poster',
    name: 'Apple — "Think Different" (1997)',
    url: 'https://en.wikipedia.org/wiki/Think_different',
    problems: [
      'Hierarchy is entirely reliant on a single font — no typographic contrast beyond size',
      'The composition is static; there\'s no visual movement or tension to hold the eye',
      'Small tagline placement at the bottom feels like an afterthought rather than a deliberate decision',
    ],
    positives: [
      'Radical restraint — trusting a portrait and three words is a courageous design call',
      'High-contrast black and white forces emotional engagement before the brain processes copy',
      'Became one of the most recognised ad campaigns ever, which is the ultimate proof the simplicity worked',
    ],
    improvements: [
      'Introduce subtle typographic texture between the name label and the tagline',
      'Slight vignette on the portrait would increase focus on the subject\'s eyes',
    ],
  },
  {
    type: 'Advertisement',
    name: 'IKEA — "Everyday Fabulous" print series',
    url: 'https://www.jasonashlock.com/IKEA-Everyday-Fabulous',
    problems: [
      'Too many products in frame — the hero item gets lost, the eye doesn\'t know where to settle',
      'Price callouts use a competing visual language to the lifestyle photography — they feel grafted on',
      'Font size across the hierarchy is inconsistent in a way that looks accidental, not intentional',
    ],
    positives: [
      'Warm, natural photography creates genuine aspiration — you want to live in that room',
      'Swedish identity maintained through colour use without being heavy-handed about it',
      'Copy tone ("For every budget, for every taste") is unusually humble and effective for a retail brand',
    ],
    improvements: [
      'Choose one hero product and give it breathing room — let supporting items recede visually',
      'Create a separate design language for pricing that feels like it belongs to the lifestyle, not interrupts it',
    ],
  },
  {
    type: 'Website',
    name: 'Stripe.com',
    url: 'https://stripe.com',
    problems: [
      'Animation-heavy home page has no prefers-reduced-motion support — an accessibility gap for a company that should know better',
      'Two primary CTAs ("Start now" + "Contact sales") creates decision paralysis for new visitors',
      'Some gradient overlays in mid-page sections push text below WCAG AA contrast ratios',
    ],
    positives: [
      'The gradient mesh background on the hero is genuinely beautiful — sets tone in under a second',
      'Typographic scale is masterclass level — every font size decision feels deliberate',
      'Developer trust signals (code snippets, API docs links) are woven into the marketing narrative seamlessly',
    ],
    improvements: [
      'Single primary CTA on the hero. Move "Contact sales" to the nav',
      'Add a motion preference media query — one line of CSS, massive accessibility improvement',
    ],
  },
]

export default function Review() {
  return (
    <>
      <style>{`
        .review-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--mono);
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 12px;
          border: 1px solid var(--faint);
          color: var(--mid);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          white-space: nowrap;
          cursor: none;
        }
        .review-tag:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(212,69,12,0.05);
        }
      `}</style>

      <div className="ptop">
        <div className="wrap">
          <R>
            <p className="label" style={{ marginBottom: '12px' }}>Graphic Review</p>
            <h1>Three things<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>looked at hard.</em></h1>
            <p className="sub">A poster, an ad & a website — each analysed for what&apos;s broken, what&apos;s worth stealing, and what could be better.</p>
          </R>
        </div>
      </div>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          {reviews.map((r, i) => (
            <R key={i} delay={i * 60}>
              <div style={{
                marginBottom: '48px',
                borderBottom: i < reviews.length - 1 ? '1px solid var(--faint)' : undefined,
                paddingBottom: i < reviews.length - 1 ? '48px' : 0
              }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap' }}>

                  <a href={r.url} target="_blank" rel="noreferrer" className="review-tag">
                    {r.type}
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7L7 1M7 1H2.5M7 1V5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>

                  <h2 style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                    flex: 1,
                    minWidth: '200px'
                  }}>{r.name}</h2>
                </div>

                <div className="g3" style={{ gap: '28px' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c0392b', marginBottom: '14px' }}>Problems</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {r.problems.map((p, j) => (
                        <li key={j} style={{ fontSize: '0.85rem', color: 'var(--mid)', lineHeight: 1.75, paddingLeft: '14px', borderLeft: '2px solid #e8b4b0' }}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2b7a3d', marginBottom: '14px' }}>Positives</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {r.positives.map((p, j) => (
                        <li key={j} style={{ fontSize: '0.85rem', color: 'var(--mid)', lineHeight: 1.75, paddingLeft: '14px', borderLeft: '2px solid #a8d5b5' }}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '14px' }}>Improvements</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {r.improvements.map((p, j) => (
                        <li key={j} style={{ fontSize: '0.85rem', color: 'var(--mid)', lineHeight: 1.75, paddingLeft: '14px', borderLeft: '2px solid #a8c4e0' }}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </R>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 0', borderTop: '1px solid var(--faint)' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
          <Link href="/project" className="btn btn-outline">← Final Project</Link>
          <Link href="/" className="btn">Back to home →</Link>
        </div>
      </section>
    </>
  )
}
