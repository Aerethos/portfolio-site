import Reveal from '@/components/Reveal'
import Link from 'next/link'

const presentationSlides = [
  { num: '01', title: 'Introduction', time: '0:00–1:00', points: ['Name, course, university', 'Site overview & navigation demo', 'Tech stack: Next.js, Vercel, TypeScript'] },
  { num: '02', title: 'Weekly Tasks', time: '1:00–2:30', points: ['Domain pricing walkthrough', 'Graphic review methodology', 'Edutus SVG logo — process explained', 'GIMP bitmap modifications'] },
  { num: '03', title: 'Final Project', time: '2:30–3:45', points: ['Origen brand concept', 'Business cards & brochure shown', 'Design decisions explained', 'Print vs. digital considerations'] },
  { num: '04', title: 'Technical', time: '3:45–4:30', points: ['Next.js file structure shown', 'Vercel deployment demonstrated', 'Mobile responsiveness shown'] },
  { num: '05', title: 'Reflection', time: '4:30–5:00', points: ['Key learning moments', 'Tools used across the course', 'What I would improve'] },
]

const tools = [
  { name: 'Inkscape', category: 'Vector', use: 'Edutus logo (SVG), icon creation' },
  { name: 'GIMP', category: 'Bitmap', use: 'Faculty banner, photo adjustments' },
  { name: 'Figma', category: 'UI / Layout', use: 'Origen website mockup, brand system' },
  { name: 'Adobe Illustrator', category: 'Vector', use: 'Business cards, brochure layout' },
  { name: 'Next.js 15', category: 'Web', use: 'Portfolio site build & deployment' },
  { name: 'Vercel', category: 'Hosting', use: 'CDN deployment, CI/CD pipeline' },
  { name: 'VS Code', category: 'Code Editor', use: 'TypeScript, TSX, CSS development' },
  { name: 'TypeScript', category: 'Language', use: 'Type-safe React components' },
]

const skills = [
  { label: 'Vector Design', level: 82 },
  { label: 'Typography', level: 78 },
  { label: 'Print Production', level: 72 },
  { label: 'Web Development', level: 88 },
  { label: 'Brand Identity', level: 75 },
  { label: 'Critical Analysis', level: 85 },
]

