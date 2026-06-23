import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import WhySection from './components/WhySection'
import ChecksSection from './components/ChecksSection'
import HowItWorks from './components/HowItWorks'
import DemoSection from './components/DemoSection'
import WhoSection from './components/WhoSection'
import SafetySection from './components/SafetySection'
import CloseSection from './components/CloseSection'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'


export default function App() {
  return (
    <div className="font-sans text-ink bg-white antialiased [line-height:1.6] max-sm:pb-[74px]">
      <Nav />
      <Hero />
      <TrustStrip />
      <WhySection />
      <ChecksSection />
      <HowItWorks />
      <DemoSection />
      <WhoSection />
      <SafetySection />
      <CloseSection />
      <Footer />
      <MobileCTA />
    </div>
  )
}