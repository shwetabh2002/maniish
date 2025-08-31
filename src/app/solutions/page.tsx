import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Building2, Car, Plane, Heart, GraduationCap, Globe, ArrowRight, CheckCircle, Star, Zap, Shield, Users } from 'lucide-react'

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Scalable IT infrastructure solutions for large enterprises with complex requirements and global operations.',
      features: [
        'Multi-site Infrastructure Management',
        'Global Network Architecture',
        'Enterprise Security & Compliance',
        'High Availability & Disaster Recovery'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },

    {
      icon: Car,
      title: 'Automotive & Transportation',
      description: 'Connected vehicle solutions, fleet management, and transportation infrastructure modernization.',
      features: [
        'Connected Vehicle Platforms',
        'Fleet Management Systems',
        'Smart Traffic Solutions',
        'Logistics Optimization'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Plane,
      title: 'Aviation & Aerospace',
      description: 'Aviation technology solutions for airlines, airports, and aerospace manufacturing.',
      features: [
        'Airport Operations Management',
        'Aircraft Maintenance Systems',
        'Flight Operations Optimization',
        'Safety & Compliance Solutions'
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Heart,
      title: 'Healthcare & Life Sciences',
      description: 'Digital health solutions, medical device integration, and healthcare infrastructure modernization.',
      features: [
        'Electronic Health Records',
        'Medical Device Integration',
        'Healthcare Analytics',
        'Compliance & Security'
      ],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: GraduationCap,
      title: 'Education & Research',
      description: 'Technology solutions for educational institutions, research organizations, and academic environments.',
      features: [
        'Learning Management Systems',
        'Research Data Management',
        'Campus Infrastructure',
        'Digital Transformation'
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },

    {
      icon: Globe,
      title: 'Financial Services',
      description: 'Secure financial technology solutions, regulatory compliance, and digital banking infrastructure.',
      features: [
        'Core Banking Systems',
        'Regulatory Compliance',
        'Fraud Detection',
        'Digital Banking'
      ],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    }
  ]

  const capabilities = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security built into every solution'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Specialized knowledge in each industry domain'
    },
    {
      icon: Star,
      title: 'Proven Track Record',
      description: 'Successfully delivered solutions across industries'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Cutting-edge technology and best practices'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-primary-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-success-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Industry <span className="text-black font-black">Solutions</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Tailored IT solutions designed specifically for your industry, addressing unique challenges 
              and unlocking opportunities for growth and innovation.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-accent-500 text-white rounded-full text-sm font-bold shadow-2xl">
              <Star className="w-5 h-5 mr-3" />
              Industry-Specific Expertise
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-black font-bold">Our Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep industry knowledge with cutting-edge technology to deliver solutions that drive real business value
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <capability.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industry <span className="text-black font-bold">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From manufacturing to healthcare, we deliver specialized solutions that address the unique challenges of your industry
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl ${solution.bgColor} p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-400 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-400 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className={`w-5 h-5 ${solution.iconColor} mr-3 mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <a
                    href="/contact"
                    className={`inline-flex items-center text-${solution.iconColor.split('-')[1]}-600 font-semibold hover:text-${solution.iconColor.split('-')[1]}-700 transition-colors group/btn`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Industry?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry-specific solutions can address your unique challenges and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-colors text-lg"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
