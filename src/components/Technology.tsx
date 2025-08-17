'use client'
import { Brain, Cloud, Code, Shield, Database, Cpu, Network, Workflow } from 'lucide-react'

const Technology = () => {
  const techStack = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced machine learning algorithms and neural networks for intelligent automation',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'Computer Vision', 'NLP']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud-native architecture for enterprise applications',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker']
    },
    {
      icon: Code,
      title: 'Development Stack',
      description: 'Modern frameworks and programming languages for robust software solutions',
      technologies: ['Python', 'Node.js', 'React', 'TypeScript', 'GraphQL']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and data protection with industry certifications',
      technologies: ['OAuth 2.0', 'SSL/TLS', 'GDPR', 'SOC 2', 'ISO 27001']
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Advanced data processing and analytics platforms for business intelligence',
      technologies: ['Apache Spark', 'Elasticsearch', 'MongoDB', 'PostgreSQL', 'Redis']
    },
    {
      icon: Cpu,
      title: 'Automation & Control',
      description: 'Industrial automation and process control systems for manufacturing',
      technologies: ['SCADA', 'PLC Programming', 'OPC-UA', 'Industrial IoT', 'Edge Computing']
    },
    {
      icon: Network,
      title: 'Integration & APIs',
      description: 'Seamless system integration and API development for connected ecosystems',
      technologies: ['REST APIs', 'GraphQL', 'Microservices', 'Event Streaming', 'Message Queues']
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Workflow automation and business process management solutions',
      technologies: ['RPA Tools', 'Workflow Engines', 'BPM', 'ETL/ELT', 'Data Pipelines']
    }
  ]

  const capabilities = [
    {
      title: 'R&D Innovation',
      description: 'Cutting-edge research and development in AI, automation, and emerging technologies',
      metrics: '50+ Research Projects'
    },
    {
      title: 'Industrial Expertise',
      description: 'Deep domain knowledge in manufacturing, process control, and industrial automation',
      metrics: '200+ Industrial Deployments'
    },
    {
      title: 'Consulting Excellence',
      description: 'Strategic technology consulting and digital transformation guidance',
      metrics: '15+ Years Experience'
    }
  ]

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-600">Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on cutting-edge technologies and industry best practices to deliver 
            robust, scalable, and secure AI solutions across all domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <tech.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {tech.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {tech.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {tech.technologies.map((technology, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Capabilities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Core Capabilities
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-50 p-8 rounded-2xl mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {capability.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {capability.description}
                  </p>
                  <div className="text-2xl font-bold text-primary-600">
                    {capability.metrics}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Standards */}
        <div className="bg-gray-50 p-12 rounded-3xl mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Industry Standards & Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['ISO 27001', 'SOC 2', 'GDPR', 'HIPAA', 'PCI DSS', 'NIST'].map((standard, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm">
                <div className="text-sm font-semibold text-gray-900">{standard}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let our expert team help you implement cutting-edge AI solutions 
            tailored to your specific needs and industry requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Start Your Project
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-600 transition-colors font-semibold"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology 