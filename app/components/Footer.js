'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const handleSubscribe = async () => {
  if (!email || !email.includes('@')) {
    setStatus('error')
    return
  }
  setStatus('loading')
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'YOUR_WEB3FORMS_KEY',
        email: email,
        subject: 'New newsletter subscriber - my-website',
        message: 'New subscriber: ' + email,
      }),
    })
    const data = await res.json()
    if (data.success) {
      setEmail('')
      setStatus('success')
    } else {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  } catch (err) {
    setStatus('error')
    setTimeout(() => setStatus('idle'), 3000)
  }
}
  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: '#fff',
      padding: '80px 40px 40px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div className="footer-top" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '60px',
          marginBottom: '80px',
        }}>

          <div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '800',
              letterSpacing: '-0.5px',
              marginBottom: '16px',
            }}>Talent Genie</h3>
            <p style={{
              fontSize: '14px',
              color: '#888',
              lineHeight: '1.7',
              maxWidth: '220px',
            }}>
              Connecting exceptional talent with ambitious companies across the globe.
            </p>
          </div>

          <div>
            <h4 style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#555',
              marginBottom: '20px',
            }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Solutions', 'About', 'Insights', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} style={{
                  color: '#aaa',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#aaa'}
                >{link}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#555',
              marginBottom: '20px',
            }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="mailto:hello@my-website.co" style={{
                color: '#aaa', textDecoration: 'none', fontSize: '14px'
              }}>hello@my-website.co</a>
              <p style={{ color: '#aaa', fontSize: '14px', margin: 0 }}>New Delhi, India</p>
              <p style={{ color: '#aaa', fontSize: '14px', margin: 0 }}>New York · London · Dubai</p>
              <a href="https://linkedin.com/in/shayan-beigh-74781027a" target="_blank" style={{
                color: '#4f46e5', textDecoration: 'none', fontSize: '14px'
              }}>LinkedIn →</a>
            </div>
          </div>

          {/* Newsletter */}
<div>
  <h4 style={{
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#555',
    marginBottom: '20px',
  }}>Stay in the Loop</h4>
  <p style={{
    fontSize: '14px',
    color: '#888',
    marginBottom: '16px',
    lineHeight: '1.6',
  }}>
    Hiring insights, market trends, and team-building tips — straight to your inbox.
  </p>

  {status === 'success' ? (
    <div style={{
      backgroundColor: '#14532d',
      borderRadius: '8px',
      padding: '12px 16px',
      fontSize: '14px',
      color: '#86efac',
      fontWeight: '500',
    }}>
      ✓ You're subscribed!
    </div>
  ) : (
    <div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={e => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault()
              handleSubscribe()
            }
          }}
          style={{
            flex: 1,
            padding: '10px 14px',
            borderRadius: '6px',
            border: status === 'error' ? '1px solid #ef4444' : '1px solid #333',
            backgroundColor: '#2a2a2a',
            color: '#fff',
            fontSize: '13px',
            outline: 'none',
            fontFamily: 'inherit',
          }}
        />
        <button
          onClick={e => {
            e.preventDefault()
            handleSubscribe()
          }}
          disabled={status === 'loading'}
          style={{
            backgroundColor: status === 'loading' ? '#555' : '#4f46e5',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s',
            whiteSpace: 'nowrap',
          }}>
          {status === 'loading' ? '...' : '→'}
        </button>
      </div>
      {status === 'error' && (
        <p style={{
          fontSize: '12px',
          color: '#ef4444',
          marginTop: '8px',
          margin: '8px 0 0',
        }}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  )}
</div>

        </div>

        <div className="footer-bottom" style={{
          borderTop: '1px solid #2a2a2a',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>
            © 2025 Talent Genie. Built for teams that mean business.
          </p>
          <a href="#" style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}>
            Privacy Policy
          </a>
        </div>

      </div>
    </footer>
  )
}