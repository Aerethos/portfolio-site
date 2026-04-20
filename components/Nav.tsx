'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/tasks', label: 'Tasks' },
  { href: '/project', label: 'Project' },
  { href: '/review', label: 'Review' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const path = usePathname()

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        Portfolio <span>◈</span>
      </Link>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}>
            <Link
              href={l.href}
              style={{ color: path === l.href ? 'var(--paper)' : undefined }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
