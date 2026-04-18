'use client'

import FadeIn from './FadeIn'
import Link from 'next/link'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Tell us what you need',
      desc: 'Book a free 30-minute discovery call. We learn about your team, your culture, the role, and what good looks like for you. No forms, no fluff — just an honest conversation.',
      time: 'Day 1',
    },
    {
      number: '02',
      title: 'We go to work',
      desc: 'Our senior talent partners tap our global network, actively headhunt, and personally screen every candidate — technically and culturally. You only see people we would hire ourselves.',
      time: 'Days 2–10',
    },
    {
      number: '03',
      title: 'You meet the shortlist',
      desc: 'We send you a shortlist of 3 candidates maximum — each with a detailed brief explaining why we think they are right for you. No noise, no filler.',
      time: 'Day 11–14',
    },
    {
      number: '04',
      title: 'Hire with confidence',
      desc: 'We handle offer negotiation, references, and onboarding support. Every direct placement comes with a 90-day guarantee. If it does not work out, we start again at no cost.',
      time: 'Week 3–4',
    },
  ]

  return (
    <section style={{
      padding: '120px 40px',
      backgroundColor: '#ffffff',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p style={{
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#4f46e5',
              marginBottom: '16px',
            }}>The Process</p>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: '800',
              letterSpacing: '-1.5px',
              color: '#fff',
              lineHeight: '1.15',
              marginBottom: '16px',
            }}>
              From brief to hire in under 4 weeks
            </h2>
            <p style={{
              fontSize: '16px 4vw 48px',
              color: '#1A1A1A',
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}>
              A process built for speed without sacrificing the quality of every hire.
            </p>
          </div>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          overflow: 'hidden',
        }}>
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{
                padding: '40px 32px',
                backgroundColor: '#1a1a1a',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                height: '100%',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#4f46e5',
                    letterSpacing: '1px',
                  }}>{step.number}</span>
                  <span style={{
                    fontSize: '11px',
                    color: '#555',
                    fontWeight: '600',
                    backgroundColor: '#2a2a2a',
                    padding: '3px 10px',
                    borderRadius: '999px',
                  }}>{step.time}</span>
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#fff',
                  lineHeight: '1.3',
                  letterSpacing: '-0.3px',
                }}>{step.title}</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#888',
                  lineHeight: '1.7',
                  flexGrow: 1,
                }}>{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div style={{
            textAlign: 'center',
            marginTop: '56px',
          }}>
            <Link href="/contact" style={{
              backgroundColor: '#4f46e5',
              color: '#fff',
              padding: '16px 36px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '600',
              display: 'inline-block',
            }}>
              Book Your Free Discovery Call →
            </Link>
            <p style={{
              fontSize: '13px',
              color: '#1A1A1A',
              marginTop: '16px',
            }}>No commitment. No sales pitch. Just an honest conversation.</p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}