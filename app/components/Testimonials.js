'use client'

import FadeIn from './FadeIn'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'We had been burned by two agencies before Recruit Vertex. The difference was immediately obvious — they asked better questions, pushed back on our brief when it was wrong, and delivered three genuinely strong candidates in 11 days. We hired one. She is still with us 14 months later.',
      name: 'CTO',
      company: 'Series B FinTech',
      location: 'San Francisco, USA',
      result: 'Hired in 11 days',
    },
    {
      quote: 'Building an offshore team felt risky until we worked with Recruit Vertex. They structured the whole thing — roles, onboarding, tooling — not just recruitment. Six months in, our Delhi team ships faster than anyone expected. Genuinely impressed.',
      name: 'Co-Founder',
      company: 'SaaS Startup',
      location: 'London, UK',
      result: 'Team of 6 placed in 5 weeks',
    },
    {
      quote: 'What stood out was the honesty. They told us our salary range was too low for the profile we wanted, gave us market data to back it up, and helped us restructure the offer. That level of straight talk is rare in this industry.',
      name: 'VP of Engineering',
      company: 'Scale-up',
      location: 'Dubai, UAE',
      result: '3 senior engineers placed',
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
            <p style={{
              fontSize: '16px',
              color: '#888',
              marginTop: '16px',
              maxWidth: '480px',
              margin: '16px auto 0',
              lineHeight: '1.6',
            }}>
              Our work often involves sensitive hiring decisions — most clients prefer to remain anonymous. These are their words, shared with permission.
            </p>
          </div>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
                gap: '20px',
                height: '100%',
              }}>

                {/* Result badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#ede9fe',
                  color: '#4f46e5',
                  fontSize: '12px',
                  fontWeight: '700',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  alignSelf: 'flex-start',
                }}>
                  ✓ {t.result}
                </div>

                <span style={{
                  fontSize: '40px',
                  lineHeight: '1',
                  color: '#4f46e5',
                  fontWeight: '800',
                  fontFamily: 'Georgia, serif',
                }}>"</span>

                <p style={{
                  fontSize: '15px',
                  color: '#444',
                  lineHeight: '1.8',
                  flexGrow: 1,
                  fontStyle: 'italic',
                  marginTop: '-12px',
                }}>{t.quote}</p>

                <div style={{
                  borderTop: '1px solid #f0f0f0',
                  paddingTop: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}>
                  <div>
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
                  <p style={{
                    fontSize: '12px',
                    color: '#aaa',
                    fontWeight: '500',
                  }}>{t.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}