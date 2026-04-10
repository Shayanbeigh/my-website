'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '../components/responsive.css'

const navLinks = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #f0f0f0',
        zIndex: 1000,
        padding: '0 40px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
<Link href="/" style={{
  fontSize: '22px',
  fontWeight: '800',
  color: '#1a1a1a',
  textDecoration: 'none',
  letterSpacing: '-0.5px',
  fontFamily: 'Bricolage Grotesque, sans-serif',
}}>
  Recruit Vertex
</Link>

        {/* Desktop Links */}
        <div className="nav-links" style={{
          display: 'flex',
          gap: '36px',
          alignItems: 'center',
        }}>
          {navLinks.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  color: isActive ? '#4f46e5' : '#555',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: isActive ? '700' : '500',
                  borderBottom: isActive ? '2px solid #4f46e5' : '2px solid transparent',
                  paddingBottom: '2px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#000' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#555' }}
              >
                {item.label}
              </Link>
            )
          })}

          <Link href="/contact" style={{
            backgroundColor: '#1a1a1a',
            color: '#fff',
            padding: '10px 22px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'background-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#4f46e5'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1a1a1a'}
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="nav-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
          }}>
          <span style={{
            width: '24px', height: '2px', backgroundColor: '#1a1a1a',
            borderRadius: '2px', transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
          }} />
          <span style={{
            width: '24px', height: '2px', backgroundColor: '#1a1a1a',
            borderRadius: '2px', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s',
          }} />
          <span style={{
            width: '24px', height: '2px', backgroundColor: '#1a1a1a',
            borderRadius: '2px', transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu" style={{
        display: 'none',
        position: 'fixed',
        top: '70px',
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderBottom: '1px solid #f0f0f0',
        flexDirection: 'column',
        padding: '24px 40px',
        gap: '20px',
        zIndex: 999,
        transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
        transition: 'transform 0.3s ease',
      }}>
        {navLinks.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: isActive ? '#4f46e5' : '#1a1a1a',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: isActive ? '700' : '600',
              }}>
              {item.label}
            </Link>
          )
        })}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          style={{
            backgroundColor: '#1a1a1a',
            color: '#fff',
            padding: '14px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '600',
            textAlign: 'center',
            marginTop: '8px',
          }}>
          Get Started
        </Link>
      </div>
    </>
  )
}