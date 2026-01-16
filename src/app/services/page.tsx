import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, Cloud, Server, Users, Zap, Lock, Cog, Workflow, ArrowRight, CheckCircle, Star, TrendingUp, UserCheck } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Services - Infrastructure, Cloud, Security & HRMS',
  description: 'Comprehensive IT services including BAU support, cloud services, cybersecurity, Microsoft solutions, HRMS software, and 24/7 monitoring. Trusted by 500+ companies.',
  keywords: ['IT Services India', 'Cloud Services', 'Cybersecurity Services', 'HRMS Software', 'Microsoft Services', 'IT Support', 'Infrastructure Services'],
  openGraph: {
    title: 'IT Services - GirjaSoft',
    description: 'Comprehensive IT services including cloud, security, and HRMS solutions.',
  },
}

export default function ServicesPage() {
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
    },
    {
      icon: UserCheck,
      title: 'HRMS Software',
      description: 'Complete Human Resource Management System for attendance, payroll, leave management, and employee lifecycle.',
      features: [
        'Attendance & Time Tracking with Biometric Integration',
        'Payroll Processing & Statutory Compliance (PF, ESI, TDS)',
        'Leave Management & Performance Appraisals',
        'Employee Self-Service Portal & Mobile App'
      ],
      color: 'from-violet-500 to-violet-600',
      bgColor: 'bg-violet-50',
      iconColor: 'text-violet-600',
      href: '/hrms'
    }
  ]

  const benefits = [
    {
      icon: Star,
      title: 'Expert Team',
      description: '9+ years of experience with certified professionals'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grow with your business needs and requirements'
    },
    {
      icon: Shield,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support services'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of successful implementations'
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
              Our <span className="text-black font-black">Services</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive IT infrastructure solutions designed to power your business growth 
              and protect your digital assets with enterprise-grade reliability.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-accent-500 text-white rounded-full text-sm font-bold shadow-2xl">
              <Shield className="w-5 h-5 mr-3" />
              Trusted by 500+ Companies
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-black font-bold">Our Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through expertise, innovation, and unwavering commitment to your success
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-black font-bold">Service Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From daily IT operations to complex transformation projects, we cover every aspect of your IT infrastructure needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl ${service.bgColor} p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-400 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-400 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
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
                    href="/contact"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
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
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-colors text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
