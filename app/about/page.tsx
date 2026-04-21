import R from '@/components/R'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className="ptop">
        <div className="wrap">
          <R>
            <div style={{ display: 'flex', alignItems: 'stretch', gap: '0', minHeight: '380px', flexWrap: 'wrap' }}>

              {/* Left — text */}
              <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingRight: '64px', paddingBottom: '8px' }}>
                <p className="label" style={{ marginBottom: '16px' }}>About</p>
                <h1 style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}>
                  Nathan<br />
                  <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Sfendji</em>
                </h1>
                <div style={{ marginTop: '24px', width: '32px', height: '2px', background: 'var(--accent)' }} />
                <p style={{ marginTop: '16px', fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--mid)', lineHeight: 1.8 }}>
                  Waterford, Ireland<br />
                  Budapest · April 2026
                </p>
              </div>

              {/* Right — photo */}
              <div style={{ position: 'relative', width: '360px', minHeight: '380px', flexShrink: 0 }}>
                <div style={{
                  position: 'absolute',
                  top: '14px', right: '-14px',
                  width: '100%', height: '100%',
                  border: '1px solid var(--accent)',
                  opacity: 0.25,
                  zIndex: 0
                }} />
                <Image
  src="/nathanimage.png"
  alt="Nathan Sfendji in Budapest"
  fill
  style={{ objectFit: 'cover', objectPosition: 'center top', zIndex: 1, boxShadow: '0 0 0 3px var(--accent), 0 0 24px 4px rgba(212,69,12,0.35)' }}
/>
              </div>

            </div>
          </R>
        </div>
      </div>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="g2" style={{ gap: '80px', alignItems: 'start' }}>
            <R>
              <div>
                <p style={{ fontSize: '1.08rem', lineHeight: 1.95, marginBottom: '24px', color: 'var(--ink)' }}>
                  I&apos;m a 20-year-old from Waterford, Ireland — second-year International Business student at SETU Waterford, and founder of <strong>AerEthos</strong>, a premium yearbook and memory publishing company serving Irish secondary schools. I started it in sixth year after making my own school&apos;s yearbook from scratch, and it&apos;s been growing ever since. Outside of that, I&apos;m backed by Enterprise Ireland&apos;s New Frontiers Programme and thinking about things at a scale most people would find unrealistic.
                </p>
                <p style={{ fontSize: '1.08rem', lineHeight: 1.95, color: 'var(--mid)' }}>
                  Right now I&apos;m in Budapest for an Erasmus study week. I&apos;ve been coding my own sites since late 2025 and this one runs on Next.js, deployed on Vercel.
                </p>
                <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a href="https://aerethos.com" target="_blank" rel="noreferrer" className="btn">AerEthos →</a>
                  <a href="https://www.linkedin.com/in/nathan-sfendji-575597238/" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
                </div>
              </div>
            </R>
            <R delay={100}>
              <div>
                <p className="label" style={{ marginBottom: '12px' }}>Right now</p>
                <div className="rule" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {[
                    { icon: '', text: 'Budapest, Hungary — Erasmus BIP study week' },
                    { icon: '', text: 'SETU Waterford, International Business Year 2' },
                    { icon: '', text: 'Running AerEthos — Irish school yearbooks' },
                    { icon: '', text: 'J-1 placement in New York this summer' },
                    { icon: '', text: 'Kanagawa University exchange, Japan - Sept 2026' },
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
