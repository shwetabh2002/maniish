import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Products from '@/components/Products'
import IndustrySolutions from '@/components/IndustrySolutions'
import Technology from '@/components/Technology'
import About from '@/components/About'
import Careers from '@/components/Careers'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Products />
      <IndustrySolutions />
      <Technology />
      <About />
      <Careers />
      <Contact />
      <Footer />
    </main>
  )
} 