import Reveal from '@/components/Reveal'
import Link from 'next/link'

const criteria = [
  { label: 'Visual Hierarchy', weight: '25%', desc: 'Does the eye travel in a clear, intentional sequence?' },
  { label: 'Typography', weight: '20%', desc: 'Font choice, pairing, sizing, legibility, and spacing.' },
  { label: 'Color Usage', weight: '20%', desc: 'Palette coherence, contrast ratios, emotional resonance.' },
  { label: 'Message Clarity', weight: '20%', desc: 'Does the design communicate its purpose immediately?' },
  { label: 'Technical Quality', weight: '15%', desc: 'Resolution, bleed, safe zones, format compliance.' },
]

const reviews = [
  {
    index: '01',
    type: 'Website',
    name: 'Stripe.com',
    score: 91,
    overview: 'Stripe\'s website is an industry benchmark for developer-facing product design. The gradient mesh hero with layered card animations sets an immediately premium tone, and the typographic scale feels considered throughout.',
    hierarchy: { score: 93, notes: 'Clear F-pattern reading flow. Hero CTA highly visible. Navigation uses subtle weight differences effectively.' },
    typography: { score: 95, notes: 'Uses Saans (custom) for UI and Inter for body. Exceptional sizing scale. Line heights generous and readable.' },
    color: { score: 88, notes: 'Purple gradient is now a cliché in SaaS but executed here with more refinement than most. Contrast ratios pass WCAG AA in main content.' },
    message: { score: 92, notes: '"Payments infrastructure for the internet" — communicates in one line. Secondary copy elaborates without redundancy.' },
    technical: { score: 87, notes: 'Animation-heavy — no prefers-reduced-motion support found. Loading performance excellent via edge CDN.' },
    inspiration: 'The controlled use of depth via layered card elements creates hierarchy without heavy borders or shadows. The gradient treatment on the hero is worth studying even if the palette is overused globally.',
    improvement: 'Add prefers-reduced-motion support. Simplify the dual CTA to a single primary action. The "See all products" section is visually overwhelming — a staged reveal would improve comprehension.',
  },
  {
    index: '02',
    type: 'Poster',
    name: 'Apple — Shot on iPhone',
    score: 88,
    overview: 'The Shot on iPhone campaign elevated user-generated content to gallery status. Billboard-scale photography with four-word attribution transformed a camera spec into an emotional story.',
    hierarchy: { score: 82, notes: 'Full-bleed photo with footer text. Simple but effective — photography carries 95% of visual weight.' },
    typography: { score: 90, notes: 'SF Pro in footer provides clean system credibility. Small size forces the photography to lead, which is intentional.' },
    color: { score: 95, notes: 'Color is entirely photographic — Apple curates for vivid, diverse, globally interesting scenes. No brand color imposition.' },
    message: { score: 96, notes: '"Shot on iPhone" says everything. The product is invisible in the execution — a bold and effective creative choice.' },
    technical: { score: 75, notes: 'Designed for billboard scale — at A4 print some images appear compressed. Digital versions (web, social) maintain quality.' },
    inspiration: 'The restraint of trusting the image completely. No headline needed when the image IS the message. This is a masterclass in letting the work speak.',
    improvement: 'Some executions feel visually random rather than curated — a tighter curation guideline per campaign season would strengthen the series.',
  },
]

export default function Review() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <Reveal>
            <p className="page-header eyebrow">Graphic Review — Detailed Analysis</p>
            <h1>Learning from<br /><em>what exists.</em></h1>
            <p className="page-header subtitle">
              Deep critical analysis of real-world design work — identifying structural decisions, documenting inspiration, and proposing concrete improvements.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Review criteria */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <p className="mono" style={{ marginBottom: '16px' }}>Evaluation Framework</p>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '40px' }}>How I analyse design</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '16px', marginBottom: '80px' }}>
            {criteria.map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card" style={{ height: '100%' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--rust)', fontStyle: 'italic', marginBottom: '8px' }}>{c.weight}</p>
                  <p style={{ fontWeight: 500, fontSize: '0.9rem', marginBottom: '8px' }}>{c.label}</p>
                  <p style={{ color: 'var(--mist)', fontSize: '0.8rem', lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Full reviews */}
          {reviews.map((r, i) => (
            <Reveal key={i}>
              <div style={{ marginBottom: '60px', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
                {/* Header */}
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '32px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <span className="tag">{r.type}</span>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginTop: '8px' }}>{r.name}</h2>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p className="mono" style={{ marginBottom: '4px' }}>Overall Score</p>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', color: 'var(--rust)', lineHeight: 1 }}>{r.score}<span style={{ fontSize: '1.5rem', color: 'var(--mist)' }}>/100</span></p>
                  </div>
                </div>

                <div style={{ padding: '32px' }}>
                  <p style={{ color: 'var(--mist)', lineHeight: 1.8, marginBottom: '32px', maxWidth: '700px', fontSize: '0.95rem' }}>{r.overview}</p>

                  {/* Score breakdown */}
                  <div style={{ marginBottom: '32px' }}>
                    <p className="mono" style={{ marginBottom: '16px', fontSize: '0.6rem' }}>Criteria Breakdown</p>
                    {[
                      { label: 'Visual Hierarchy', data: r.hierarchy },
                      { label: 'Typography', data: r.typography },
                      { label: 'Color Usage', data: r.color },
                      { label: 'Message Clarity', data: r.message },
                      { label: 'Technical Quality', data: r.technical },
                    ].map((item, j) => (
                      <div key={j} style={{ marginBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>{item.label}</span>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--rust)' }}>{item.data.score}/100</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: `${item.data.score}%`, animationDelay: `${j * 0.15}s` }} />
                        </div>
                        <p style={{ fontSize: '0.78rem', color: 'var(--mist)', marginTop: '4px', lineHeight: 1.6 }}>{item.data.notes}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid-2" style={{ gap: '24px' }}>
                    <div style={{ padding: '20px', border: '1px solid rgba(107,207,127,0.2)', background: 'rgba(107,207,127,0.04)' }}>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', color: '#6bcf7f', textTransform: 'uppercase', marginBottom: '10px' }}>✦ Inspiration Takeaway</p>
                      <p style={{ fontSize: '0.88rem', color: 'var(--paper)', lineHeight: 1.75 }}>{r.inspiration}</p>
                    </div>
                    <div style={{ padding: '20px', border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.04)' }}>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '10px' }}>→ Proposed Improvement</p>
                      <p style={{ fontSize: '0.88rem', color: 'var(--paper)', lineHeight: 1.75 }}>{r.improvement}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link href="/project" className="btn btn-ghost">← Final Project</Link>
          <Link href="/quiz" className="btn">Quiz →</Link>
        </div>
      </section>
    </>
  )
}
