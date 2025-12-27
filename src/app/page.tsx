import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Products from '@/components/Products'
import HRMSHighlight from '@/components/HRMSHighlight'
import IndustrySolutions from '@/components/IndustrySolutions'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Products />
      <HRMSHighlight />
      <IndustrySolutions />
      <About />
      <Contact />
      <Footer />
    </main>
  )
} 