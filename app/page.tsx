'use client'
import R from '@/components/R'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [revealed, setRevealed] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()
    window.addEventListener('resize', setSize)

    const W = () => canvas.width
    const H = () => canvas.height

    let phase = 0
    let t = 0

    const irelandPts = [
      [0.45,0.05],[0.55,0.04],[0.65,0.08],[0.72,0.14],[0.78,0.22],[0.80,0.30],
      [0.75,0.38],[0.82,0.44],[0.85,0.52],[0.80,0.60],[0.72,0.66],[0.78,0.72],
      [0.75,0.80],[0.68,0.88],[0.58,0.94],[0.48,0.96],[0.38,0.92],[0.28,0.85],
      [0.20,0.76],[0.15,0.66],[0.12,0.56],[0.15,0.46],[0.10,0.38],[0.12,0.28],
      [0.20,0.20],[0.28,0.13],[0.36,0.08],[0.45,0.05]
    ]
    const hungaryPts = [
      [0.08,0.32],[0.18,0.22],[0.28,0.16],[0.40,0.12],[0.52,0.08],[0.64,0.10],
      [0.74,0.06],[0.84,0.10],[0.92,0.18],[0.96,0.28],[0.94,0.38],[0.98,0.46],
      [0.94,0.54],[0.88,0.62],[0.80,0.70],[0.70,0.76],[0.60,0.82],[0.50,0.88],
      [0.40,0.90],[0.30,0.86],[0.20,0.80],[0.12,0.72],[0.06,0.62],[0.04,0.50],
      [0.06,0.40],[0.08,0.32]
    ]

    const mapW = W() * 0.28
    const mapH = H() * 0.7
    const irelandX = W() * 0.12
    const irelandY = H() * 0.15
    const hungaryX = W() * 0.58
    const hungaryY = H() * 0.22
    const hungaryW = W() * 0.30
    const hungaryH = H() * 0.52

    const getIrelandCentroid = () => {
      const sx = irelandPts.reduce((a, p) => a + p[0], 0) / irelandPts.length
      const sy = irelandPts.reduce((a, p) => a + p[1], 0) / irelandPts.length
      return { x: irelandX + sx * mapW + mapW * 0.05, y: irelandY + sy * mapH + mapH * 0.18 }
    }
    const getHungaryCentroid = () => {
      const sx = hungaryPts.reduce((a, p) => a + p[0], 0) / hungaryPts.length
      const sy = hungaryPts.reduce((a, p) => a + p[1], 0) / hungaryPts.length
      return { x: hungaryX + sx * hungaryW + hungaryW * 0.05, y: hungaryY + sy * hungaryH - hungaryH * 0.05 }
    }

    const dublin = getIrelandCentroid()
    const budapest = getHungaryCentroid()
    const cp = {
      x: (dublin.x + budapest.x) / 2,
      y: Math.min(dublin.y, budapest.y) - H() * 0.3
    }

    let mapAlpha = 0
    let routeProgress = 0
    let planeT = 0
    let trailPts: { x: number; y: number }[] = []
    let planeSize = 14
    let zoomT = 0
    let flashAlpha = 0
    let bgAlpha = 1

    const easeIn = (t: number) => t * t * t
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const drawCountry = (
      pts: number[][], bx: number, by: number, bw: number, bh: number, alpha: number
    ) => {
      ctx.beginPath()
      pts.forEach(([nx, ny], i) => {
        const px = bx + nx * bw, py = by + ny * bh
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      })
      ctx.closePath()
      ctx.fillStyle = `rgba(212,69,12,${0.08 * alpha})`
      ctx.fill()
      ctx.strokeStyle = `rgba(212,69,12,${0.5 * alpha})`
      ctx.lineWidth = 1.5
      ctx.stroke()
    }

    const drawPlane = (x: number, y: number, angle: number, size: number, alpha: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)
      ctx.globalAlpha = alpha
      ctx.beginPath()
      ctx.moveTo(size, 0)
      ctx.lineTo(-size * 0.6, size * 0.35)
      ctx.lineTo(-size * 0.3, 0)
      ctx.lineTo(-size * 0.6, -size * 0.35)
      ctx.closePath()
      ctx.fillStyle = 'rgba(212,69,12,1)'
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(size * 0.1, 0)
      ctx.lineTo(-size * 0.2, size * 0.8)
      ctx.lineTo(-size * 0.5, size * 0.15)
      ctx.closePath()
      ctx.fillStyle = 'rgba(212,69,12,0.7)'
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(size * 0.1, 0)
      ctx.lineTo(-size * 0.2, -size * 0.8)
      ctx.lineTo(-size * 0.5, -size * 0.15)
      ctx.closePath()
      ctx.fill()
      ctx.globalAlpha = 1
      ctx.restore()
    }

    let animId: number

    const tick = () => {
      const w = W(), h = H()
      ctx.clearRect(0, 0, w, h)

      // Background
      ctx.fillStyle = `rgba(247,244,239,${bgAlpha})`
      ctx.fillRect(0, 0, w, h)

      // Phase 0: map fades in
      if (phase === 0) {
        t += 0.016
        mapAlpha = Math.min(1, t * 1.2)
        if (mapAlpha >= 1) { phase = 1; t = 0 }
      }

      // Phase 1: plane travels route
      if (phase === 1) {
        t += 0.008
        routeProgress = Math.min(1, t * 1.5)
        planeT = Math.min(0.95, t * 0.8)
        if (t > 1.4) { phase = 2; t = 0 }
      }

      // Phase 2: plane zooms toward camera
      if (phase === 2) {
        t += 0.016
        zoomT = Math.min(1, t * 0.7)
        planeSize = 14 + easeIn(zoomT) * 600
        mapAlpha = Math.max(0, 1 - zoomT * 2)
        if (zoomT > 0.85) flashAlpha = Math.min(1, (zoomT - 0.85) * 8)
        if (zoomT >= 1) { phase = 3; t = 0 }
      }

      // Phase 3: flash + reveal
      if (phase === 3) {
        t += 0.025
        flashAlpha = Math.max(0, 1 - t * 2.5)
        bgAlpha = Math.max(0, 1 - t * 1.5)
        if (bgAlpha <= 0) {
          setRevealed(true)
          setTimeout(() => setShowContent(true), 100)
          cancelAnimationFrame(animId)
          return
        }
      }

      // Draw map
      if (mapAlpha > 0) {
        drawCountry(irelandPts, irelandX, irelandY, mapW, mapH, mapAlpha)
        drawCountry(hungaryPts, hungaryX, hungaryY, hungaryW, hungaryH, mapAlpha)

        ctx.beginPath()
        ctx.arc(dublin.x, dublin.y, 5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,69,12,${0.7 * mapAlpha})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(budapest.x, budapest.y, 5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212,69,12,${0.9 * mapAlpha})`
        ctx.fill()

        if (phase === 1) {
          const pulse = 8 + Math.sin(Date.now() / 400) * 3
          ctx.beginPath()
          ctx.arc(budapest.x, budapest.y, pulse, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(212,69,12,${0.3 * mapAlpha})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }

        ctx.font = `500 13px 'DM Mono', monospace`
        ctx.fillStyle = `rgba(26,24,20,${0.6 * mapAlpha})`
        ctx.fillText('Waterford, Ireland', dublin.x - 10, dublin.y + 22)
        ctx.fillStyle = `rgba(212,69,12,${0.8 * mapAlpha})`
        ctx.fillText('Budapest, Hungary', budapest.x - 10, budapest.y + 22)

        if (routeProgress > 0) {
          ctx.beginPath()
          ctx.moveTo(dublin.x, dublin.y)
          ctx.quadraticCurveTo(cp.x, cp.y, budapest.x, budapest.y)
          ctx.setLineDash([4, 8])
          ctx.strokeStyle = `rgba(212,69,12,${0.15 * mapAlpha})`
          ctx.lineWidth = 1
          ctx.stroke()
          ctx.setLineDash([])

          ctx.beginPath()
          const steps = 60
          for (let i = 0; i <= steps * routeProgress; i++) {
            const s = i / steps
            const px = (1-s)*(1-s)*dublin.x + 2*(1-s)*s*cp.x + s*s*budapest.x
            const py = (1-s)*(1-s)*dublin.y + 2*(1-s)*s*cp.y + s*s*budapest.y
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
          }
          ctx.strokeStyle = `rgba(212,69,12,${0.6 * mapAlpha})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }
      }

      // Draw plane
      if (phase === 1 || phase === 2) {
        const bt = phase === 2 ? 0.95 : planeT
        const bpx = (1-bt)*(1-bt)*dublin.x + 2*(1-bt)*bt*cp.x + bt*bt*budapest.x
        const bpy = (1-bt)*(1-bt)*dublin.y + 2*(1-bt)*bt*cp.y + bt*bt*budapest.y

        let planeX = bpx
        let planeY = bpy

        if (phase === 2) {
          const ep = easeIn(zoomT)
          planeX = lerp(bpx, w / 2, ep)
          planeY = lerp(bpy, h / 2, ep)
        }

        if (phase === 1) {
          trailPts.push({ x: planeX, y: planeY })
          if (trailPts.length > 60) trailPts.shift()
          trailPts.forEach((pt, idx) => {
            ctx.beginPath()
            ctx.arc(pt.x, pt.y, 1.5, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(212,69,12,${(idx / trailPts.length) * 0.4 * mapAlpha})`
            ctx.fill()
          })
        }

        const bt2 = Math.min(bt + 0.01, 1)
        const nx = (1-bt2)*(1-bt2)*dublin.x + 2*(1-bt2)*bt2*cp.x + bt2*bt2*budapest.x
        const ny2 = (1-bt2)*(1-bt2)*dublin.y + 2*(1-bt2)*bt2*cp.y + bt2*bt2*budapest.y
        let angle = Math.atan2(ny2 - bpy, nx - bpx)
        if (phase === 2) angle = lerp(angle, 0, easeIn(zoomT))

        const planeAlpha = phase === 2 ? Math.max(0, 1 - (zoomT - 0.7) * 3) : mapAlpha
        drawPlane(planeX, planeY, angle, planeSize, Math.max(0, planeAlpha))
      }

      // Flash
      if (flashAlpha > 0) {
        ctx.fillStyle = `rgba(247,244,239,${flashAlpha})`
        ctx.fillRect(0, 0, w, h)
        const ringSize = flashAlpha > 0.5 ? (1 - flashAlpha) * w * 1.5 : 0
        if (ringSize > 0) {
          ctx.beginPath()
          ctx.arc(w / 2, h / 2, ringSize, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(212,69,12,${flashAlpha * 0.4})`
          ctx.lineWidth = 3
          ctx.stroke()
        }
      }

      animId = requestAnimationFrame(tick)
    }

    animId = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', setSize)
    }
  }, [])

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

  return (
    <>
      <style>{`
        @keyframes nudge{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}
        @keyframes fadeSlideUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
        .hero-word{display:inline-block;animation:fadeSlideUp 1s cubic-bezier(.16,1,.3,1) both}
      `}</style>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', position: 'relative',
        borderBottom: '1px solid var(--faint)', overflow: 'hidden',
        background: 'var(--bg)'
      }}>

        {/* Intro canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            zIndex: revealed ? -1 : 10,
            pointerEvents: 'none',
            opacity: revealed ? 0 : 1,
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Decorative */}
        <div style={{ position: 'absolute', top: '32px', right: '48px', fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--faint)', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', zIndex: 3 }}>
          <span>Graphic Design & Web</span>
          <span style={{ color: 'var(--accent)' }}>Erasmus BIP · Budapest 2026</span>
        </div>
        <div style={{ position: 'absolute', top: 0, left: '48px', width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent 0%, var(--faint) 25%, var(--faint) 75%, transparent 100%)', zIndex: 2 }} />
        <div style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--faint)', whiteSpace: 'nowrap', zIndex: 2 }}>Waterford · Ireland</div>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--faint)', opacity: 0.3, pointerEvents: 'none', zIndex: 2 }} />

        {/* Hero content */}
        <div
          className="wrap"
          style={{
            position: 'relative', zIndex: 3,
            opacity: showContent ? 1 : 0,
            transition: 'opacity 0.6s ease',
            pointerEvents: showContent ? 'auto' : 'none',
          }}
        >
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

      {/* ── MARQUEE ── */}
      <div style={{ background: 'var(--ink)', padding: '18px 0', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div ref={marqueeRef} style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          {Array(4).fill(null).map((_, i) => (
            <span key={i} style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
              {['Nathan Sfendji','·','AerEthos','·','SETU Waterford','·','Erasmus Budapest 2026','·','Graphic Design & Web','·','Next.js','·'].map((w, j) => (
                <span key={j} style={{ marginRight: '32px', color: w === '·' ? 'var(--accent)' : undefined }}>{w}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── FACTS ── */}
      <section style={{ padding: '0', background: 'var(--ink)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { num: '20',   label: 'Years old' },
              { num: 'IE',   label: 'Waterford, Ireland' },
              { num: 'BUD',  label: 'Erasmus · Budapest' },
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

      {/* ── AERETHOS ── */}
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
