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

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-primary-600">Xetralabs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver transformative AI solutions that drive real business value 
            through intelligent automation and data-driven insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <feature.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Integrations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">10M+</div>
            <div className="text-gray-600">Transactions</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 