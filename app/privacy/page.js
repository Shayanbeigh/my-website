import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'

export default function Privacy() {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <section style={{
          paddingTop: '140px',
          paddingBottom: '120px',
          paddingLeft: '40px',
          paddingRight: '40px',
          backgroundColor: '#fff',
        }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: '40px',
              fontWeight: '800',
              color: '#1a1a1a',
              letterSpacing: '-1.5px',
              marginBottom: '8px',
            }}>Privacy Policy</h1>
            <p style={{ fontSize: '14px', color: '#888', marginBottom: '48px' }}>
              Last updated: January 2025
            </p>

            {[
              {
                title: 'Information we collect',
                body: 'We collect information you provide directly to us, such as your name, email address, company name, and any messages you send through our contact form or newsletter subscription.',
              },
              {
                title: 'How we use your information',
                body: 'We use the information we collect to respond to your enquiries, send you relevant hiring insights if you have subscribed, and improve our services. We do not sell your personal data to third parties under any circumstances.',
              },
              {
                title: 'Data retention',
                body: 'We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, including responding to your enquiries and complying with legal obligations.',
              },
              {
                title: 'Your rights',
                body: 'You have the right to access, correct, or delete your personal data at any time. To exercise these rights, please contact us at hello@recruitvertex.co and we will respond within 5 business days.',
              },
              {
                title: 'Cookies',
                body: 'Our website uses minimal cookies necessary for basic functionality. We do not use tracking cookies or sell browsing data to advertisers.',
              },
              {
                title: 'Contact us',
                body: 'If you have any questions about this Privacy Policy, please contact us at hello@recruitvertex.co.',
              },
            ].map((section, i) => (
              <div key={i} style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  marginBottom: '12px',
                  letterSpacing: '-0.3px',
                }}>{section.title}</h2>
                <p style={{
                  fontSize: '16px',
                  color: '#555',
                  lineHeight: '1.8',
                }}>{section.body}</p>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </PageTransition>
  )
}