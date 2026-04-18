import './globals.css'
import './components/responsive.css'
import Loader from './components/Loader'
import BackToTop from './components/BackToTop'

export const metadata = {
  title: 'Recruit Vertex | Global Tech Recruitment & Offshore Development Teams',
  description: 'Recruit Vertex helps companies hire exceptional tech talent globally. Specialising in direct placement, offshore team building, and contract staffing across the US, Europe, Middle East and India.',
  keywords: 'tech recruitment, global tech talent, offshore development team, hire engineers, IT recruitment, software developer recruitment',
  openGraph: {
    title: 'Recruit Vertex | Global Tech Recruitment',
    description: 'Connecting exceptional tech talent with ambitious companies across the globe.',
    url: 'https://recruitvertex.com',
    siteName: 'Recruit Vertex',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="gZzWApKauN5jGYrNtGJIHXqGWZcAOFnHkyW_JroZUag" />
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