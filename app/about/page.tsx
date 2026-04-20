import R from '@/components/R'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <div className="ptop">
        <div className="wrap">
          <R>
            <p className="label" style={{ marginBottom: '12px' }}>About</p>
            <h1>Nathan<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Sfendji</em></h1>
          </R>
        </div>
      </div>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="g2" style={{ gap: '80px', alignItems: 'start' }}>
            <R>
              <div>
                {/* The two paragraphs */}
                <p style={{ fontSize: '1.08rem', lineHeight: 1.95, marginBottom: '24px', color: 'var(--ink)' }}>
                  I&apos;m a 20-year-old from Waterford, Ireland — second-year International Business student at SETU Waterford, and founder of <strong>AerEthos</strong>, a premium yearbook and memory publishing company serving Irish secondary schools. I started it in sixth year after making my own school&apos;s yearbook from scratch, and it&apos;s been growing ever since. Outside of that, I&apos;m backed by Enterprise Ireland&apos;s New Frontiers Programme and thinking about things at a scale most people would find unrealistic.
                </p>
                <p style={{ fontSize: '1.08rem', lineHeight: 1.95, color: 'var(--mid)' }}>
                  Right now I&apos;m in Budapest for an Erasmus study week — which is where this site comes in. It&apos;s a requirement for a Graphic Design &amp; Web module, but I build things properly regardless of the context. I&apos;ve been coding my own sites since late 2025 and this one runs on Next.js, deployed on Vercel, while everyone else is on Google Sites. Make of that what you will.
                </p>

                <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a href="https://aerethos.com" target="_blank" rel="noreferrer" className="btn">AerEthos →</a>
                  <a href="https://linkedin.com/in/nathansfendji" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
                </div>
              </div>
            </R>

            <R delay={100}>
              <div>
                <p className="label" style={{ marginBottom: '12px' }}>Right now</p>
                <div className="rule" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {[
                    { icon: '📍', text: 'Budapest, Hungary — Erasmus BIP study week' },
                    { icon: '🏫', text: 'SETU Waterford, International Business Year 2' },
                    { icon: '🚀', text: 'Running AerEthos — Irish school yearbooks' },
                    { icon: '🇺🇸', text: 'J-1 placement at Lawrence Beach Club, NY this summer' },
                    { icon: '🇯🇵', text: 'Kanagawa University exchange, Yokohama — Sept 2026' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--faint)', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                      <p style={{ fontSize: '0.9rem', color: 'var(--mid)', lineHeight: 1.6 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </R>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0', borderTop: '1px solid var(--faint)' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
          <Link href="/" className="btn btn-outline">← Home</Link>
          <Link href="/tasks" className="btn">See the tasks →</Link>
        </div>
      </section>
    </>
  )
}
