'use client'

import { motion } from 'framer-motion'

export default function PageHero({ label, title, subtitle }) {
  return (
    <section style={{
      paddingTop: '140px',
      paddingBottom: '80px',
      paddingLeft: '40px',
      paddingRight: '40px',
      background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)',
      textAlign: 'center',
    }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: '13px',
          fontWeight: '600',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#4f46e5',
          marginBottom: '16px',
        }}>
        {label}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: 'clamp(32px, 5vw, 60px)',
          fontWeight: '800',
          letterSpacing: '-2px',
          color: '#1a1a1a',
          lineHeight: '1.1',
          maxWidth: '700px',
          margin: '0 auto 20px',
        }}>
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        style={{
          fontSize: '18px',
          color: '#666',
          maxWidth: '520px',
          margin: '0 auto',
          lineHeight: '1.7',
        }}>
        {subtitle}
      </motion.p>
    </section>
  )
}