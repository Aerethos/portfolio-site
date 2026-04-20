'use client'
import { useState } from 'react'
import Link from 'next/link'

const questions = [
  {
    q: 'What does "vector graphic" mean?',
    options: ['An image made of pixels', 'An image defined by mathematical paths and shapes', 'A compressed JPEG format', 'A type of web font'],
    answer: 1,
    explain: 'Vector graphics use mathematical equations to define shapes, allowing them to scale to any size without quality loss. SVG and AI files are vector formats.'
  },
  {
    q: 'What is the correct color mode for print design?',
    options: ['RGB', 'HSL', 'CMYK', 'HEX'],
    answer: 2,
    explain: 'CMYK (Cyan, Magenta, Yellow, Key/Black) is the standard for print. RGB is used for screens. Designing in RGB and printing can cause unexpected color shifts.'
  },
  {
    q: 'Which file format supports transparency AND lossless compression?',
    options: ['JPEG', 'BMP', 'PNG', 'TIFF'],
    answer: 2,
    explain: 'PNG supports both transparency (alpha channel) and lossless compression. JPEG discards data on save. GIF supports transparency but only 256 colors.'
  },
  {
    q: 'What resolution is standard for print production?',
    options: ['72 DPI', '150 DPI', '300 DPI', '600 DPI'],
    answer: 2,
    explain: '300 DPI (dots per inch) is the professional print standard. 72 DPI is for screens. Below 300 DPI on print often results in visibly blurry or pixelated output.'
  },
  {
    q: 'What is "bleed" in print design?',
    options: ['Ink that runs under the paper', 'Extra area extending beyond the trim edge', 'Overlapping text layers', 'A font rendering issue'],
    answer: 1,
    explain: 'Bleed is a border area (typically 3mm) added outside the final trim size. It ensures no white edges appear if cutting is slightly off-alignment.'
  },
  {
    q: 'Which principle describes the visual path a viewer\'s eye follows?',
    options: ['Gestalt proximity', 'Visual hierarchy', 'Kerning', 'Leading'],
    answer: 1,
    explain: 'Visual hierarchy guides the viewer\'s eye through a composition using size, weight, color, and position — from the most to least important element.'
  },
  {
    q: 'What does "kerning" specifically adjust?',
    options: ['Line spacing between rows of text', 'Letter spacing across a full text block', 'Space between specific letter pairs', 'Font weight rendering'],
    answer: 2,
    explain: 'Kerning adjusts the space between specific character pairs (e.g., AV, To). Tracking adjusts spacing across all characters uniformly. Leading adjusts line spacing.'
  },
  {
    q: 'Which extension is a scalable vector format for the web?',
    options: ['.eps', '.ai', '.svg', '.psd'],
    answer: 2,
    explain: 'SVG (Scalable Vector Graphics) is an XML-based vector format designed for web use. It can be embedded in HTML, styled with CSS, and animated with JavaScript.'
  },
]

