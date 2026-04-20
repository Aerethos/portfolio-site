import type { Metadata } from 'next'
import '../styles/globals.css'
import Nav from '@/components/Nav'
import Cursor from '@/components/Cursor'

export const metadata: Metadata = {
  title: 'Nathan Sfendji',
  description: 'Personal site — Nathan Sfendji. Entrepreneur, student, Erasmus Budapest 2025.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>N</text></svg>"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Nav />
        <main>{children}</main>
        <footer>
          <span>Nathan Sfendji</span>
          <p>Built with Next.js · Deployed on Vercel · <span>Erasmus BIP Budapest 2025</span></p>
        </footer>
      </body>
    </html>
  )
}
