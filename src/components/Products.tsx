'use client'
import { Bot, Cpu, Database, Workflow, Cog, TestTube, Cloud, Settings } from 'lucide-react'

const Products = () => {
  const products = [
    {
      icon: Bot,
      title: 'Intelligent AI Modules',
      description: 'Advanced AI-powered modules that automate complex business processes and enhance decision-making capabilities.',
      features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Automated Workflows']
    },
    {
      icon: Cpu,
      title: 'Software Automation',
      description: 'End-to-end automation solutions that streamline operations and eliminate manual bottlenecks across your organization.',
      features: ['Process Automation', 'API Integration', 'Workflow Optimization', 'Quality Assurance']
    },
    {
      icon: Database,
      title: 'Custom Development',
      description: 'Tailored software solutions designed to meet your specific business requirements and objectives.',
      features: ['Full-stack Development', 'Cloud Architecture', 'Microservices', 'DevOps Integration']
    },
    {
      icon: Workflow,
      title: 'Consulting Services',
      description: 'Expert guidance and strategic consulting to transform your business with cutting-edge technology.',
      features: ['Digital Transformation', 'AI Strategy', 'Technical Architecture', 'Implementation Support']
    },
    {
      icon: TestTube,
      title: 'Research & Development',
      description: 'Cutting-edge R&D services to innovate and develop next-generation solutions for your industry.',
      features: ['Innovation Labs', 'Prototype Development', 'Technology Research', 'Proof of Concept']
    },
    {
      icon: Cog,
      title: 'Industrial Automation',
      description: 'Comprehensive automation solutions for manufacturing and industrial processes with real-time monitoring.',
      features: ['Equipment Control', 'Production Optimization', 'Quality Control Systems', 'Predictive Maintenance']
    },
    {
      icon: Cloud,
      title: 'Data Engineering',
      description: 'Transform your data infrastructure with modern data pipelines and analytics platforms.',
      features: ['Data Pipeline Design', 'ETL/ELT Processes', 'Real-time Analytics', 'Data Warehousing']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamlessly connect and integrate your existing systems for optimal operational efficiency.',
      features: ['API Development', 'Legacy System Modernization', 'Third-party Integrations', 'Data Synchronization']
    }
  ]

  const specializedSolutions = [
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Advanced data processing, analytics, and business intelligence platforms'
    },
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Streamline operations with intelligent process automation and optimization'
    },
    {
      icon: TestTube,
      title: 'Innovation Labs',
      description: 'Collaborative R&D partnerships to develop breakthrough technologies'
    }
  ]

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className="text-primary-600">Products & Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI-driven solutions designed to accelerate your digital transformation 
            and drive sustainable business growth across all industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 sm:p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors mx-auto sm:mx-0">
                  <product.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    {product.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center sm:justify-start text-sm sm:text-base text-gray-700">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="bg-gradient-to-br from-primary-50 to-white p-8 sm:p-12 rounded-2xl sm:rounded-3xl mb-8 sm:mb-12">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Specialized Solutions
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond our core offerings, we provide specialized solutions tailored to specific industry needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {specializedSolutions.map((solution, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <solution.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors font-semibold text-base sm:text-lg"
          >
            Explore All Solutions
          </a>
        </div>
      </div>
    </section>
  )
}

export default Products 