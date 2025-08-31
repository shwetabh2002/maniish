'use client'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-14 sm:pt-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/pexels-goumbik-574077.jpg')"
        }}
      ></div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Content */}
          <div className="space-y-8 sm:space-y-10 animate-fade-in-up">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                End-to-End IT Infrastructure Solutions –{' '}
                <span className="text-primary-400 font-black">Reliable. Secure. Scalable.</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto font-medium">
                We deliver comprehensive IT infrastructure support, ensuring smooth Business-as-Usual operations while enabling successful project execution. Our strategy emphasizes stability, efficiency, and innovation through proactive monitoring, fast incident management, and scalable solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 font-bold text-lg sm:text-xl group shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-2 hover:scale-105"
                aria-label="Learn about us"
              >
                About Us
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 border-2 border-white text-white rounded-xl hover:bg-white hover:text-black focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 font-bold text-lg sm:text-xl backdrop-blur-sm hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
                aria-label="Contact us"
              >
                <Play className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Contact Us
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 sm:pt-10">
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 font-medium">
                Trusted by innovative companies worldwide
              </p>
              <div className="flex items-center justify-center space-x-6 sm:space-x-8 lg:space-x-10 opacity-80">
                <div className="h-8 w-20 sm:h-10 sm:w-24 lg:w-28 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30"></div>
                <div className="h-8 w-20 sm:h-10 sm:w-24 lg:w-28 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30"></div>
                <div className="h-8 w-20 sm:h-10 sm:w-24 lg:w-28 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30"></div>
                <div className="hidden sm:block h-8 w-20 sm:h-10 sm:w-24 lg:w-28 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 