export default function About() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <Reveal>
            <p className="page-header eyebrow">About — Presentation Overview</p>
            <h1>The person<br /><em>behind the work.</em></h1>
            <p className="page-header subtitle">
              Personal background, tools used across the course, and a detailed five-minute presentation script with timing notes.
            </p>
          </Reveal>
        </div>
      </div>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Profile */}
          <div className="grid-2" style={{ gap: '60px', alignItems: 'start', marginBottom: '80px' }}>
            <Reveal>
              <div>
                <p className="mono" style={{ marginBottom: '16px' }}>Profile</p>
                <div className="divider" />

                <div style={{
                  width: '120px',
                  height: '120px',
                  border: '1px solid rgba(200,75,47,0.3)',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(200,75,47,0.05)'
                }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontStyle: 'italic', color: 'var(--rust)' }}>P</span>
                </div>

                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', marginBottom: '4px' }}>Portfolio Owner</h2>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--mist)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px' }}>
                  Graphic Design & Web · {new Date().getFullYear()}
                </p>
                <p style={{ color: 'var(--mist)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '16px' }}>
                  A student of graphic design with particular interest in the intersection of print and digital media. This portfolio documents a semester of practical work applying design theory to real-world deliverables.
                </p>
                <p style={{ color: 'var(--mist)', lineHeight: 1.9, fontSize: '0.95rem' }}>
                  The recurring theme across all work: restraint, intentionality, and the belief that every design decision — no matter how small — is a communication choice.
                </p>

                <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: 'Course', value: 'Graphic Design & Web' },
                    { label: 'University', value: 'Edutus University' },
                    { label: 'Year', value: String(new Date().getFullYear()) },
                    { label: 'Site Built With', value: 'Next.js 15 + Vercel' },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'center', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--mist)', letterSpacing: '0.1em', textTransform: 'uppercase', width: '120px', flexShrink: 0 }}>{item.label}</span>
                      <span style={{ fontSize: '0.88rem' }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Skills */}
            <Reveal delay={150}>
              <div>
                <p className="mono" style={{ marginBottom: '16px' }}>Skill Levels</p>
                <div className="divider" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                  {skills.map((s, i) => (
                    <div key={s.label}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ fontSize: '0.88rem', fontWeight: 400 }}>{s.label}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--rust)' }}>{s.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${s.level}%`, animationDelay: `${i * 0.12}s` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mono" style={{ marginBottom: '12px' }}>Links</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'Final Project Files', href: '/project' },
                    { label: 'Weekly Task Documentation', href: '/tasks' },
                    { label: 'Graphic Reviews', href: '/review' },
                    { label: 'Knowledge Quiz', href: '/quiz' },
                  ].map(l => (
                    <a key={l.label} href={l.href} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 16px',
                      border: '1px solid rgba(255,255,255,0.06)',
                      fontSize: '0.85rem',
                      color: 'var(--paper)',
                      transition: 'border-color 0.2s ease',
                      textDecoration: 'none'
                    }}>
                      {l.label}
                      <span style={{ color: 'var(--rust)', fontSize: '0.75rem' }}>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Tools */}
          <Reveal>
            <p className="mono" style={{ marginBottom: '16px' }}>Tools Used</p>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '40px' }}>
              The toolkit
            </h2>
            <div className="grid-3" style={{ marginBottom: '80px' }}>
              {tools.map((t, i) => (
                <div key={i} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>{t.name}</h3>
                    <span className="tag" style={{ marginTop: 0, fontSize: '0.55rem' }}>{t.category}</span>
                  </div>
                  <p style={{ color: 'var(--mist)', fontSize: '0.82rem', lineHeight: 1.7 }}>{t.use}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Presentation plan */}
          <Reveal>
            <p className="mono" style={{ marginBottom: '16px' }}>Presentation — 10% of Assessment</p>
            <div className="divider" />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '16px' }}>
              5-minute script<br />
              <span style={{ fontStyle: 'italic', color: 'var(--rust)' }}>section by section</span>
            </h2>
            <p style={{ color: 'var(--mist)', marginBottom: '48px', lineHeight: 1.8, maxWidth: '500px' }}>
              Timed breakdown of the presentation — what gets shown, what gets said, and what matters most in each window.
            </p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>
            {presentationSlides.map((slide, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr 200px',
                  gap: '0',
                  borderBottom: i < presentationSlides.length - 1 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                  alignItems: 'stretch'
                }}>
                  <div style={{ background: i % 2 === 0 ? 'rgba(200,75,47,0.08)' : 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--rust)' }}>{slide.num}</span>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 500, marginBottom: '12px' }}>{slide.title}</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {slide.points.map((p, pi) => (
                        <li key={pi} style={{ fontSize: '0.82rem', color: 'var(--mist)', display: 'flex', gap: '10px' }}>
                          <span style={{ color: 'var(--rust)', flexShrink: 0 }}>—</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ padding: '24px', borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(255,255,255,0.01)' }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.08em' }}>{slide.time}</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--mist)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {(parseFloat(slide.time.split('–')[1]) - parseFloat(slide.time.split('–')[0].replace('0:', '').replace('1:', '1').replace('2:', '2').replace('3:', '3').replace('4:', '4'))).toFixed(0) === '0'
                        ? '30 sec'
                        : `${Math.round((parseFloat(slide.time.split('–')[1].split(':')[0]) * 60 + parseFloat(slide.time.split('–')[1].split(':')[1])) - (parseFloat(slide.time.split('–')[0].split(':')[0]) * 60 + parseFloat(slide.time.split('–')[0].split(':')[1])))} sec`
                      }
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="card" style={{ marginTop: '32px', background: 'rgba(200,75,47,0.06)', border: '1px solid rgba(200,75,47,0.2)' }}>
              <p className="mono" style={{ marginBottom: '12px' }}>Presentation Tips</p>
              <div className="grid-3" style={{ gap: '20px' }}>
                {[
                  { tip: 'Open the live site — demonstrate, don\'t just talk about it. Audiences remember what they see move.' },
                  { tip: 'For the final project, explain one design decision in depth rather than listing all six pieces superficially.' },
                  { tip: 'End with what you\'d do differently — it shows critical thinking and earns more marks than a clean summary.' },
                ].map((t, i) => (
                  <p key={i} style={{ fontSize: '0.85rem', color: 'var(--mist)', lineHeight: 1.75, paddingLeft: '12px', borderLeft: '1px solid rgba(200,75,47,0.3)' }}>
                    {t.tip}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link href="/quiz" className="btn btn-ghost">← Quiz</Link>
          <Link href="/" className="btn">Back to Home →</Link>
        </div>
      </section>
    </>
  )
}
