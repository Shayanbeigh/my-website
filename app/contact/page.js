'use client'

import { useState } from "react"
import Navbar from "../components/Navbar"
import PageHero from "../components/PageHero"
import Footer from "../components/Footer"
import FadeIn from "../components/FadeIn"
import { color } from "framer-motion"

export default function contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', message: '', service: '',
  })
  const [status, setStatus] = useState('idle') //idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setFormData ({ ...formData, [e.target.name]:
      e.target.value})
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('loading')

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'YOUR_WEB3FORMS_KEY',
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: formData.service,
        message: formData.message,
      }),
    })
    const data = await res.json()
    if (data.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg('Something went wrong.')
    }
  } catch (err) {
    setStatus('error')
    setErrorMsg('Network error. Please try again.')
  }
}

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    fontSize: '15px',
    color: '#1a1a1a',
    backgroundColor: '#fafafa',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  }

  return (
    <main>
      <Navbar />
      <PageHero
      label="contact"
      title="Let's start a conversation"
      subtitle="Tell us what you're building and we will figure out how we can help.
       No hard sell, just an honest chat."
       />

       <section style={{ padding: '80px 40px 120px',
        backgroundColor: '#fff' }}>
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '80px',
            alignItems: 'start',
          }}>
            {/* Left: Info */}
            <FadeIn direction="right">
              <div>
                <h2 style={{
                  fontSize: '28px', fontWeight: '800',
                  color: '#1a1a1a', letterSpacing: '-0.5px', marginBottom: '16px',
                }}>We'd love to hear from you</h2>
                <p style={{
                  fontSize: '16px', color: '#666', 
                  lineHieght: '1.8', marginBottom: '48px',
                }}>
                  Wether you need one senoir engineer or an entire team - reach out and we'll get back to you within one business day.
                </p>
                {[
                  { icon: '📧', label: 'Email', value: 'info@talentgenie.com' },
                  { icon: '🌎', label: 'Also in', value: 'Kashmir  -  Delhi' },
                  { icon: '⏰', label: 'Response time', value: 'Within 1 business day' }, 
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '16px', 
                    allignItems: 'flex-start', marginBottom: '28px',
                  }}>
                    <span style={{
                      fontSize: '20px', width: '44px', height: '44px', 
                      backgroundColor: '#f0f0f0', borderradius: '10px',
                      display: 'flex', allignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>{item.icon}</span>
                    <div>
                      <p style={{ fontSize: '12px', color: '#888', fontWeight: '600', marginBottom: '4px' }}>{item.label}</p>
                      <p style={{ fontSize: '15px', color: '#1a1a1a', fontWeight: '500' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
                </div>
            </FadeIn>

            {/* Right: Form */}
            <FadeIn direction="left">
              {status === 'success' ? (
                <div style={{
                  backgroundColor: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: '16px',
                  padding: '60px 40px',
                  textAlign: 'center',
                }}>
                  <span style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }}>✅</span>
                  <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#1a1a1a', marginBottom:'12px',}}>Message sent!</h3>
                  <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7' }}>Thanks for reaching out. We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{
                  backgroundColor: '#fafafa',
                  borderradius: '16px',
                  padding: '48px',
                  border: '1px solid #ebebeb',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr,', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '8px', display: 'block' }}>
                        Full Name *
                      </label>
                      <input
                       type="text" name= "name" requiredvalue={formData.name}
                       onChange={handleChange}
                       placeholder="Mohhamad"
                       style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#4f46e5'}
                      onBlur={e => e.target.style.borderColor = '#e0e0e0'}
                      />

                      </div>
                      <div>
                        <label style={{ fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '8px', display: 'block' }}>Work Email</label>
                     <input type="email" name="email" requiredvalue={formData.email}
                     onChange={handleChange}
                     placeholder="mohammad@talentgeniei.com"
                     style={inputStyle}
                     onFocus={e => e.target.style.borderColor = '#4f46e5'}
                     onBlur={e => e.target.style.bordercolor = '#e0e0e0'}
                     />
                     </div>
                  </div>
                   <div>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '8px', display: 'block' }}>Company</label>
                    <input 
                    type="text" name="company" value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#4f46e5'}
                    onBlur={e => e.target.style.borderColor = '#e0e0e0'}
                    />
                   </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '8px', display: 'block' }}>What are you looking for</label>
                  <select
                   name="service"
                   value={formData.service}
                   onChange={handleChange}
                   style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="">Select a service</option>
                    <option value="direct">Direct Placement</option>
                    <option value="offshore">Offshore Team</option>
                   <option value="advisory">Talent Advisory</option>
                   <option value="contract">Contract & Interm Staffing</option>
                   <option value="unsure">Not sure yet</option>
                   </select>
                  </div>
                  <div>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#444', marginBottom: '8px', display: 'block' }}>Tell us more * </label>
                    <textarea
                    name="message" required rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What are you building? What roles do you need? Whats's your timeline"
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6' }}
                    onFocus={e => e.target.style.borderColor = '#4f46e5'}
                    onBlur={e => e.target.style.borderColor = '#e0e0e0'}/>

                  </div>
                  {status === 'error' && (
                    <div style={{
                      backgroundColor: '#fff1f2',
                      border: '1px solid #fecdd3',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      fontSize: '14px',
                      color: '#be123c'

                    }}>
                      {errorMsg}
                    </div>
                  )}
                  <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    backgroundColor: status === 'loading' ? '#888' : '#1a1a1a',
                    color: '#fff',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    marginTop: '8px',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={e => { if(status !== 'loading') e.currentTarget.style.backgroundColor = '#4f46e5' }}
                  onMouseLeave={e => { if(status !== 'loading') e.currentTarget.style.backgroundColor = '#1a1a1a' }}>
                  {status === 'loading' ? 'sending...' : 'Send Message ->'}
                  </button>
                </form>

              
              )}
            </FadeIn>
          </div>
        </section>
        <Footer />
    </main>
  )
}