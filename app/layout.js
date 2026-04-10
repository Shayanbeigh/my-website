import './globals.css'
import './components/responsive.css'
import Loader from './components/Loader'
import BackToTop from './components/BackToTop'

export const metadata = {
  title: 'Recruit Vertex | Global Tech Talent Partners',
  description: 'Connecting exceptional tech talent with ambitious companies across the globe.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Bricolage+Grotesque:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Loader />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}