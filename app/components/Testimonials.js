'use client'

import FadeIn from './FadeIn'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Rexruit Vertex didn\'t just send us engineers — they sent us the right engineers. First hire, perfect fit. We\'ve never looked back.',
      name: 'VP of Engineering',
      company: 'Series B SaaS Company, USA',
    },
    {
      quote: 'In a market where everyone promises speed, these guys delivered quality AND speed. Our offshore team feels like they\'ve always been part of us.',
      name: 'Co-Founder & CTO',
      company: 'FinTech Startup, Dubai',
    },
    {
      quote: 'Honest, sharp, and genuinely invested in our success. They pushed back when our brief was wrong and steered us toward better hires.',
      name: 'Head of Product',
      company: 'Scale-up, London',
    },
  ]

  return (
    <section style={{
      padding: '120px 40px',
      backgroundColor: '#f7f7f7',
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
            }}>Client Stories</p>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: '800',
              letterSpacing: '-1.5px',
              color: '#1a1a1a',
              lineHeight: '1.15',
            }}>
              Don't take our word for it
            </h2>
          </div>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '40px 36px',
                border: '1px solid #ebebeb',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                height: '100%',
              }}>
                <span style={{
                  fontSize: '48px',
                  lineHeight: '1',
                  color: '#4f46e5',
                  fontWeight: '800',
                  fontFamily: 'Georgia, serif',
                }}>"</span>

                <p style={{
                  fontSize: '16px',
                  color: '#444',
                  lineHeight: '1.75',
                  flexGrow: 1,
                  fontStyle: 'italic',
                }}>{t.quote}</p>

                <div style={{
                  borderTop: '1px solid #f0f0f0',
                  paddingTop: '20px',
                }}>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#1a1a1a',
                  }}>{t.name}</p>
                  <p style={{
                    fontSize: '13px',
                    color: '#888',
                    marginTop: '2px',
                  }}>{t.company}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}