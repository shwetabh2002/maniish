'use client'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white pt-14 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI-driven intelligent services for{' '}
                <span className="text-primary-600">next-generation</span>{' '}
                businesses
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your business with our cutting-edge Intelligent AI Modules. 
                We deliver software automation, custom development, and consulting solutions 
                that drive measurable outcomes and real-time decision intelligence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 font-semibold text-base sm:text-lg group"
                aria-label="Request a demo"
              >
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 font-semibold text-base sm:text-lg"
                aria-label="Start free trial"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Free Trial
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 sm:pt-8">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                Trusted by innovative companies worldwide
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 lg:space-x-8 opacity-60">
                <div className="h-6 w-16 sm:h-8 sm:w-20 lg:w-24 bg-gray-300 rounded"></div>
                <div className="h-6 w-16 sm:h-8 sm:w-20 lg:w-24 bg-gray-300 rounded"></div>
                <div className="h-6 w-16 sm:h-8 sm:w-20 lg:w-24 bg-gray-300 rounded"></div>
                <div className="hidden sm:block h-6 w-16 sm:h-8 sm:w-20 lg:w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative order-first lg:order-last">
            <div className="aspect-square w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              {/* AI/Tech Illustration Placeholder */}
              <div className="relative h-full bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl sm:rounded-3xl overflow-hidden">
                {/* Animated Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 p-4 sm:p-6 lg:p-8">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 bg-primary-600 rounded-lg sm:rounded-xl opacity-80 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                        aria-hidden="true"
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div 
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 bg-white rounded-full shadow-lg animate-bounce"
                  aria-hidden="true"
                ></div>
                <div 
                  className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 bg-primary-400 rounded-full animate-pulse"
                  aria-hidden="true"
                ></div>
                <div 
                  className="absolute top-1/2 left-3 sm:left-4 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 bg-primary-800 rounded-full animate-ping"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 