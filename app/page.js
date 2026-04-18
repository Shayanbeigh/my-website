import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Industries />
        <Testimonials />
         <HowItWorks />
        <Footer />
      </main>
    </PageTransition>
  )
}