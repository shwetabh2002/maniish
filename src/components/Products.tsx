'use client'
import { Shield, Cloud, Server, Users, Zap, Lock, Cog, Workflow, ArrowRight, CheckCircle } from 'lucide-react'

const Products = () => {
  const services = [
    {
      icon: Shield,
      title: 'BAU (Business-as-Usual) IT Support',
      description: 'Ensuring smooth daily IT operations with proactive monitoring, troubleshooting, and reliable support.',
      features: [
        '24/7 Monitoring & Incident Management',
        'User and System Administration (AD, Entra ID, Microsoft 365)',
        'Patch Management & Regular Updates',
        'Performance Optimization & Troubleshooting'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Cog,
      title: 'IT Project Support',
      description: 'Delivering end-to-end infrastructure upgrades, migrations, and project execution with minimal business disruption.',
      features: [
        'IT Infrastructure Upgrades & Migrations',
        'Cloud Transformation Projects',
        'Microsoft Deployment (Azure, Windows 365, AVD, RDSH)',
        'Network & Security Modernization'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Server,
      title: 'Microsoft Services',
      description: 'Empowering businesses with secure, scalable Microsoft 365, Azure, and identity management solutions.',
      features: [
        'Microsoft 365 Administration (Exchange, Teams, OneDrive)',
        'Azure Virtual Desktop & Windows 365 Management',
        'Active Directory & Entra ID (Azure AD) Integration',
        'Intune & Endpoint Manager Policies'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Lock,
      title: 'Firewall & Network Security',
      description: 'Protecting your business with advanced firewall management, secure remote access, and network defense.',
      features: [
        'Firewall Configuration & Management (Cisco, Fortinet, Palo Alto, etc.)',
        'VPN & Secure Remote Access Solutions',
        'Intrusion Detection & Prevention',
        'Network Hardening & Compliance'
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Designing and managing cloud environments that maximize performance, security, and cost efficiency.',
      features: [
        'Microsoft Azure Cloud Solutions',
        'Hybrid Cloud Architecture & Migration',
        'Cloud Security & Governance',
        'Cost Optimization & Resource Management'
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Zap,
      title: 'Cybersecurity Services',
      description: 'Safeguarding IT systems with identity management, MFA, compliance, and 24/7 threat monitoring.',
      features: [
        'Identity & Access Management (IAM)',
        'Multi-Factor Authentication (MFA) & Conditional Access',
        'Threat Monitoring & Incident Response',
        'Security Audits & Compliance (ISO, GDPR, etc.)'
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Workflow,
      title: 'Software Automation',
      description: 'End-to-end automation solutions that streamline operations and eliminate manual bottlenecks across your organization.',
      features: [
        'Process Automation',
        'API Integration',
        'Workflow Optimization',
        'Quality Assurance'
      ],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      icon: Users,
      title: 'System Integration',
      description: 'Seamlessly connect and integrate your existing systems for optimal operational efficiency.',
      features: [
        'API Development',
        'Legacy System Modernization',
        'Third-party Integrations',
        'Data Synchronization'
      ],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    }
  ]

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Trusted IT Partner
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Powering IT.{' '}
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Protecting Growth.
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Your trusted partner for BAU, Cloud, and Infrastructure success.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              15+ Years Experience
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              500+ Clients Served
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              24/7 Support
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl ${service.bgColor} p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-400 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-400 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 ${service.iconColor} mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <a
                  href="#contact"
                  className={`inline-flex items-center text-${service.iconColor.split('-')[1]}-600 font-semibold hover:text-${service.iconColor.split('-')[1]}-700 transition-colors group/btn`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive IT services can drive your business success and protect your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-colors text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products 