'use client'

import Link from 'next/link'
import FadeIn from './FadeIn'

export default function Services() {
  const services = [
  {
    icon: '🎯',
    title: 'Precision Hiring',
    subtitle: 'Quality over quantity, always',
    description: 'We don\'t flood your inbox with CVs. We take time to understand your team, your culture, and your goals — then deliver candidates who are genuinely the right fit.',
    cta: 'Talk to Our Team',
    href: '/contact',
  },
  {
    icon: '🌍',
    title: 'Global Reach',
    subtitle: 'Talent without boundaries',
    description: 'From Bangalore to Berlin, Dubai to Delaware — our network spans 20+ countries. We find exceptional engineers wherever they are and bring them to where you need them.',
    cta: 'Explore Our Network',
    href: '/about',
  },
  {
    icon: '⚙️',
    title: 'Managed Teams',
    subtitle: 'Your team, fully handled',
    description: 'Need an entire squad? We build, manage, and scale dedicated offshore development teams that operate as a seamless extension of your business — not a vendor.',
    cta: 'See Team Solutions',
    href: '/solutions',
  },
]

  return (
    <section id="solutions" style={{ padding: '120px 40px', backgroundColor: '#fff' }}>

      <FadeIn>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <p style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#4f46e5',
            marginBottom: '16px',
          }}>What We Do</p>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: '800',
            letterSpacing: '-1.5px',
            color: '#1a1a1a',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.15',
          }}>
            Three ways we help your business grow
          </h2>
        </div>
      </FadeIn>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {services.map((s, i) => (
          <FadeIn key={i} delay={i * 0.15} direction="up">
            <div style={{
              backgroundColor: i === 1 ? '#1a1a1a' : '#fafafa',
              border: `1px solid ${i === 1 ? '#1a1a1a' : '#ebebeb'}`,
              borderRadius: '16px',
              padding: '40px 36px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              height: '100%',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span style={{ fontSize: '32px' }}>{s.icon}</span>
              <div>
                <p style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: i === 1 ? '#888' : '#4f46e5',
                  marginBottom: '8px',
                }}>{s.subtitle}</p>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: i === 1 ? '#fff' : '#1a1a1a',
                  letterSpacing: '-0.5px',
                }}>{s.title}</h3>
              </div>
              <p style={{
                fontSize: '15px',
                color: i === 1 ? '#aaa' : '#666',
                lineHeight: '1.7',
                flexGrow: 1,
              }}>{s.description}</p>
              <Link href={s.href} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                fontWeight: '600',
                color: i === 1 ? '#fff' : '#1a1a1a',
                textDecoration: 'none',
                marginTop: '8px',
              }}>
                {s.cta} →
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}