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

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-600">Products & Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-driven solutions designed to accelerate your digital transformation 
            and drive sustainable business growth across all industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                  <product.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
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
        <div className="mt-20 bg-gradient-to-br from-primary-50 to-white p-12 rounded-3xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized Solutions
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond our core offerings, we provide specialized solutions tailored to specific industry needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Data Solutions</h4>
              <p className="text-gray-600">Advanced data processing, analytics, and business intelligence platforms</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Process Optimization</h4>
              <p className="text-gray-600">Streamline operations with intelligent process automation and optimization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TestTube className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation Labs</h4>
              <p className="text-gray-600">Collaborative R&D partnerships to develop breakthrough technologies</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
          >
            Explore All Solutions
          </a>
        </div>
      </div>
    </section>
  )
}

export default Products 