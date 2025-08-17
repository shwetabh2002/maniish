'use client'
import { Building2, HeartHandshake, Banknote, ShoppingCart, Truck, Factory } from 'lucide-react'

const IndustrySolutions = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Enterprise',
      description: 'Scalable AI solutions for large organizations seeking digital transformation.',
      solutions: ['Enterprise Resource Planning', 'Business Intelligence', 'Workforce Management']
    },
    {
      icon: HeartHandshake,
      title: 'Healthcare',
      description: 'Intelligent systems that improve patient care and operational efficiency.',
      solutions: ['Patient Management', 'Diagnostic Assistance', 'Healthcare Analytics']
    },
    {
      icon: Banknote,
      title: 'Financial Services',
      description: 'Advanced fintech solutions for banking, insurance, and investment firms.',
      solutions: ['Risk Management', 'Fraud Detection', 'Algorithmic Trading']
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description: 'AI-powered platforms that enhance customer experience and optimize operations.',
      solutions: ['Recommendation Engines', 'Inventory Optimization', 'Customer Analytics']
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'Smart logistics solutions that streamline supply chain management.',
      solutions: ['Route Optimization', 'Demand Forecasting', 'Warehouse Automation']
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industry 4.0 solutions that modernize production and quality control.',
      solutions: ['Predictive Maintenance', 'Quality Control', 'Production Planning']
    }
  ]

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Industry <span className="text-primary-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored AI solutions designed for specific industry challenges and requirements, 
            delivering measurable results across diverse sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <industry.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {industry.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {industry.description}
              </p>
              <div className="space-y-2">
                {industry.solutions.map((solution, solutionIndex) => (
                  <div key={solutionIndex} className="flex items-center text-gray-700 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                    {solution}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustrySolutions 