import R from '@/components/R'
import Link from 'next/link'

export default function Project() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');
        .ae-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .ae-sans { font-family: 'League Spartan', sans-serif; }
        .compare-label-good { 
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.1em;
          text-transform: uppercase; padding: 4px 10px;
          background: rgba(43,138,62,0.1); border: 1px solid rgba(43,138,62,0.3);
          color: #2b8a3e; margin-bottom: 12px;
        }
        .compare-label-bad {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--mono); font-size: 0.6rem; letter-spacing: 0.1em;
          text-transform: uppercase; padding: 4px 10px;
          background: rgba(192,57,43,0.08); border: 1px solid rgba(192,57,43,0.3);
          color: #c0392b; margin-bottom: 12px;
        }
      `}</style>

      {/* ── HERO ── */}
      <div style={{ background: '#001E3C', paddingTop: '140px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{
          position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'League Spartan, sans-serif', fontWeight: 900,
          fontSize: 'clamp(120px, 18vw, 240px)',
          color: 'rgba(176,138,74,0.06)', lineHeight: 1,
          userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em', whiteSpace: 'nowrap'
        }}>AERETHOS</div>
        <div style={{ position: 'absolute', top: 0, left: '48px', width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(176,138,74,0.3), transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(176,138,74,0.2), transparent)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <R>
            <p style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B08A4A', marginBottom: '20px' }}>Final Project — 20% of Module</p>
          </R>
          <R delay={80}>
            <h1 className="ae-serif" style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1, color: '#CFC9B8', marginBottom: '8px', letterSpacing: '-0.02em' }}>AerEthos</h1>
          </R>
          <R delay={140}>
            <h2 className="ae-sans" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', fontWeight: 300, color: 'rgba(207,201,184,0.45)', marginBottom: '32px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Brand Identity & Business Graphics System</h2>
          </R>
          <R delay={200}>
            <div style={{ width: '40px', height: '1px', background: '#B08A4A', marginBottom: '28px' }} />
            <p className="ae-serif" style={{ fontSize: '1.25rem', fontWeight: 300, color: 'rgba(207,201,184,0.65)', maxWidth: '560px', lineHeight: 1.9 }}>
              Premium yearbook and memory publishing for Irish secondary schools. Founded in 2023, backed by Enterprise Ireland&apos;s New Frontiers Programme — every piece of collateral built to feel as considered as the books themselves.
            </p>
          </R>
          <R delay={280}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', marginTop: '60px', borderTop: '1px solid rgba(176,138,74,0.15)', borderLeft: '1px solid rgba(176,138,74,0.15)' }}>
              {[
                { num: '\'23', label: 'Founded' },
                { num: 'EI', label: 'Enterprise Ireland' },
                { num: '6+', label: 'Schools served' },
                { num: 'IE', label: 'Waterford, Ireland' },
              ].map((f, i) => (
                <div key={i} style={{ padding: '24px 28px', borderRight: '1px solid rgba(176,138,74,0.15)', borderBottom: '1px solid rgba(176,138,74,0.15)' }}>
                  <p className="ae-serif" style={{ fontSize: '1.8rem', fontStyle: 'italic', color: '#B08A4A', lineHeight: 1, marginBottom: '6px' }}>{f.num}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(207,201,184,0.4)' }}>{f.label}</p>
                </div>
              ))}
            </div>
          </R>
        </div>
      </div>

      {/* ── BRAND SYSTEM ── */}
      <section style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--faint)' }}>
        <div className="wrap">
          <R>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>The Brand System</p>
            <div style={{ width: '32px', height: '2px', background: 'var(--accent)', marginBottom: '20px' }} />
            <h2 className="ae-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, fontStyle: 'italic', marginBottom: '12px' }}>One identity. Applied everywhere.</h2>
            <p style={{ color: 'var(--mid)', maxWidth: '540px', lineHeight: 1.85, marginBottom: '48px', fontSize: '0.92rem' }}>
              AerEthos uses a three-colour palette, two typefaces, and a single tonal register — quiet authority. Every application below derives from the same source.
            </p>
          </R>
          <R delay={60}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', border: '1px solid var(--faint)', overflow: 'hidden', marginBottom: '16px' }}>
              {[
                { bg: '#001E3C', label: 'Navy', hex: '#001E3C', sub: 'Primary', light: true },
                { bg: '#B08A4A', label: 'Gold', hex: '#B08A4A', sub: 'Accent', light: true },
                { bg: '#CFC9B8', label: 'Stone', hex: '#CFC9B8', sub: 'Neutral', light: false },
              ].map((c, i) => (
                <div key={i} style={{ background: c.bg, padding: '36px 24px', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', color: c.light ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>{c.label}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: c.light ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.5)', fontWeight: 500 }}>{c.hex}</p>
                  <p style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', color: c.light ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '4px' }}>{c.sub}</p>
                </div>
              ))}
              <div style={{ padding: '36px 24px', borderRight: '1px solid var(--faint)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p className="ae-serif" style={{ fontSize: '1.5rem', fontStyle: 'italic', fontWeight: 300, marginBottom: '4px', color: 'var(--ink)' }}>Cormorant</p>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Headlines · Emotional</p>
              </div>
              <div style={{ padding: '36px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p className="ae-sans" style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '4px' }}>League Spartan</p>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', color: 'var(--mid)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Body · Labels · Clean</p>
              </div>
            </div>
          </R>
        </div>
      </section>

      <section>
        <div className="wrap">

          {/* 01 — BUSINESS CARDS */}
          <R>
            <div style={{ marginBottom: '80px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                <span className="ae-serif" style={{ fontStyle: 'italic', color: '#B08A4A', fontSize: '1rem' }}>01</span>
                <h3 className="ae-sans" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Business Cards</h3>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--mid)', marginLeft: 'auto' }}>85 × 55mm · 350gsm · CMYK</span>
              </div>
              <p style={{ color: 'var(--mid)', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '36px', maxWidth: '600px' }}>
                The front uses the Stone (#CFC9B8) background — warm, premium, immediately different from standard white cards. The back is full Navy with Gold details, making it memorable when flipped.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <div>
                  <div className="compare-label-good">✓ Good design</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ background: '#CFC9B8', aspectRatio: '1.75/1', padding: '24px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <p className="ae-serif" style={{ fontStyle: 'italic', fontWeight: 300, fontSize: '1.3rem', color: '#001E3C', marginBottom: '5px' }}>AerEthos</p>
                        <div style={{ width: '24px', height: '1px', background: '#B08A4A' }} />
                      </div>
                      <p className="ae-sans" style={{ fontSize: '0.4rem', fontWeight: 400, color: '#001E3C', letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.45 }}>Memory Publishing · Ireland</p>
                    </div>
                    <div style={{ background: '#001E3C', aspectRatio: '1.75/1', padding: '24px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <p className="ae-sans" style={{ fontSize: '0.68rem', fontWeight: 500, color: '#CFC9B8', marginBottom: '2px' }}>Nathan Sfendji</p>
                        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.44rem', color: '#B08A4A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Founder</p>
                      </div>
                      <div>
                        <div style={{ width: '100%', height: '1px', background: 'rgba(176,138,74,0.3)', marginBottom: '8px' }} />
                        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.44rem', color: 'rgba(207,201,184,0.6)', lineHeight: 1.9 }}>nathan@aerethos.com<br />aerethos.com</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '14px 16px', background: 'rgba(43,138,62,0.05)', borderLeft: '2px solid #2b8a3e' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--mid)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>Why it works:</strong> Brand colours used confidently. Gold rule creates visual hierarchy. Typeface pairing (Cormorant + mono) reinforces premium positioning. Stone background is warm and distinctive — not generic white.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="compare-label-bad">✗ Poor design</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ background: '#ffffff', border: '1px solid #ddd', aspectRatio: '1.75/1', padding: '24px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#000' }}>AERETHOS</p>
                        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.5rem', color: '#666' }}>Memory Publishing</p>
                      </div>
                      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.4rem', color: '#999' }}>Ireland</p>
                    </div>
                    <div style={{ background: '#f0f0f0', border: '1px solid #ddd', aspectRatio: '1.75/1', padding: '24px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
                      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.58rem', color: '#333', fontWeight: 700 }}>Nathan Sfendji</p>
                      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.48rem', color: '#555' }}>Founder & CEO</p>
                      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.44rem', color: '#666' }}>nathan@aerethos.com</p>
                      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.44rem', color: '#666' }}>+353 51 000 000</p>
                      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.44rem', color: '#666' }}>aerethos.com</p>
                    </div>
                  </div>
                  <div style={{ padding: '14px 16px', background: 'rgba(192,57,43,0.05)', borderLeft: '2px solid #c0392b' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--mid)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>Why it fails:</strong> Generic white card with no brand identity. Arial destroys the premium tone. Grey background on reverse is timid. Cluttered contact info with no hierarchy. Looks like a free Canva template.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </R>

          {/* 02 — LETTERHEAD */}
          <R>
            <div style={{ marginBottom: '80px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                <span className="ae-serif" style={{ fontStyle: 'italic', color: '#B08A4A', fontSize: '1rem' }}>02</span>
                <h3 className="ae-sans" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Letterhead</h3>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--mid)', marginLeft: 'auto' }}>A4 · Print & Digital</span>
              </div>
              <p style={{ color: 'var(--mid)', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '36px', maxWidth: '600px' }}>
                Sent to school principals as part of outreach. The letter itself is the first impression — it needs to communicate craft before a word is read.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <div>
                  <div className="compare-label-good">✓ Good design</div>
                  <div style={{ background: '#fafaf8', border: '1px solid var(--faint)', padding: '36px 40px', position: 'relative', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px', paddingBottom: '16px', borderBottom: '1px solid #CFC9B8' }}>
                      <div>
                        <p className="ae-serif" style={{ fontStyle: 'italic', fontWeight: 300, fontSize: '1.5rem', color: '#001E3C', lineHeight: 1, marginBottom: '3px' }}>AerEthos</p>
                        <p className="ae-sans" style={{ fontSize: '0.42rem', color: '#B08A4A', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Memory Publishing</p>
                      </div>
                      <p style={{ fontFamily: 'var(--mono)', fontSize: '0.48rem', color: 'var(--mid)', lineHeight: 1.8, textAlign: 'right' }}>aerethos.com<br />Waterford, Ireland</p>
                    </div>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', color: 'var(--mid)', marginBottom: '16px' }}>15 April 2025</p>
                    <p className="ae-serif" style={{ fontSize: '0.9rem', lineHeight: 1.9, color: '#1a1a1a', marginBottom: '10px' }}>Dear Principal,</p>
                    <p className="ae-serif" style={{ fontSize: '0.82rem', lineHeight: 1.9, color: 'var(--mid)', marginBottom: '10px' }}>We would like to introduce AerEthos — a premium yearbook and memory publishing service for Irish secondary schools. Our approach combines editorial design and quality print production...</p>
                    <p className="ae-serif" style={{ fontSize: '0.82rem', lineHeight: 1.9, color: 'var(--mid)', marginBottom: '20px' }}>Every school has a story worth telling. We make sure it&apos;s told well.</p>
                    <p className="ae-serif" style={{ fontStyle: 'italic', fontSize: '0.88rem', color: '#001E3C' }}>Nathan Sfendji, Founder</p>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, #001E3C, #B08A4A)' }} />
                  </div>
                  <div style={{ padding: '14px 16px', background: 'rgba(43,138,62,0.05)', borderLeft: '2px solid #2b8a3e' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--mid)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>Why it works:</strong> Gold gradient footer rule anchors the brand visually. Clear header hierarchy separates identity from contact. Cormorant body copy gives warmth. The letter feels like it comes from a real company worth taking seriously.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="compare-label-bad">✗ Poor design</div>
                  <div style={{ background: '#fff', border: '1px solid #ccc', padding: '36px 40px', marginBottom: '16px' }}>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#000', marginBottom: '2px' }}>AerEthos</p>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.6rem', color: '#666', marginBottom: '24px' }}>www.aerethos.com | nathan@aerethos.com | Waterford</p>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.6rem', color: '#333', marginBottom: '16px' }}>15/04/2025</p>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.7rem', lineHeight: 1.7, color: '#333', marginBottom: '10px' }}>Dear Principal,</p>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.68rem', lineHeight: 1.7, color: '#444', marginBottom: '10px' }}>We would like to introduce AerEthos — a premium yearbook and memory publishing service for Irish secondary schools. Our approach combines editorial design and quality print production...</p>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.68rem', lineHeight: 1.7, color: '#444', marginBottom: '20px' }}>Every school has a story worth telling. We make sure it&apos;s told well.</p>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.7rem', color: '#333' }}>Nathan Sfendji</p>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.6rem', color: '#666' }}>Founder</p>
                  </div>
                  <div style={{ padding: '14px 16px', background: 'rgba(192,57,43,0.05)', borderLeft: '2px solid #c0392b' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--mid)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>Why it fails:</strong> No visual identity — could be from any business. Arial is the default Microsoft Word font. No hierarchy between header and body. Contact info crammed into the top. The letter is indistinguishable from a generic email printed out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </R>

          {/* 03 — ADVERTISEMENT */}
          <R>
            <div style={{ marginBottom: '80px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                <span className="ae-serif" style={{ fontStyle: 'italic', color: '#B08A4A', fontSize: '1rem' }}>03</span>
                <h3 className="ae-sans" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Print Advertisement</h3>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--mid)', marginLeft: 'auto' }}>A4 magazine · 1080×1080px social</span>
              </div>
              <p style={{ color: 'var(--mid)', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '36px', maxWidth: '600px' }}>
                Targeting school principals in education publications and LinkedIn. The ad needs to communicate premium quality instantly — principals decide in under three seconds whether to keep reading.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <div>
                  <div className="compare-label-good">✓ Good design</div>
                  <div style={{ background: '#001E3C', padding: '48px 44px', position: 'relative', overflow: 'hidden', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '40%', background: 'linear-gradient(135deg, transparent, rgba(176,138,74,0.08))' }} />
                    <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', width: '180px', height: '180px', borderRadius: '50%', border: '1px solid rgba(176,138,74,0.1)' }} />
                    <div style={{ position: 'relative' }}>
                      <p className="ae-sans" style={{ fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B08A4A', marginBottom: '20px' }}>AerEthos · Memory Publishing</p>
                      <h3 className="ae-serif" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 300, fontStyle: 'italic', color: '#CFC9B8', lineHeight: 1.2, maxWidth: '260px' }}>
                        The year your students will want to remember.
                      </h3>
                    </div>
                    <div style={{ position: 'relative' }}>
                      <div style={{ width: '28px', height: '1px', background: '#B08A4A', marginBottom: '14px' }} />
                      <p className="ae-sans" style={{ fontSize: '0.55rem', fontWeight: 300, color: 'rgba(207,201,184,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Premium yearbooks for Irish secondary schools</p>
                      <p className="ae-sans" style={{ fontSize: '0.6rem', fontWeight: 600, color: '#B08A4A', letterSpacing: '0.08em' }}>aerethos.com</p>
                    </div>
                  </div>
                  <div style={{ padding: '14px 16px', background: 'rgba(43,138,62,0.05)', borderLeft: '2px solid #2b8a3e' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--mid)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>Why it works:</strong> Dark navy commands attention on a white page. Italic Cormorant headline is elegant and emotionally resonant. Single URL call-to-action — no clutter. The circular geometry adds sophistication without noise.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="compare-label-bad">✗ Poor design</div>
                  <div style={{ background: '#fff', border: '2px solid #003399', padding: '28px', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ background: '#003399', padding: '12px', marginBottom: '16px', textAlign: 'center' }}>
                      <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>AERETHOS</p>
                    </div>
                    <div>
                      <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#003399', marginBottom: '8px' }}>GET YOUR SCHOOL YEARBOOK TODAY!</p>
                      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.72rem', color: '#333', lineHeight: 1.6, marginBottom: '12px' }}>We offer premium yearbook services for Irish schools. Contact us now for a FREE quote! Professional design and quality printing guaranteed.</p>
                      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.7rem', color: '#666' }}>✓ Professional Design &nbsp; ✓ Quality Print &nbsp; ✓ Fast Delivery</p>
                    </div>
                    <div style={{ background: '#ffcc00', padding: '10px', textAlign: 'center', marginTop: '16px' }}>
                      <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: '#000' }}>CALL NOW: 051 000 000 | aerethos.com</p>
                    </div>
                  </div>
                  <div style={{ padding: '14px 16px', background: 'rgba(192,57,43,0.05)', borderLeft: '2px solid #c0392b' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--mid)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>Why it fails:</strong> Screams cheap. Yellow CTA banner is the visual equivalent of shouting. Exclamation marks undermine the premium positioning. Checklist bullets are clichéd. The design contradicts the &quot;premium&quot; claim in the copy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </R>

          {/* 04 — OPENING HOURS */}
          <R>
            <div style={{ marginBottom: '80px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                <span className="ae-serif" style={{ fontStyle: 'italic', color: '#B08A4A', fontSize: '1rem' }}>04</span>
                <h3 className="ae-sans" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Opening Hours Poster</h3>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--mid)', marginLeft: 'auto' }}>A2 poster + A6 desk card</span>
              </div>
              <p style={{ color: 'var(--mid)', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '36px', maxWidth: '600px' }}>
                A studio hours display for the AerEthos workspace. When a school visits in person, this is one of the first things they see. It should communicate the same quality as the yearbooks.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <div>
                  <div className="compare-label-good">✓ Good design</div>
                  <div style={{ background: '#001E3C', padding: '52px 48px', position: 'relative', overflow: 'hidden', marginBottom: '16px' }}>
                    <div style={{ position: 'absolute', top: 0, left: '36px', width: '1px', height: '100%', background: 'rgba(176,138,74,0.1)' }} />
                    <p className="ae-sans" style={{ fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B08A4A', marginBottom: '36px' }}>AerEthos Studio · Waterford</p>
                    {[
                      { day: 'Mon — Fri', hours: '09:00 – 17:30' },
                      { day: 'Saturday', hours: '10:00 – 14:00' },
                      { day: 'Sunday', hours: 'Closed' },
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(176,138,74,0.1)', paddingBottom: '16px', marginBottom: '16px' }}>
                        <p className="ae-sans" style={{ fontSize: '0.6rem', fontWeight: 300, color: 'rgba(207,201,184,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{row.day}</p>
                        <p className="ae-serif" style={{ fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: row.hours === 'Closed' ? 'rgba(207,201,184,0.2)' : '#CFC9B8', fontWeight: 300 }}>{row.hours}</p>
                      </div>
                    ))}
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.48rem', color: 'rgba(176,138,74,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '8px' }}>By appointment outside these hours</p>
                  </div>
                  <div style={{ padding: '14px 16px', background: 'rgba(43,138,62,0.05)', borderLeft: '2px solid #2b8a3e' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--mid)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>Why it works:</strong> The hours become the typographic hero — Cormorant italic at large scale is genuinely beautiful. Navy background with gold accent is unmistakably on-brand. Quiet authority, nothing shouting.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="compare-label-bad">✗ Poor design</div>
                  <div style={{ background: '#fff', border: '1px solid #ccc', padding: '32px', marginBottom: '16px' }}>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#000', marginBottom: '4px', textAlign: 'center' }}>OPENING HOURS</p>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.7rem', color: '#666', textAlign: 'center', marginBottom: '20px' }}>AerEthos, Waterford</p>
                    <div style={{ border: '1px solid #ddd' }}>
                      {[
                        ['Monday', '9am - 5:30pm'],
                        ['Tuesday', '9am - 5:30pm'],
                        ['Wednesday', '9am - 5:30pm'],
                        ['Thursday', '9am - 5:30pm'],
                        ['Friday', '9am - 5:30pm'],
                        ['Saturday', '10am - 2pm'],
                        ['Sunday', 'Closed'],
                      ].map(([day, hrs], i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: i < 6 ? '1px solid #eee' : undefined }}>
                          <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.68rem', color: '#333' }}>{day}</p>
                          <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.68rem', color: '#333' }}>{hrs}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: '14px 16px', background: 'rgba(192,57,43,0.05)', borderLeft: '2px solid #c0392b' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--mid)', lineHeight: 1.75 }}>
                      <strong style={{ color: 'var(--ink)' }}>Why it fails:</strong> Looks like an Excel spreadsheet. Listing every weekday individually is redundant — Mon–Fri is cleaner. Zebra striping belongs in data tables, not brand materials. Zero personality, zero brand presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </R>

          {/* 05 — WEBSITE MOCKUP */}
          <R>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                <span className="ae-serif" style={{ fontStyle: 'italic', color: '#B08A4A', fontSize: '1rem' }}>05</span>
                <h3 className="ae-sans" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Website Mockup</h3>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', color: 'var(--mid)', marginLeft: 'auto' }}>Figma · Desktop + Mobile</span>
              </div>
              <p style={{ color: 'var(--mid)', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '36px', maxWidth: '600px' }}>
                A three-page Figma prototype — Home, Schools, Contact — reflecting the live aerethos.com visual language. Mobile-first breakpoints, interactive prototype exported for presentation.
              </p>

              <div style={{ border: '1px solid var(--faint)', overflow: 'hidden', maxWidth: '680px' }}>
                <div style={{ background: 'var(--bg2)', padding: '10px 16px', borderBottom: '1px solid var(--faint)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />)}
                  </div>
                  <div style={{ flex: 1, background: 'var(--bg)', border: '1px solid var(--faint)', borderRadius: '3px', padding: '4px 12px', marginLeft: '8px' }}>
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', color: 'var(--mid)' }}>aerethos.com</p>
                  </div>
                </div>
                <div style={{ background: '#001E3C', padding: '48px 52px', minHeight: '300px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', right: '-40px', bottom: '-40px', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(176,138,74,0.06)' }} />
                  <div style={{ position: 'absolute', right: '40px', bottom: '40px', width: '180px', height: '180px', borderRadius: '50%', border: '1px solid rgba(176,138,74,0.05)' }} />
                  <p className="ae-sans" style={{ fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B08A4A', marginBottom: '24px' }}>
                    AerEthos &nbsp;·&nbsp; Schools &nbsp;·&nbsp; Our Work &nbsp;·&nbsp; Contact
                  </p>
                  <p className="ae-serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, fontStyle: 'italic', color: '#CFC9B8', lineHeight: 1.1, maxWidth: '400px', marginBottom: '20px' }}>
                    Your school&apos;s story,<br />told properly.
                  </p>
                  <div style={{ width: '36px', height: '1px', background: '#B08A4A', marginBottom: '20px' }} />
                  <p className="ae-sans" style={{ fontSize: '0.62rem', fontWeight: 300, color: 'rgba(207,201,184,0.45)', maxWidth: '340px', lineHeight: 1.8, marginBottom: '32px' }}>
                    Premium yearbooks and memory publishing for Irish secondary schools. Backed by Enterprise Ireland.
                  </p>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ background: '#B08A4A', padding: '10px 20px' }}>
                      <p className="ae-sans" style={{ fontSize: '0.55rem', fontWeight: 600, color: '#001E3C', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get in touch</p>
                    </div>
                    <div style={{ border: '1px solid rgba(176,138,74,0.4)', padding: '10px 20px' }}>
                      <p className="ae-sans" style={{ fontSize: '0.55rem', fontWeight: 400, color: '#B08A4A', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Our work</p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', maxWidth: '680px' }}>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--mid)', letterSpacing: '0.08em' }}>
                  Homepage hero — mirrors live aerethos.com · Built in Figma with auto-layout components
                </p>
                
                  href="https://www.aerethos.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  style={{ flexShrink: 0 }}
                >
                  See the real thing → aerethos.com
                </a>
              </div>
            </div>
          </R>

        </div>
      </section>

      {/* ── SUMMARY ── */}
      <section style={{ background: '#001E3C', padding: '80px 0' }}>
        <div className="wrap">
          <R>
            <p style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B08A4A', marginBottom: '12px' }}>The Principle</p>
            <div style={{ width: '32px', height: '1px', background: '#B08A4A', marginBottom: '24px' }} />
            <h2 className="ae-serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 300, fontStyle: 'italic', color: '#CFC9B8', marginBottom: '24px', maxWidth: '640px', lineHeight: 1.2 }}>
              Design isn&apos;t decoration. It&apos;s the argument your brand makes before anyone reads a word.
            </h2>
            <p className="ae-serif" style={{ fontSize: '1rem', color: 'rgba(207,201,184,0.6)', lineHeight: 1.9, maxWidth: '540px' }}>
              Every comparison above proves the same thing — the wrong typeface, the wrong colour, the wrong hierarchy, and the viewer has already decided you&apos;re not worth their time. AerEthos needs to earn trust from a school principal in three seconds. These materials do that.
            </p>
          </R>
        </div>
      </section>

      <section style={{ padding: '60px 0', borderTop: '1px solid var(--faint)' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
          <Link href="/tasks" className="btn btn-outline">← Tasks</Link>
          <Link href="/review" className="btn">Graphic Review →</Link>
        </div>
      </section>
    </>
  )
}
