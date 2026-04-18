import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'
import PageTransition from '../components/PageTransition'

export const metadata = {
  title: 'About Us | Recruit Vertex',
  description: 'Learn about Recruit Vertex — a global tech recruitment firm built to make great hiring feel effortless.',
}

const values = [
  { icon: '🎯', title: 'Quality over volume', desc: 'We would rather send you three great candidates than thirty average ones. Every profile we share has been personally vetted.' },
  { icon: '🤝', title: 'Radical honesty', desc: 'If your brief is off, we will tell you. If a candidate is not quite right, we will say so. No fluff, no false promises.' },
  { icon: '⚡', title: 'Speed without shortcuts', desc: 'We move fast because we have built the systems to do so — not because we are cutting corners on quality.' },
  { icon: '🌍', title: 'Globally minded', desc: 'We believe great engineers exist everywhere. Geography should not limit who builds your product.' },
]

const team = [
  { name: 'Shayan Beigh', role: 'Founder & CEO', location: 'New Delhi, India' },
  { name: 'Sara Al Mansoori', role: 'Head of Client Success', location: 'Dubai, UAE' },
  { name: 'James Whitfield', role: 'Lead Talent Partner', location: 'London, UK' },
  { name: 'Priya Nair', role: 'Engineering Recruiter', location: 'Bangalore, India' },
]

export default function About() {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <PageHero
          label="About Us"
          title="We are on a mission to make great hiring feel easy"
          subtitle="A team of recruiters, operators, and engineers who got tired of how broken tech hiring was — so we built something better."
        />

        <section style={{ padding: '100px 40px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <FadeIn>
              <h2 style={{
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: '800',
                color: '#1a1a1a',
                letterSpacing: '-1px',
                marginBottom: '24px',
              }}>How it started</h2>
              <p style={{ fontSize: '17px', color: '#555', lineHeight: '1.9', marginBottom: '20px' }}>
                Recruit Vertex was born out of frustration. Our founders had spent years on both sides
                of the hiring table — as engineers who had been through awful recruitment processes,
                and as operators who could not find the right talent fast enough. The market was full
                of agencies that treated people like transactions.
              </p>
              <p style={{ fontSize: '17px', color: '#555', lineHeight: '1.9', marginBottom: '20px' }}>
                So we built something different. A firm that obsesses over fit, not just availability.
                That is honest even when it costs us a deal. That treats candidates with the same care
                as clients — because great hiring only works when both sides win.
              </p>
              <p style={{ fontSize: '17px', color: '#555', lineHeight: '1.9' }}>
                Today we work with companies across the US, Europe, and the Middle East, placing
                engineers and building teams from our base in New Delhi with partners in Dubai and
                London. The mission has not changed — make great hiring feel effortless.
              </p>
            </FadeIn>
          </div>
        </section>

        <section style={{ padding: '100px 40px', backgroundColor: '#f7f7f7' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <FadeIn>
              <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <p style={{
                  fontSize: '13px', fontWeight: '600', letterSpacing: '2px',
                  textTransform: 'uppercase', color: '#4f46e5', marginBottom: '16px',
                }}>Our Values</p>
                <h2 style={{
                  fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: '800',
                  color: '#1a1a1a', letterSpacing: '-1px',
                }}>What we stand for</h2>
              </div>
            </FadeIn>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}>
              {values.map((v, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div style={{
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    padding: '36px',
                    border: '1px solid #ebebeb',
                    height: '100%',
                  }}>
                    <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block' }}>{v.icon}</span>
                    <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1a1a1a', marginBottom: '12px' }}>{v.title}</h3>
                    <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>{v.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '100px 40px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <FadeIn>
              <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <p style={{
                  fontSize: '13px', fontWeight: '600', letterSpacing: '2px',
                  textTransform: 'uppercase', color: '#4f46e5', marginBottom: '16px',
                }}>The Team</p>
                <h2 style={{
                  fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: '800',
                  color: '#1a1a1a', letterSpacing: '-1px',
                }}>The people behind Recruit Vertex</h2>
              </div>
            </FadeIn>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
            }}>
              {team.map((member, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div style={{
                    backgroundColor: '#fafafa',
                    borderRadius: '16px',
                    padding: '36px',
                    border: '1px solid #ebebeb',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: '#4f46e5',
                      color: '#fff',
                      fontSize: '22px',
                      fontWeight: '800',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}>
                      {member.name.charAt(0)}
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '6px' }}>{member.name}</h3>
                    <p style={{ fontSize: '14px', color: '#4f46e5', fontWeight: '600', marginBottom: '6px' }}>{member.role}</p>
                    <p style={{ fontSize: '13px', color: '#888' }}>{member.location}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}