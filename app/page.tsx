'use client'
import R from '@/components/R'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Home() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Globe rotation
    let rotation = 0
    // Plane progress along arc
    let planeT = 0
    let trailPoints: { x: number; y: number; a: number }[] = []

    // Convert lat/lng to canvas x/y for a simple orthographic projection
    const project = (lat: number, lng: number, rot: number) => {
      const latR = (lat * Math.PI) / 180
      const lngR = ((lng + rot) * Math.PI) / 180
      const cx = W() * 0.62
      const cy = H() * 0.5
      const r = Math.min(W(), H()) * 0.34

      const x2 = Math.cos(latR) * Math.sin(lngR)
      const y2 = -Math.sin(latR)
      const z2 = Math.cos(latR) * Math.cos(lngR)

      return { x: cx + r * x2, y: cy + r * y2, visible: z2 > 0 }
    }

    // Dublin: 53.3°N, 6.3°W  Budapest: 47.5°N, 19.1°E
    const dublinLat = 53.3, dublinLng = -6.3
    const budLat = 47.5, budLng = 19.1

    // Interpolate lat/lng along great circle (simple lerp good enough here)
    const interpolate = (t: number) => {
      const lat = dublinLat + (budLat - dublinLat) * t
      const lng = dublinLng + (budLng - dublinLng) * t
      // Arc height — push up slightly for great-circle feel
      const arc = Math.sin(t * Math.PI) * 6
      return { lat: lat + arc, lng }
    }

    // Draw a faint grid of lat/lng lines
    const drawGlobe = (rot: number) => {
      const cx = W() * 0.62
      const cy = H() * 0.5
      const r = Math.min(W(), H()) * 0.34

      // Outer circle
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(212,69,12,0.08)'
      ctx.lineWidth = 1
      ctx.stroke()

      // Fill
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(212,69,12,0.018)'
      ctx.fill()

      // Longitude lines
      for (let lng = -180; lng < 180; lng += 20) {
        ctx.beginPath()
        let first = true
        for (let lat = -90; lat <= 90; lat += 3) {
          const p = project(lat, lng, rot)
          if (!p.visible) { first = true; continue }
          if (first) { ctx.moveTo(p.x, p.y); first = false }
          else ctx.lineTo(p.x, p.y)
        }
        ctx.strokeStyle = 'rgba(212,69,12,0.07)'
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Latitude lines
      for (let lat = -60; lat <= 60; lat += 20) {
        ctx.beginPath()
        let first = true
        for (let lng2 = -180; lng2 <= 180; lng2 += 3) {
          const p = project(lat, lng2, rot)
          if (!p.visible) { first = true; continue }
          if (first) { ctx.moveTo(p.x, p.y); first = false }
          else ctx.lineTo(p.x, p.y)
        }
        ctx.strokeStyle = 'rgba(212,69,12,0.06)'
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }

    const drawRoute = (rot: number, t: number) => {
      // Draw dashed great-circle path
      ctx.beginPath()
      let first = true
      for (let i = 0; i <= 100; i++) {
        const pos = interpolate(i / 100)
        const p = project(pos.lat, pos.lng, rot)
        if (!p.visible) { first = true; continue }
        if (first) { ctx.moveTo(p.x, p.y); first = false }
        else ctx.lineTo(p.x, p.y)
      }
      ctx.setLineDash([3, 5])
      ctx.strokeStyle = 'rgba(212,69,12,0.25)'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.setLineDash([])

      // Dublin dot
      const dublin = project(dublinLat, dublinLng, rot)
      if (dublin.visible) {
        ctx.beginPath()
        ctx.arc(dublin.x, dublin.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(212,69,12,0.6)'
        ctx.fill()
        ctx.font = '500 9px var(--mono, monospace)'
        ctx.fillStyle = 'rgba(212,69,12,0.55)'
        ctx.fillText('Dublin', dublin.x + 6, dublin.y - 4)
      }

      // Budapest dot
      const bud = project(budLat, budLng, rot)
      if (bud.visible) {
        ctx.beginPath()
        ctx.arc(bud.x, bud.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(212,69,12,0.9)'
        ctx.fill()
        // Pulse ring
        ctx.beginPath()
        ctx.arc(bud.x, bud.y, 6 + Math.sin(Date.now() / 400) * 2, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(212,69,12,0.35)'
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.font = '500 9px var(--mono, monospace)'
        ctx.fillStyle = 'rgba(212,69,12,0.8)'
        ctx.fillText('Budapest ✦', bud.x + 6, bud.y - 4)
      }

      // Plane
      const planePos = interpolate(t)
      const plane = project(planePos.lat, planePos.lng, rot)
      const nextPos = interpolate(Math.min(t + 0.01, 1))
      const planeNext = project(nextPos.lat, nextPos.lng, rot)

      if (plane.visible) {
        // Trail
        trailPoints.push({ x: plane.x, y: plane.y, a: 1 })
        if (trailPoints.length > 40) trailPoints.shift()
        trailPoints.forEach((pt, idx) => {
          ctx.beginPath()
          ctx.arc(pt.x, pt.y, 1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(212,69,12,${(idx / trailPoints.length) * 0.3})`
          ctx.fill()
        })

        // Plane icon (triangle rotated toward direction of travel)
        const angle = Math.atan2(planeNext.y - plane.y, planeNext.x - plane.x)
        ctx.save()
        ctx.translate(plane.x, plane.y)
        ctx.rotate(angle)
        ctx.beginPath()
        ctx.moveTo(8, 0)
        ctx.lineTo(-5, 4)
        ctx.lineTo(-3, 0)
        ctx.lineTo(-5, -4)
        ctx.closePath()
        ctx.fillStyle = 'rgba(212,69,12,0.85)'
        ctx.fill()
        ctx.restore()
      }
    }

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, W(), H())
      rotation += 0.04
      planeT += 0.0018
      if (planeT > 1) { planeT = 0; trailPoints = [] }

      drawGlobe(rotation)
      drawRoute(rotation, planeT)
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes nudge{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}
        @keyframes fadeSlideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }
        .hero-word { display:inline-block; animation: fadeSlideUp 0.9s cubic-bezier(.16,1,.3,1) both; }
      `}</style>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', position: 'relative',
        borderBottom: '1px solid var(--faint)', overflow: 'hidden',
        background: 'var(--bg)'
      }}>

        {/* Globe canvas — full hero background */}
        <canvas ref={canvasRef} style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none', zIndex: 1
        }} />

        {/* Top-right tag */}
        <div style={{
          position: 'absolute', top: '32px', right: '48px',
          fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'var(--faint)',
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px',
          zIndex: 3
        }}>
          <span>Graphic Design & Web</span>
          <span style={{ color: 'var(--accent)' }}>Erasmus BIP · Budapest 2026</span>
        </div>

        {/* Left vertical rule */}
        <div style={{ position: 'absolute', top: 0, left: '48px', width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent 0%, var(--faint) 25%, var(--faint) 75%, transparent 100%)', zIndex: 2 }} />
        <div style={{
          position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%) rotate(-90deg)',
          fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.18em',
          textTransform: 'uppercase', color: 'var(--faint)', whiteSpace: 'nowrap', zIndex: 2
        }}>Waterford · Ireland</div>

        {/* Horizontal mid rule */}
        <div style={{
          position: 'absolute', top: '50%', left: 0, right: 0,
          height: '1px', background: 'var(--faint)', opacity: 0.3,
          pointerEvents: 'none', zIndex: 2
        }} />

        {/* Main content */}
        <div className="wrap" style={{ position: 'relative', zIndex: 3, paddingTop: '0' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1 className="hero-word" style={{
              fontFamily: 'var(--serif)', fontWeight: 900,
              fontSize: 'clamp(4rem, 10vw, 10rem)',
              lineHeight: 0.95, letterSpacing: '-0.03em',
              display: 'block', marginBottom: '4px', animationDelay: '0.1s'
            }}>Nathan</h1>
            <h1 className="hero-word" style={{
              fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic',
              fontSize: 'clamp(4rem, 10vw, 10rem)',
              lineHeight: 0.95, letterSpacing: '-0.03em',
              color: 'var(--accent)', display: 'block', animationDelay: '0.22s'
            }}>Sfendji.</h1>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', maxWidth: '860px' }}>
            <R delay={400}>
              <p style={{ fontSize: '1rem', color: 'var(--mid)', lineHeight: 1.9 }}>
                Founder of <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>AerEthos</strong>, second-year International Business student at SETU Waterford, and currently in Budapest for an Erasmus study week. This site is part of a Graphic Design &amp; Web module — but if we&apos;re making a site, we might as well make a proper one.
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

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', zIndex: 3 }}>
          <p className="label" style={{ fontSize: '0.55rem' }}>Scroll</p>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'nudge 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div style={{ background: 'var(--ink)', padding: '18px 0', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div ref={marqueeRef} style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap' }}>
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
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '14px' }}>
              What&apos;s on this site
            </h2>
            <p style={{ color: 'var(--mid)', maxWidth: '520px', lineHeight: 1.85, marginBottom: '56px' }}>
              Four sections covering everything required for the Graphic Design &amp; Web module.
            </p>
          </R>
          <div className="g2">
            {[
              { href: '/tasks',   num: '01', title: 'Weekly Tasks',  sub: '50% of module',        desc: 'Domain pricing across six EU country codes, web hosting comparisons, the Edutus University logo rebuilt as an SVG vector, and a faculty banner created and modified in GIMP.' },
              { href: '/project', num: '02', title: 'Final Project',  sub: '20% of module',        desc: 'A complete business graphics system — business cards, brochure, advertisement, menu, and opening hours — unified under the AerEthos brand identity.' },
              { href: '/review',  num: '03', title: 'Graphic Review', sub: 'Part of weekly tasks', desc: 'Real-world design pieces analysed — poster, advertisement, website, brochure. Problems identified, positives noted, improvements proposed.' },
              { href: '/about',   num: '04', title: 'About',          sub: 'Who made this',         desc: 'A short introduction to me — Nathan Sfendji — and what I\'m up to right now.' },
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
                I run <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>AerEthos</em> —<br />
                yearbooks for Irish schools.
              </h2>
              <a href="https://aerethos.com" target="_blank" rel="noreferrer" className="btn">aerethos.com →</a>
            </div>
            <div style={{ padding: '64px 0 64px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {[
                { stat: '6+',  detail: 'Schools served' },
                { stat: 'EI',  detail: 'Enterprise Ireland — New Frontiers' },
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
