import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import WhySection from './components/WhySection'
import ChecksSection from './components/ChecksSection'
import HowItWorks from './components/HowItWorks'
import DemoSection from './components/DemoSection'
import WhoSection from './components/WhoSection'
import PricingSection from './components/PricingSection'
import FAQSection from './components/FAQSection'
import CloseSection from './components/CloseSection'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import Reveal from './components/Reveal'
import Help from './components/Help'
import Refund from './components/Refund'
import Privacy from './components/Privacy'
import Terms from './components/Terms'

function MainContent() {
  return (
    <div className="font-sans text-ink bg-white antialiased [line-height:1.6] max-sm:pb-[74px]">
      <Nav />
      <main>
          <Hero />
          <TrustStrip />

          <HowItWorks />
          <WhySection />
          <ChecksSection />
          <DemoSection />
          <WhoSection />
          <PricingSection />
          <FAQSection />
          <CloseSection />
        </main>
        <Footer />
        <MobileCTA />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/help" element={<Help />} />
      <Route path="/help.html" element={<Help />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/refund.html" element={<Refund />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/privacy.html" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/terms.html" element={<Terms />} />
    </Routes>
  )
}