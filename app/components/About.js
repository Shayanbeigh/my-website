'use client'

import FadeIn from './FadeIn'

export default function About() {
  return (
    <section id="about" style={{
      padding: '120px 40px',
      backgroundColor: '#f7f7f7',
    }}>
      <FadeIn>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
          alignItems: 'center',
        }}>

          <div>
            <p style={{
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#4f46e5',
              marginBottom: '16px',
            }}>Who We Are</p>

            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: '800',
              letterSpacing: '-1.5px',
              color: '#1a1a1a',
              lineHeight: '1.15',
              marginBottom: '24px',
            }}>
              We exist to make great hiring feel effortless
            </h2>

            <p style={{
              fontSize: '16px',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '16px',
            }}>
              Recruit Vertex was founded on a simple belief — that finding the right
              engineer shouldn't take months, cost a fortune, or feel like a gamble.
              We've built a smarter way.
            </p>

            <p style={{
              fontSize: '16px',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '36px',
            }}>
              Whether you're a startup making your first technical hire or an
              enterprise scaling across continents, we bring the same obsessive
              attention to fit, speed, and quality to every engagement.
            </p>

            <a href="/about" style={{
              display: 'inline-block',
              backgroundColor: '#1a1a1a',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '600',
            }}>
              Our Full Story →
            </a>
          </div>

          <div className="about-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}>
            {[
              { number: '6+', label: 'Years in the Industry', bg: '#1a1a1a', color: '#fff' },
              { number: '300+', label: 'Successful Placements', bg: '#4f46e5', color: '#fff' },
              { number: '10+', label: 'Countries Covered', bg: '#f0f0f0', color: '#1a1a1a' },
              { number: '96%', label: 'Client Satisfaction Rate', bg: '#f0f0f0', color: '#1a1a1a' },
            ].map((stat, i) => (
              <div className="about-stat" key={i} style={{
                backgroundColor: stat.bg,
                borderRadius: '16px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                <span style={{
                  fontSize: '36px',
                  fontWeight: '800',
                  color: stat.color,
                  letterSpacing: '-1px',
                }}>{stat.number}</span>
                <span style={{
                  fontSize: '13px',
                  color: stat.color,
                  opacity: 0.7,
                  fontWeight: '500',
                }}>{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </FadeIn>
    </section>
  )
}