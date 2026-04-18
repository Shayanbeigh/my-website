import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'
import PageTransition from '../components/PageTransition'
import Link from 'next/link'

export const metadata = {
  title: 'Solutions | Recruit Vertex',
  description: 'Direct placement, offshore team building, contract staffing and talent advisory — built around your goals.',
} 

const solutions = [
  {
    icon: '🎯',
    title: 'Direct Placement',
    description: 'We find, vet, and deliver exceptional engineers directly into your team as full-time hires. No temp arrangements, no middlemen — just the right person, permanently.',
    points: ['End-to-end candidate sourcing', 'Technical and cultural vetting', 'Salary benchmarking & offer support', '90-day placement guarantee'],
  },
  {
    icon: '🌍',
    title: 'Offshore Team Building',
    description: 'We assemble and manage dedicated development teams in India and beyond — teams that operate as a true extension of your company, not an outsourced vendor.',
    points: ['Team design and role definition', 'Full recruitment and onboarding', 'Ongoing performance management', 'Payroll and compliance handled'],
  },
  {
    icon: '⚡',
    title: 'Contract & Interim Staffing',
    description: 'Need to move fast on a project or cover a critical gap? We place experienced engineers on short-term contracts — ready to contribute from day one.',
    points: ['Rapid deployment in 1-2 weeks', 'Flexible contract lengths', 'Senior and specialist profiles', 'Option to convert to permanent'],
  },
  {
    icon: '🧠',
    title: 'Talent Advisory',
    description: 'Not sure how to structure your engineering org or where to hire from? We advise leadership teams on hiring strategy, compensation, and team architecture.',
    points: ['Org design consultation', 'Market compensation data', 'Hiring process audit', 'Fractional HR & TA support'],
  },
]

export default function Solutions() {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <PageHero
          label="Our Solutions"
          title="Every way we help you hire better"
          subtitle="From single placements to full offshore teams — we have a solution built around your stage, budget, and goals."
        />

        <section style={{ padding: '100px 40px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {solutions.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '48px',
                  alignItems: 'start',
                  padding: '48px',
                  borderRadius: '16px',
                  backgroundColor: '#fafafa',
                  border: '1px solid #ebebeb',
                }}>
                  <div>
                    <span style={{ fontSize: '36px', marginBottom: '16px', display: 'block' }}>{s.icon}</span>
                    <h2 style={{
                      fontSize: '28px',
                      fontWeight: '800',
                      color: '#1a1a1a',
                      letterSpacing: '-0.5px',
                      marginBottom: '16px',
                    }}>{s.title}</h2>
                    <p style={{
                      fontSize: '16px',
                      color: '#666',
                      lineHeight: '1.8',
                    }}>{s.description}</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: '#4f46e5',
                      marginBottom: '8px',
                    }}>What is included</p>
                    {s.points.map((point, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: '#4f46e5',
                          color: '#fff',
                          fontSize: '11px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          fontWeight: '700',
                        }}>✓</span>
                        <p style={{ fontSize: '15px', color: '#444', margin: 0 }}>{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <FadeIn>
          <section style={{
            margin: '0 40px 100px',
            borderRadius: '20px',
            backgroundColor: '#1a1a1a',
            padding: '80px 40px',
            textAlign: 'center',
            maxWidth: '1100px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 40px)',
              fontWeight: '800',
              color: '#fff',
              letterSpacing: '-1px',
              marginBottom: '16px',
            }}>Not sure which solution fits?</h2>
            <p style={{
              fontSize: '16px',
              color: '#888',
              marginBottom: '36px',
              maxWidth: '440px',
              margin: '0 auto 36px',
              lineHeight: '1.7',
            }}>
              Let us talk. We will figure out the right approach for your team together — no commitment required.
            </p>
            <Link href="/contact" style={{
              backgroundColor: '#4f46e5',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '600',
            }}>
              Book a Free Call →
            </Link>
          </section>
        </FadeIn>

        <Footer />
      </main>
    </PageTransition>
  )
}