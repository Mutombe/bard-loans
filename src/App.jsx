import { Toaster } from 'sonner'
import { ThemeProvider } from './ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import SectionDivider from './components/SectionDivider'
import Offerings from './components/Offerings'
import LoanCalculator from './components/LoanCalculator'
import Requirements from './components/Requirements'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-navy transition-colors duration-300">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              background: '#312F4D',
              color: '#fff',
              border: '1px solid rgba(238, 125, 54, 0.3)',
            },
          }}
        />
        <Navbar />
        <Hero />
        <TrustBar />
        <About />
        <SectionDivider
          pattern="diamond"
          height={80}
          fromColor="white"
          toColor="pearl"
          fromColorDark="navy"
          toColorDark="navy-light"
        />
        <Offerings />
        <LoanCalculator />
        <SectionDivider
          pattern="logoGrid"
          height={80}
          fromColor="white"
          toColor="pearl"
          fromColorDark="navy"
          toColorDark="navy-light"
        />
        <Requirements />
        <FAQ />
        <SectionDivider
          pattern="diamond"
          height={120}
          fromColor="white"
          toColor="navy"
          fromColorDark="navy"
          toColorDark="navy"
        />
        <CTA />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
