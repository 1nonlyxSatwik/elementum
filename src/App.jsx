import Header from './components/Header'
import Hero from './components/Hero'
import TomorrowSection from './components/TomorrowSection'
import HelpSection from './components/HelpSection'
import OffersSection from './components/OffersSection'
import TestimonialsSection from './components/TestimonialsSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <TomorrowSection />
        <HelpSection />
        <OffersSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
