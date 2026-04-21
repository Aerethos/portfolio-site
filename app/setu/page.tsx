import Image from 'next/image'
import R from '@/components/R'
import Link from 'next/link'

const campuses = [
  {
    name: 'College Street Campus',
    image: '/College Street Campus, Waterford (1).jpg',
    desc: 'The historic heart of SETU Waterford — home to business, humanities, and social sciences.',
  },
  {
    name: 'Cork Road Campus',
    image: '/Cork Road Campus, Waterford (1).jpg',
    desc: 'Engineering, science, and technology — SETU\'s largest campus and main research hub.',
  },
  {
    name: 'Granary Campus',
    image: '/Granary Campus, Waterford (1).jpg',
    desc: 'A reimagined heritage building in the city centre, home to art, design, and media.',
  },
  {
    name: 'West Campus',
    image: '/West Campus, Waterford (1).jpg',
    desc: 'Sport, health sciences, and modern student facilities on the western edge of the city.',
  },
  {
    name: 'South Sports Campus',
    image: '/South Sports Campus, Carlow (1).jpg',
    desc: 'State-of-the-art sports and recreation facilities serving students across all campuses.',
  },
  {
    name: 'Kilkenny Road Campus',
    image: '/Kilkenny Road Campus, Carlow (2).jpg',
    desc: 'A modern campus in Carlow city — engineering, IT, and science at its core.',
  },
]

const facts = [
  { stat: '2022', label: 'Year established as SETU' },
  { stat: '18k+', label: 'Students enrolled' },
  { stat: '6', label: 'Campuses across the South East' },
  { stat: '1970', label: 'Regional Technical College founded' },
]

