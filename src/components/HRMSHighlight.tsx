'use client'
import { UserCheck, Clock, DollarSign, Calendar, Smartphone, ArrowRight, CheckCircle, Star } from 'lucide-react'

const HRMSHighlight = () => {
  const features = [
    { icon: Clock, text: 'Attendance & Time Tracking' },
    { icon: DollarSign, text: 'Payroll & Compliance' },
    { icon: Calendar, text: 'Leave Management' },
    { icon: Smartphone, text: 'Mobile App & Self-Service' }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6 border border-white/20">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              New Product Launch
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Introducing Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-300"> HRMS Software</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Streamline your HR operations with our all-in-one Human Resource Management System. 
              From attendance to payroll, manage your entire workforce efficiently.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-white">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                    <feature.icon className="w-5 h-5 text-violet-300" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/hrms"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-700 rounded-xl font-semibold hover:bg-gray-100 transition-all text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Explore HRMS
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-purple-700 transition-all text-lg"
              >
                Get Free Demo
              </a>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              {/* HRMS Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                <UserCheck className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Our HRMS?</h3>
              
              <ul className="space-y-3">
                {[
                  'Save 70% time on HR tasks',
                  '100% statutory compliance',
                  'Cloud-based & secure',
                  'Easy to use interface',
                  'Dedicated support team',
                  'Affordable for all sizes'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-xs text-gray-300">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-xs text-gray-300">Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-xs text-gray-300">Uptime</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              🔥 Most Popular
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HRMSHighlight

