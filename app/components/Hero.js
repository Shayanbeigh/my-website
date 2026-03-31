'use client'

import Link from 'next/link'
import { motion, px } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '0 24px',
      background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)',
    }}>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          display: 'inline-block',
          backgroundColor: '#f0f0f0',
          border: '1px solid #e0e0e0',
          borderRadius: '999px',
          padding: '6px 16px',
          fontSize: '13px',
          fontWeight: '600',
          color: '#555',
          marginBottom: '28px',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
        }}>
        Global Talent Partners
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: '800',
          lineHeight: '1.1',
          letterSpacing: '-2px',
          color: '#1a1a1a',
          maxWidth: '800px',
          marginBottom: '24px',
        }}>
        The right talent.{' '}
        <span style={{ color: '#4f46e5' }}>The right mission.</span>
        {' '}The right time.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        style={{
          fontSize: '18px',
          color: '#666',
          maxWidth: '560px',
          lineHeight: '1.7',
          marginBottom: '40px',
        }}>
        Talent Ginie connects ambitious companies with exceptional talent across the globe —
        faster, smarter, and without the usual headaches.
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        <Link href="    contact" style={{
          backgroundColor: '#1a1a1a',
          color: '#fff',
          padding: '14px 32px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '15px',
          fontWeight: '600',
        }}>
          Start Hiring Smarter
        </Link>

        <Link href="#about" style={{
          backgroundColor: 'transparent',
          color: '#1a1a1a',
          padding: '14px 32px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '15px',
          fontWeight: '600',
          border: '1px solid #ddd',
        }}>
          See How It Works
        </Link>
      </motion.div>

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        style={{
          display: 'flex',
          gap: '60px',
          marginTop: '80px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {[
          { number: '300+', label: 'Placements Worldwide' },
          { number: '96%', label: 'Client Satisfaction' },
          { number: '10+', label: 'Countries Served' },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '36px',
              fontWeight: '800',
              color: '#1a1a1a',
              letterSpacing: '-1px',
            }}>
              {stat.number}
            </div>
            <div style={{
              fontSize: '14px',
              color: '#888',
              marginTop: '4px',
              fontWeight: '500',
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

    </section>
  )
}