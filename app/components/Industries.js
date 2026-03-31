'use client'

import FadeIn from './FadeIn'

export default function Industries() {
  const industries = [
    { icon: '🏦', name: 'FinTech', desc: 'Secure, compliant, high-performance systems for the future of finance.' },
    { icon: '💻', name: 'SaaS & Product', desc: 'Engineering teams that ship fast, iterate smart, and scale clean.' },
    { icon: '⚡', name: 'Energy & Climate', desc: 'Tech talent powering the transition to a smarter, greener world.' },
    { icon: '🚚', name: 'Logistics & Supply Chain', desc: 'Systems that keep the world moving — built by people who get it.' },
    { icon: '🏥', name: 'HealthTech', desc: 'Precision engineering for products where quality is non-negotiable.' },
    { icon: '🏗️', name: 'Infrastructure', desc: 'Long-term technical expertise for complex, high-stakes environments.' },
  ]

  return (
    <section style={{
      padding: '120px 40px',
      backgroundColor: '#fff',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#4f46e5',
              marginBottom: '16px',
            }}>Industries</p>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: '800',
              letterSpacing: '-1.5px',
              color: '#1a1a1a',
              lineHeight: '1.15',
            }}>
              Deep expertise across the sectors that matter
            </h2>
          </div>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {industries.map((ind, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid #ebebeb',
                backgroundColor: '#fafafa',
                transition: 'all 0.2s',
                cursor: 'default',
                height: '100%',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#1a1a1a'
                  e.currentTarget.style.borderColor = '#1a1a1a'
                  e.currentTarget.querySelectorAll('p, h3').forEach(el => {
                    el.style.color = el.tagName === 'H3' ? '#fff' : '#aaa'
                  })
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#fafafa'
                  e.currentTarget.style.borderColor = '#ebebeb'
                  e.currentTarget.querySelectorAll('p, h3').forEach(el => {
                    el.style.color = el.tagName === 'H3' ? '#1a1a1a' : '#666'
                  })
                }}
              >
                <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>{ind.icon}</span>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  marginBottom: '8px',
                  transition: 'color 0.2s',
                }}>{ind.name}</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.6',
                  transition: 'color 0.2s',
                }}>{ind.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}