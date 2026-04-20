import type { Metadata } from 'next'
import '../styles/globals.css'
import Nav from '@/components/Nav'
import Cursor from '@/components/Cursor'

export const metadata: Metadata = {
  title: 'Portfolio — Graphic Design & Web',
  description: 'Personal portfolio showcasing graphic design tasks, projects, and web development work.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>◈</text></svg>"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Nav />
        <main>{children}</main>
        <footer style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '40px',
          textAlign: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.12em',
          color: 'var(--mist)',
          textTransform: 'uppercase'
        }}>
          <span style={{ color: 'var(--rust)' }}>◈</span> &nbsp;
          Portfolio · Graphic Design & Web · {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  )
}
