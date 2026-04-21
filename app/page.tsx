'use client'
import R from '@/components/R'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gridRef = useRef<HTMLCanvasElement>(null)
  const [introComplete, setIntroComplete] = useState(false)
  const [introVisible, setIntroVisible] = useState(true)

  // Grid intro animation
  useEffect(() => {
    const canvas = gridRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const W = canvas.width
    const H = canvas.height
    const cols = 12
    const rows = 8
    const cellW = W / cols
    const cellH = H / rows

    // Each line has: start point, end point, progress 0-1, delay
    const lines: { x1: number; y1: number; x2: number; y2: number; progress: number; delay: number; speed: number }[] = []

    // Vertical lines
    for (let i = 0; i <= cols; i++) {
      lines.push({
        x1: i * cellW, y1: 0,
        x2: i * cellW, y2: H,
        progress: 0,
        delay: i * 0.04,
        speed: 0.028 + Math.random() * 0.02
      })
    }
    // Horizontal lines
    for (let i = 0; i <= rows; i++) {
      lines.push({
        x1: 0, y1: i * cellH,
        x2: W, y2: i * cellH,
        progress: 0,
        delay: 0.3 + i * 0.06,
        speed: 0.022 + Math.random() * 0.018
      })
    }

    // Diagonal accent lines
    lines.push({ x1: 0, y1: 0, x2: W * 0.4, y2: H, progress: 0, delay: 0.6, speed: 0.018 })
    lines.push({ x1: W, y1: 0, x2: W * 0.6, y2: H, progress: 0, delay: 0.7, speed: 0.018 })
    lines.push({ x1: W * 0.3, y1: 0, x2: W * 0.7, y2: H * 0.6, progress: 0, delay: 0.8, speed: 0.022 })

    let t = 0
    let phase: 'draw' | 'hold' | 'fade' = 'draw'
    let holdT = 0
    let globalAlpha = 1
    let animId: number

    const tick = () => {
      ctx.clearRect(0, 0, W, H)

      if (phase === 'draw') {
        t += 0.016
        let allDone = true
        lines.forEach(l => {
          if (t > l.delay) {
            l.progress = Math.min(1, l.progress + l.speed)
          }
          if (l.progress < 1) allDone = false
        })
        if (allDone) { phase = 'hold'; holdT = 0 }
      }

      if (phase === 'hold') {
        holdT += 0.016
        if (holdT > 0.6) phase = 'fade'
      }

      if (phase === 'fade') {
        globalAlpha = Math.max(0, globalAlpha - 0.022)
        if (globalAlpha <= 0) {
          setIntroComplete(true)
          setTimeout(() => setIntroVisible(false), 400)
          cancelAnimationFrame(animId)
          return
        }
      }

      // Draw background
      ctx.fillStyle = `rgba(26, 24, 20, ${globalAlpha})`
      ctx.fillRect(0, 0, W, H)

      // Draw lines
      lines.forEach(l => {
        if (l.progress <= 0) return
        const ex = l.x1 + (l.x2 - l.x1) * l.progress
        const ey = l.y1 + (l.y2 - l.y1) * l.progress

        ctx.beginPath()
        ctx.moveTo(l.x1, l.y1)
        ctx.lineTo(ex, ey)
        ctx.strokeStyle = `rgba(212, 69, 12, ${0.35 * globalAlpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()

        // Bright leading dot
        if (l.progress < 1) {
          ctx.beginPath()
          ctx.arc(ex, ey, 1.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(212, 69, 12, ${0.9 * globalAlpha})`
          ctx.fill()
        }
      })

      // Draw intersection dots at full grid intersections
      if (phase === 'hold' || phase === 'fade') {
        for (let i = 0; i <= cols; i++) {
          for (let j = 0; j <= rows; j++) {
            ctx.beginPath()
            ctx.arc(i * cellW, j * cellH, 2, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(212, 69, 12, ${0.5 * globalAlpha})`
            ctx.fill()
          }
        }
      }

      // Name reveal text during hold
      if (phase === 'hold' || phase === 'fade') {
        const textAlpha = phase === 'hold'
          ? Math.min(1, holdT * 4)
          : globalAlpha
        ctx.font = `900 ${Math.min(W * 0.13, 130)}px 'Playfair Display', Georgia, serif`
        ctx.fillStyle = `rgba(244, 240, 232, ${textAlpha * 0.08})`
        ctx.textAlign = 'center'
        ctx.fillText('NATHAN SFENDJI', W / 2, H / 2 + 40)
      }

      animId = requestAnimationFrame(tick)
    }

    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [])

  // Marquee
  useEffect(() => {
    const el = marqueeRef.current
    if (!el) return
    let x = 0
    const frame = () => {
      x -= 0.4
      if (x < -el.scrollWidth / 2) x = 0
      el.style.transform = `translateX(${x}px)`
      requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [])

  // Country map canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const W = () => canvas.offsetWidth
    const H = () => canvas.offsetHeight

    const irelandPoints = [
      [0.45,0.05],[0.55,0.04],[0.65,0.08],[0.72,0.14],[0.78,0.22],[0.80,0.30],
      [0.75,0.38],[0.82,0.44],[0.85,0.52],[0.80,0.60],[0.72,0.66],[0.78,0.72],
      [0.75,0.80],[0.68,0.88],[0.58,0.94],[0.48,0.96],[0.38,0.92],[0.28,0.85],
      [0.20,0.76],[0.15,0.66],[0.12,0.56],[0.15,0.46],[0.10,0.38],[0.12,0.28],
      [0.20,0.20],[0.28,0.13],[0.36,0.08],[0.45,0.05]
    ]
    const hungaryPoints = [
      [0.08,0.32],[0.18,0.22],[0.28,0.16],[0.40,0.12],[0.52,0.08],[0.64,0.10],
      [0.74,0.06],[0.84,0.10],[0.92,0.18],[0.96,0.28],[0.94,0.38],[0.98,0.46],
      [0.94,0.54],[0.88,0.62],[0.80,0.70],[0.70,0.76],[0.60,0.82],[0.50,0.88],
      [0.40,0.90],[0.30,0.86],[0.20,0.80],[0.12,0.72],[0.06,0.62],[0.04,0.50],
      [0.06,0.40],[0.08,0.32]
    ]

    const drawCountry = (points: number[][], bx: number, by: number, bw: number, bh: number, fill: string, stroke: string) => {
      ctx.beginPath()
      points.forEach(([nx, ny], i) => {
        const px = bx + nx * bw, py = by + ny * bh
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      })
      ctx.closePath()
      ctx.fillStyle = fill; ctx.fill()
      ctx.strokeStyle = stroke; ctx.lineWidth = 1.5; ctx.stroke()
    }

    const getCentroid = (points: number[][], bx: number, by: number, bw: number, bh: number) => {
      const sx = points.reduce((a, p) => a + p[0], 0) / points.length
      const sy = points.reduce((a, p) => a + p[1], 0) / points.length
      return { x: bx + sx * bw, y: by + sy * bh }
    }

    let planeT = 0
    let trailPoints: { x: number; y: number }[] = []
    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, W(), H())
      const w = W(), h = H()
      const iw = w * 0.18, ih = h * 0.55, ix = w * 0.08, iy = h * 0.22
      const hw = w * 0.22, hh = h * 0.38, hx = w * 0.70, hy = h * 0.30

      drawCountry(irelandPoints, ix, iy, iw, ih, 'rgba(212,69,12,0.07)', 'rgba(212,69,12,0.25)')
      drawCountry(hungaryPoints, hx, hy, hw, hh, 'rgba(212,69,12,0.12)', 'rgba(212,69,12,0.35)')

      const dublin = getCentroid(irelandPoints, ix, iy, iw, ih)
      const budapest = getCentroid(hungaryPoints, hx, hy, hw, hh)
      dublin.x += iw * 0.05; dublin.y += ih * 0.18
      budapest.x += hw * 0.05; budapest.y -= hh * 0.05

      const cp = { x: (dublin.x + budapest.x) / 2, y: Math.min(dublin.y, budapest.y) - h * 0.28 }

      ctx.beginPath()
      ctx.moveTo(dublin.x, dublin.y)
      ctx.quadraticCurveTo(cp.x, cp.y, budapest.x, budapest.y)
      ctx.setLineDash([5, 8]); ctx.strokeStyle = 'rgba(212,69,12,0.2)'; ctx.lineWidth = 1.5; ctx.stroke(); ctx.setLineDash([])

      const bt = planeT
      const px = (1-bt)*(1-bt)*dublin.x + 2*(1-bt)*bt*cp.x + bt*bt*budapest.x
      const py = (1-bt)*(1-bt)*dublin.y + 2*(1-bt)*bt*cp.y + bt*bt*budapest.y
      const bt2 = Math.min(bt + 0.01, 1)
      const px2 = (1-bt2)*(1-bt2)*dublin.x + 2*(1-bt2)*bt2*cp.x + bt2*bt2*budapest.x
      const py2 = (1-bt2)*(1-bt2)*dublin.y + 2*(1-bt2)*bt2*cp.y + bt2*bt2*budapest.y
      const angle = Math.atan2(py2 - py, px2 - px)

      trailPoints.push({ x: px, y: py })
      if (trailPoints.length > 50) trailPoints.shift()
      trailPoints.forEach((pt, idx) => {
        ctx.beginPath(); ctx.arc(pt.x, pt.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,69,12,${(idx / trailPoints.length) * 0.35})`; ctx.fill()
      })

      ctx.save(); ctx.translate(px, py); ctx.rotate(angle)
      ctx.beginPath(); ctx.moveTo(10, 0); ctx.lineTo(-6, 5); ctx.lineTo(-4, 0); ctx.lineTo(-6, -5); ctx.closePath()
      ctx.fillStyle = 'rgba(212,69,12,0.9)'; ctx.fill(); ctx.restore()

      ctx.beginPath(); ctx.arc(dublin.x, dublin.y, 4, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(212,69,12,0.5)'; ctx.fill()
      ctx.font = '500 10px monospace'; ctx.fillStyle = 'rgba(212,69,12,0.55)'
      ctx.fillText('Dublin, Ireland', dublin.x - 8, dublin.y + 18)

      const pulse = 5 + Math.sin(Date.now() / 500) * 2.5
      ctx.beginPath(); ctx.arc(budapest.x, budapest.y, pulse, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(212,69,12,0.25)'; ctx.lineWidth = 1; ctx.stroke()
      ctx.beginPath(); ctx.arc(budapest.x, budapest.y, 4, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(212,69,12,0.85)'; ctx.fill()
      ctx.font = '500 10px monospace'; ctx.fillStyle = 'rgba(212,69,12,0.8)'
      ctx.fillText('Budapest ✦', budapest.x - 8, budapest.y + 18)

      planeT += 0.003
      if (planeT > 1) { planeT = 0; trailPoints = [] }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <>
      <style>{`
        @keyframes nudge{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}
        @keyframes fadeSlideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }
        .hero-word { display:inline-block; animation: fadeSlideUp 0.9s cubic-bezier(.16,1,.3,1) both; }
        .intro-canvas {
          transition: opacity 0.4s ease;
        }
        .intro-canvas.done {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>

      {/* ── GRID INTRO OVERLAY ── */}
      {introVisible && (
        <canvas
          ref={gridRef}
          className={`intro-canvas${introComplete ? ' done' : ''}`}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            width: '100vw', height: '100vh',
            pointerEvents: introComplete ? 'none' : 'all',
          }}
        />
      )}

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', position: 'relative',
        borderBottom: '1px solid var(--faint)', overflow: 'hidden',
        background: 'var(--bg)'
      }}>
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} />

        <div style={{ position: 'absolute', top: '32px', right: '48px', fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--faint)', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', zIndex: 3 }}>
          <span>Graphic Design & Web</span>
          <span style={{ color: 'var(--accent)' }}>Erasmus BIP · Budapest 2026</span>
        </div>

        <div style={{ position: 'absolute', top: 0, left: '48px', width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent 0%, var(--faint) 25%, var(--faint) 75%, transparent 100%)', zIndex: 2 }} />
        <div style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--faint)', whiteSpace: 'nowrap', zIndex: 2 }}>Waterford · Ireland</div>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--faint)', opacity: 0.3, pointerEvents: 'none', zIndex: 2 }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 3, paddingTop: '0' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1 className="hero-word" style={{ fontFamily: 'var(--serif)', fontWeight: 900, fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: 0.95, letterSpacing: '-0.03em', display: 'block', marginBottom: '4px', animationDelay: '0.1s' }}>Nathan</h1>
            <h1 className="hero-word" style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: 0.95, letterSpacing: '-0.03em', color: 'var(--accent)', display: 'block', animationDelay: '0.22s' }}>Sfendji.</h1>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', maxWidth: '860px' }}>
            <R delay={400}>
              <p style={{ fontSize: '1rem', color: 'var(--mid)', lineHeight: 1.9 }}>
                Founder of <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>AerEthos</strong>, second-year International Business student at SETU Waterford, and currently in Budapest for an Erasmus study week. This site is part of a Graphic Design &amp; Web module.
              </p>
            </R>
            <R delay={500}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '12px' }}>
                {[
                  { label: 'Course', value: 'International Business, Year 2' },
                  { label: 'University', value: 'SETU Waterford' },
                  { label: 'Module', value: 'Graphic Design & Web' },
                  { label: 'Built with', value: 'Next.js · Vercel' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '16px', paddingBottom: '10px', borderBottom: '1px solid var(--faint)' }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--faint)', textTransform: 'uppercase', letterSpacing: '0.1em', width: '80px', flexShrink: 0, paddingTop: '2px' }}>{item.label}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--mid)' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </R>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', zIndex: 3 }}>
          <p className="label" style={{ fontSize: '0.55rem' }}>Scroll</p>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'nudge 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div style={{ background: 'var(--ink)', padding: '18px 0', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div ref={marqueeRef} style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i} style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
              {['Nathan Sfendji', '·', 'AerEthos', '·', 'SETU Waterford', '·', 'Erasmus Budapest 2026', '·', 'Graphic Design & Web', '·', 'Next.js', '·'].map((w, j) => (
                <span key={j} style={{ marginRight: '32px', color: w === '·' ? 'var(--accent)' : undefined }}>{w}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── QUICK FACTS STRIP ── */}
      <section style={{ padding: '0', background: 'var(--ink)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { num: '20', label: 'Years old' },
              { num: 'IE', label: 'Waterford, Ireland' },
              { num: 'BUD', label: 'Erasmus · Budapest' },
              { num: '\'23', label: 'AerEthos founded' },
            ].map((f, i) => (
              <R key={i} delay={i * 60}>
                <div style={{ padding: '40px 28px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '2.4rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '6px' }}>{f.num}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{f.label}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULE WORK ── */}
      <section>
        <div className="wrap">
          <R>
            <p className="label">Module Work</p>
            <div className="rule" />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '14px' }}>What&apos;s on this site</h2>
            <p style={{ color: 'var(--mid)', maxWidth: '520px', lineHeight: 1.85, marginBottom: '56px' }}>
              Four sections covering everything required for the Graphic Design &amp; Web module.
            </p>
          </R>
          <div className="g2">
            {[
              { href: '/tasks',   num: '01', title: 'Weekly Tasks',  sub: '50% of module',        desc: 'Domain pricing across six EU country codes, web hosting comparisons, the Edutus University logo rebuilt as an SVG vector, and a faculty banner created and modified in GIMP.' },
              { href: '/project', num: '02', title: 'Final Project',  sub: '20% of module',        desc: 'A complete business graphics system — business cards, brochure, advertisement, menu, and opening hours — unified under the AerEthos brand identity.' },
              { href: '/review',  num: '03', title: 'Graphic Review', sub: 'Part of weekly tasks', desc: 'Real-world design pieces analysed — poster, advertisement, website, brochure. Problems identified, positives noted, improvements proposed.' },
              { href: '/about',   num: '04', title: 'About',          sub: 'Who made this',        desc: 'A short introduction to me — Nathan Sfendji — and what I\'m up to right now.' },
            ].map((s, i) => (
              <R key={i} delay={i * 80}>
                <Link href={s.href} style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
                  <div className="card" style={{ height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                      <p className="label" style={{ color: 'var(--mid)' }}>{s.sub}</p>
                      <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '2.5rem', color: 'var(--faint)', lineHeight: 1 }}>{s.num}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.55rem', marginBottom: '10px' }}>{s.title}</h3>
                    <p style={{ color: 'var(--mid)', fontSize: '0.88rem', lineHeight: 1.8 }}>{s.desc}</p>
                  </div>
                </Link>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── AERETHOS CALLOUT ── */}
      <section style={{ padding: '0', background: 'var(--bg2)', borderTop: '1px solid var(--faint)', borderBottom: '1px solid var(--faint)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '280px' }}>
            <div style={{ padding: '64px 60px 64px 0', borderRight: '1px solid var(--faint)' }}>
              <p className="label" style={{ marginBottom: '12px' }}>Outside of class</p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1.15, marginBottom: '20px' }}>
                I run <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>AerEthos</em> —<br />yearbooks for Irish schools.
              </h2>
              <a href="https://aerethos.com" target="_blank" rel="noreferrer" className="btn">aerethos.com →</a>
            </div>
            <div style={{ padding: '64px 0 64px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {[
                { stat: '6+',   detail: 'Schools served' },
                { stat: 'EI',   detail: 'Enterprise Ireland — New Frontiers' },
                { stat: '\'23', detail: 'Founded in sixth year' },
                { stat: '.com', detail: 'aerethos.com — built from scratch' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: '16px 0', borderBottom: i < 3 ? '1px solid var(--faint)' : undefined }}>
                  <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.6rem', color: 'var(--accent)', width: '48px', flexShrink: 0, lineHeight: 1 }}>{item.stat}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--mid)' }}>{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
