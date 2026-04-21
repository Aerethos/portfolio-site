'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/setu', label: 'My University' },
  { href: '/tasks', label: 'Tasks' },
  { href: '/project', label: 'Project' },
  { href: '/review', label: 'Review' },
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
