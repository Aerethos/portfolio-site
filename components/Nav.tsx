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

  const isActive = (href: string) =>
    href === '/' ? path === '/' : path.startsWith(href)

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">Nathan <em>Sfendji</em></Link>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}>
            <Link
              href={l.href}
              style={{
                color: isActive(l.href) ? 'var(--accent)' : undefined,
                borderBottom: isActive(l.href) ? '1px solid var(--accent)' : '1px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
