import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Award, Target, Heart, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - IT Infrastructure Experts',
  description: 'GirjaSoft has 15+ years of experience delivering IT infrastructure, HRMS software, and cloud solutions. 500+ clients served with 99.9% uptime. Learn about our mission and values.',
  keywords: ['About GirjaSoft', 'IT Company India', 'IT Infrastructure Company', 'HRMS Provider', 'Cloud Solutions Provider'],
  openGraph: {
    title: 'About GirjaSoft - IT Infrastructure Experts',
    description: '15+ years of experience delivering IT infrastructure, HRMS software, and cloud solutions.',
  },
}

export default function AboutPage() {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '500+', label: 'Clients Served', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Star },
    { number: '24/7', label: 'Support', icon: Zap }
  ]

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously pushing the boundaries of what\'s possible with IT infrastructure and automation',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'Delivering exceptional quality and results that exceed client expectations',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships based on trust, transparency, and mutual success',
      color: 'from-green-500 to-green-600'
    }
  ]

  const expertise = [
    {
      icon: Zap,
      title: 'Research & Development',
      description: 'Cutting-edge R&D services to innovate and develop next-generation solutions'
    },
    {
      icon: Users,
      title: 'Industrial Automation',
      description: 'Comprehensive automation solutions for manufacturing and industrial processes'
    },
    {
      icon: Star,
      title: 'Strategic Consulting',
      description: 'Expert guidance and strategic consulting to transform your business'
    },
    {
      icon: Award,
      title: 'Innovation Labs',
      description: 'Collaborative R&D partnerships to develop breakthrough technologies'
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
              About <span className="text-black font-black">GirjaSoft</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              We deliver comprehensive IT infrastructure solutions that drive business success 
              through expert engineering, scalable technology, and unwavering customer focus.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-accent-500 text-white rounded-full text-sm font-bold shadow-2xl">
              <Award className="w-5 h-5 mr-3" />
              Trusted IT Partner Since 2009
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To democratize IT infrastructure technology by creating intelligent solutions that are accessible, 
                practical, and transformative for businesses worldwide. We believe in the power of 
                technology to solve complex challenges and drive innovation across industries.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the global leader in IT infrastructure transformation, enabling organizations 
                to achieve unprecedented levels of efficiency, innovation, and growth through our 
                intelligent solutions, advanced automation technologies, and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-black font-bold">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-black font-bold">Expertise</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Specialized knowledge and capabilities that set us apart in the industry
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-200 leading-relaxed text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how our expertise can drive your business success and protect your growth.
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