export default function Quiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  const select = (qi: number, ai: number) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [qi]: ai }))
  }

  const score = submitted
    ? questions.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0)
    : 0

  const reset = () => { setAnswers({}); setSubmitted(false) }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="reveal visible">
            <p className="page-header eyebrow">Quiz — 20% of Assessment</p>
            <h1>Knowledge<br /><em>test.</em></h1>
            <p className="page-header subtitle">
              Eight questions covering graphic design fundamentals — formats, principles, colour theory, and print production.
            </p>
          </div>
        </div>
      </div>

      <section style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          {submitted && (
            <div style={{
              marginBottom: '48px',
              padding: '32px',
              background: score >= 6 ? 'rgba(107,207,127,0.08)' : 'rgba(200,75,47,0.08)',
              border: `1px solid ${score >= 6 ? 'rgba(107,207,127,0.3)' : 'rgba(200,75,47,0.3)'}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <div>
                <p className="mono" style={{ marginBottom: '8px' }}>Result</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', lineHeight: 1, color: score >= 6 ? '#6bcf7f' : 'var(--rust)' }}>
                  {score}/{questions.length}
                </p>
                <p style={{ color: 'var(--mist)', marginTop: '8px' }}>
                  {score === 8 ? 'Perfect score! Excellent grasp of fundamentals.' :
                   score >= 6 ? 'Strong performance. A few concepts to revisit.' :
                   score >= 4 ? 'Good effort. Review the explanations below.' :
                   'Keep studying — the explanations below will help.'}
                </p>
              </div>
              <button className="btn" onClick={reset}>Retake Quiz</button>
            </div>
          )}

          {questions.map((q, qi) => {
            const selected = answers[qi]
            const isCorrect = submitted && selected === q.answer
            const isWrong = submitted && selected !== undefined && selected !== q.answer

            return (
              <div key={qi} style={{
                marginBottom: '32px',
                padding: '28px',
                border: submitted
                  ? isCorrect ? '1px solid rgba(107,207,127,0.35)'
                  : isWrong ? '1px solid rgba(200,75,47,0.35)'
                  : '1px solid rgba(255,255,255,0.06)'
                  : '1px solid rgba(255,255,255,0.06)',
                background: submitted
                  ? isCorrect ? 'rgba(107,207,127,0.04)'
                  : isWrong ? 'rgba(200,75,47,0.04)'
                  : 'rgba(255,255,255,0.02)'
                  : 'rgba(255,255,255,0.02)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', flexShrink: 0, marginTop: '3px' }}>Q{String(qi + 1).padStart(2, '0')}</span>
                  <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 500, lineHeight: 1.5 }}>{q.q}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: submitted ? '16px' : 0 }}>
                  {q.options.map((opt, ai) => {
                    let bg = 'rgba(255,255,255,0.03)'
                    let border = 'rgba(255,255,255,0.08)'
                    let color = 'var(--paper)'
                    if (!submitted && selected === ai) { bg = 'rgba(200,75,47,0.12)'; border = 'rgba(200,75,47,0.5)'; color = 'var(--rust)' }
                    if (submitted && ai === q.answer) { bg = 'rgba(107,207,127,0.1)'; border = 'rgba(107,207,127,0.4)'; color = '#6bcf7f' }
                    if (submitted && selected === ai && ai !== q.answer) { bg = 'rgba(200,75,47,0.1)'; border = 'rgba(200,75,47,0.4)'; color = '#e05555' }

                    return (
                      <button
                        key={ai}
                        onClick={() => select(qi, ai)}
                        style={{
                          background: bg,
                          border: `1px solid ${border}`,
                          color,
                          padding: '12px 16px',
                          textAlign: 'left',
                          fontSize: '0.88rem',
                          lineHeight: 1.5,
                          cursor: submitted ? 'default' : 'none',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          gap: '12px',
                          alignItems: 'center'
                        }}
                      >
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', opacity: 0.6 }}>
                          {['A', 'B', 'C', 'D'][ai]}
                        </span>
                        {opt}
                        {submitted && ai === q.answer && <span style={{ marginLeft: 'auto', fontSize: '0.75rem' }}>✓</span>}
                        {submitted && selected === ai && ai !== q.answer && <span style={{ marginLeft: 'auto', fontSize: '0.75rem' }}>✗</span>}
                      </button>
                    )
                  })}
                </div>
                {submitted && (
                  <div style={{ marginTop: '12px', padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderLeft: '2px solid var(--rust)', fontSize: '0.82rem', color: 'var(--mist)', lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--paper)', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Explanation: </strong>
                    {q.explain}
                  </div>
                )}
              </div>
            )
          })}

          {!submitted && (
            <div style={{ marginTop: '16px' }}>
              <p style={{ color: 'var(--mist)', fontSize: '0.82rem', marginBottom: '16px' }}>
                {Object.keys(answers).length}/{questions.length} answered
              </p>
              <button
                className="btn"
                onClick={() => setSubmitted(true)}
                style={{ opacity: Object.keys(answers).length < questions.length ? 0.4 : 1 }}
                disabled={Object.keys(answers).length < questions.length}
              >
                Submit Answers →
              </button>
            </div>
          )}
        </div>
      </section>

      <section style={{ padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link href="/review" className="btn btn-ghost">← Review</Link>
          <Link href="/about" className="btn">About & Presentation →</Link>
        </div>
      </section>
    </>
  )
}