export default function Setu() {
  return (
    <>
      <style>{`
        @keyframes nudge{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}
        .campus-card img { transition: transform 0.6s cubic-bezier(.16,1,.3,1); }
        .campus-card:hover img { transform: scale(1.06); }
        .campus-overlay { transition: opacity 0.3s ease; opacity: 0; }
        .campus-card:hover .campus-overlay { opacity: 1; }
      `}</style>

      {/* ── HERO ── */}
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <Image
          src="/SETU.jpg"
          alt="SETU Waterford"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.88) 100%)'
        }} />

        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '0 48px 72px'
        }}>
          <div style={{ maxWidth: '1140px', margin: '0 auto', width: '100%' }}>
            <R>
              <p style={{
                fontFamily: 'var(--mono)', fontSize: '0.62rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)', marginBottom: '16px'
              }}>
                Waterford & Carlow, Ireland · Est. 2022
              </p>
            </R>
            <R delay={80}>
              <h1 style={{
                fontFamily: 'var(--serif)', fontWeight: 900,
                fontSize: 'clamp(3rem, 8vw, 8rem)',
                lineHeight: 0.95, letterSpacing: '-0.03em',
                color: '#ffffff', marginBottom: '8px'
              }}>
                South East
              </h1>
            </R>
            <R delay={140}>
              <h1 style={{
                fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic',
                fontSize: 'clamp(3rem, 8vw, 8rem)',
                lineHeight: 0.95, letterSpacing: '-0.03em',
                color: 'var(--accent)', marginBottom: '40px'
              }}>
                Technological University.
              </h1>
            </R>
            <R delay={220}>
              <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
                {facts.map(f => (
                  <div key={f.stat}>
                    <p style={{
                      fontFamily: 'var(--serif)', fontStyle: 'italic',
                      fontSize: '2rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '4px'
                    }}>{f.stat}</p>
                    <p style={{
                      fontFamily: 'var(--mono)', fontSize: '0.6rem',
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)'
                    }}>{f.label}</p>
                  </div>
                ))}
              </div>
            </R>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: '32px', right: '48px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px'
        }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Scroll</p>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)', animation: 'nudge 2s ease-in-out infinite' }} />
        </div>
      </div>

      {/* ── INTRO ── */}
      <section style={{ background: 'var(--ink)', padding: '100px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <R>
              <div>
                <p className="label" style={{ marginBottom: '12px' }}>About SETU</p>
                <div style={{ width: '32px', height: '2px', background: 'var(--accent)', marginBottom: '24px' }} />
                <h2 style={{
                  fontFamily: 'var(--serif)', fontWeight: 300, fontStyle: 'italic',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  color: '#f4f0e8', lineHeight: 1.15, marginBottom: '24px'
                }}>
                  A university built for the South East of Ireland.
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '16px' }}>
                  South East Technological University was established in 2022, bringing together IT Carlow and WIT Waterford into a single institution serving the entire south-east region. It&apos;s one of the youngest technological universities in Ireland — and one of the most ambitious.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.9, fontSize: '0.95rem' }}>
                  With campuses across Waterford, Carlow, and Wexford, SETU offers programmes spanning engineering, business, health, arts, and technology — backed by strong industry links and growing research output.
                </p>
              </div>
            </R>
            <R delay={100}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', top: '16px', right: '-16px',
                  width: '100%', height: '100%',
                  border: '1px solid rgba(212,69,12,0.3)', zIndex: 0
                }} />
                <div style={{ position: 'relative', zIndex: 1, aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Image
                    src="/College Street Campus, Waterford (2).jpg"
                    alt="College Street Campus Waterford"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* ── FULL WIDTH IMAGE BREAK 1 ── */}
      <div style={{ position: 'relative', height: '60vh', overflow: 'hidden' }}>
        <Image
          src="/Cork Road Campus, Waterford (2).jpg"
          alt="Cork Road Campus"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.1) 65%)'
        }} />
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', padding: '0 48px'
        }}>
          <div style={{ maxWidth: '1140px', margin: '0 auto', width: '100%' }}>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>Cork Road Campus · Waterford</p>
            <h2 style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#fff', lineHeight: 1.15, maxWidth: '500px'
            }}>
              Engineering, science & technology.
            </h2>
          </div>
        </div>
      </div>

      {/* ── CAMPUSES GRID ── */}
      <section>
        <div className="wrap">
          <R>
            <p className="label" style={{ marginBottom: '12px' }}>The Campuses</p>
            <div style={{ width: '32px', height: '2px', background: 'var(--accent)', marginBottom: '20px' }} />
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '16px' }}>
              Campuses across<br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>the South East.</em>
            </h2>
            <p style={{ color: 'var(--mid)', maxWidth: '480px', lineHeight: 1.85, marginBottom: '56px', fontSize: '0.92rem' }}>
              Each campus has its own character and specialisation — together forming one of the most distributed universities in Ireland.
            </p>
          </R>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {campuses.map((c, i) => (
            <R key={i} delay={i * 60}>
              <div className="campus-card" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
                <Image src={c.image} alt={c.name} fill style={{ objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 55%)',
                }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px' }}>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>{c.name}</p>
                </div>
                <div className="campus-overlay" style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(212,69,12,0.88)',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'center', padding: '28px'
                }}>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{c.name}</p>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75 }}>{c.desc}</p>
                </div>
              </div>
            </R>
          ))}
        </div>
      </section>

      {/* ── FULL WIDTH IMAGE BREAK 2 ── */}
      <div style={{ position: 'relative', height: '50vh', overflow: 'hidden' }}>
        <Image
          src="/West Campus, Waterford (4).jpg"
          alt="West Campus Waterford"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.5)' }} />
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center', textAlign: 'center'
        }}>
          <div>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
              West Campus · Waterford
            </p>
            <h2 style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', lineHeight: 1.2
            }}>
              Sport, health & student life.
            </h2>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <section style={{ padding: '0', background: 'var(--ink)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { num: '2', label: 'Constituent institutions' },
              { num: 'SE', label: 'South East region' },
              { num: '150+', label: 'Programmes offered' },
              { num: 'WFD', label: 'City of Waterford' },
            ].map((f, i) => (
              <R key={i} delay={i * 60}>
                <div style={{ padding: '48px 28px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '2.4rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '8px' }}>{f.num}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{f.label}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <section style={{ paddingBottom: '0' }}>
        <div className="wrap">
          <R>
            <p className="label" style={{ marginBottom: '12px' }}>Campus Gallery</p>
            <div style={{ width: '32px', height: '2px', background: 'var(--accent)', marginBottom: '48px' }} />
          </R>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2px' }}>
          {[
            '/Granary Campus, Waterford (2).jpg',
            '/Hill Street Campus, Wexford.jpg',
            '/South Sports Campus, Carlow (2).jpg',
            '/Kilkenny Road Campus, Carlow (3).jpg',
            '/Summerhill Road Campus, Wexford (1).jpg',
          ].map((src, i) => (
            <R key={i} delay={i * 40}>
              <div style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden' }}>
                <Image
                  src={src}
                  alt="SETU campus"
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
              </div>
            </R>
          ))}
        </div>
      </section>

      {/* ── WEXFORD ROW ── */}
      <section style={{ paddingTop: '2px', paddingBottom: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
          {[
            '/Summerhill Road Campus, Wexford (2).jpg',
            '/Applied Technology Campus, Waterford.jpg',
          ].map((src, i) => (
            <div key={i} style={{ position: 'relative', aspectRatio: '16/7', overflow: 'hidden' }}>
              <Image src={src} alt="SETU campus" fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── MY CONNECTION ── */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--faint)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <R>
              <div style={{ position: 'relative', aspectRatio: '3/2', overflow: 'hidden' }}>
                <Image
                  src="/Cork Road Campus, Waterford (3).jpg"
                  alt="SETU Cork Road Campus"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </R>
            <R delay={100}>
              <div>
                <p className="label" style={{ marginBottom: '12px' }}>My connection</p>
                <div style={{ width: '32px', height: '2px', background: 'var(--accent)', marginBottom: '24px' }} />
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '20px', lineHeight: 1.2 }}>
                  Where I study,<br />
                  <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>and build.</em>
                </h2>
                <p style={{ color: 'var(--mid)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '16px' }}>
                  I&apos;m a second-year International Business student at SETU Waterford, based on the College Street campus. Alongside my degree I founded AerEthos — backed by Enterprise Ireland&apos;s New Frontiers Programme, which runs through SETU.
                </p>
                <p style={{ color: 'var(--mid)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '32px' }}>
                  The university has been the platform for a lot of what I&apos;ve built — from winning the Waterford Student Enterprise Award to representing SETU at international events across Europe.
                </p>
                <Link href="/about" className="btn btn-outline">About me →</Link>
              </div>
            </R>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0', borderTop: '1px solid var(--faint)' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
          <Link href="/" className="btn btn-outline">← Home</Link>
          <a href="https://setu.ie" target="_blank" rel="noreferrer" className="btn">setu.ie →</a>
        </div>
      </section>
    </>
  )
}
