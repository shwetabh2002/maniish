'use client'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI-driven intelligent services for{' '}
                <span className="text-primary-600">next-generation</span>{' '}
                businesses
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Transform your business with our cutting-edge Intelligent AI Modules. 
                We deliver software automation, custom development, and consulting solutions 
                that drive measurable outcomes and real-time decision intelligence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 font-semibold text-lg group"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-200 font-semibold text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Free Trial
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by innovative companies worldwide</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative">
            <div className="aspect-square w-full max-w-lg mx-auto">
              {/* AI/Tech Illustration Placeholder */}
              <div className="relative h-full bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl overflow-hidden">
                {/* Animated Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 p-8">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-16 w-16 bg-primary-600 rounded-xl opacity-80 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 h-12 w-12 bg-white rounded-full shadow-lg animate-bounce"></div>
                <div className="absolute bottom-4 left-4 h-8 w-8 bg-primary-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-4 h-6 w-6 bg-primary-800 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 