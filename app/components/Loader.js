'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#1a1a1a',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: '32px',
              fontWeight: '800',
              color: '#fff',
              letterSpacing: '-1px',
              fontFamily: 'Bricolage Grotesque, sans-serif',
            }}
          >
            my-website
          </motion.h1>

          {/* Loading bar */}
          <div style={{
            width: '160px',
            height: '2px',
            backgroundColor: '#333',
            borderRadius: '2px',
            overflow: 'hidden',
          }}>
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
              style={{
                height: '100%',
                backgroundColor: '#4f46e5',
                borderRadius: '2px',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}