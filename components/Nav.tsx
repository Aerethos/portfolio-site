'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/', label: 'Tasks' },
  { href: '/', label: 'Project' },
  { href: '/', label: 'Review' },
]

export default function Nav() {
  const path = usePathname()
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">Nathan <em>Sfendji</em></Link>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} style={path === l.href ? { color: 'var(--accent)' } : {}}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
