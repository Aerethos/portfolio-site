'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (dot.current) { dot.current.style.left = mx + 'px'; dot.current.style.top = my + 'px' }
    }
    const frame = () => {
      rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13
      if (ring.current) { ring.current.style.left = rx + 'px'; ring.current.style.top = ry + 'px' }
      requestAnimationFrame(frame)
    }
    const over = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        dot.current && (dot.current.style.width = '14px') && (dot.current.style.height = '14px')
        ring.current && (ring.current.style.width = '54px') && (ring.current.style.height = '54px')
      }
    }
    const out = () => {
      dot.current && (dot.current.style.width = '10px') && (dot.current.style.height = '10px')
      ring.current && (ring.current.style.width = '38px') && (ring.current.style.height = '38px')
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    frame()
    return () => { document.removeEventListener('mousemove', move); document.removeEventListener('mouseover', over); document.removeEventListener('mouseout', out) }
  }, [])

  return (<><div className="cur" ref={dot} /><div className="cur-ring" ref={ring} /></>)
}
