'use client'
import { BarChart, Zap, Link, Shield } from 'lucide-react'

const WhyChooseUs = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Measurable Outcomes',
      description: 'Track ROI and performance metrics with our comprehensive analytics dashboard. See real results from day one.'
    },
    {
      icon: Zap,
      title: 'Real-time Decision Intelligence',
      description: 'Make informed decisions instantly with AI-powered insights and automated decision-making capabilities.'
    },
    {
      icon: Link,
      title: 'Seamless Integration',
      description: 'Connect with your existing systems effortlessly. Our solutions integrate with 500+ enterprise platforms.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, compliance certifications, and data protection.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Integrations' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '10M+', label: 'Transactions' }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Choose <span className="text-primary-600">Xetralabs</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver transformative AI solutions that drive real business value 
            through intelligent automation and data-driven insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary-200 transition-colors">
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 