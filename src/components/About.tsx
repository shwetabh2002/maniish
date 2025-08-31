'use client'
import { Users, Target, Award, Globe, Lightbulb, Wrench, BookOpen, Rocket } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Expert Team Members' },
    { icon: Target, number: '200+', label: 'Projects Delivered' },
    { icon: Award, number: '15+', label: 'Industry Awards' },
    { icon: Globe, number: '25+', label: 'Countries Served' }
  ]

  const expertise = [
    {
      icon: Lightbulb,
      title: 'Research & Development',
      description: 'Our dedicated R&D team continuously explores emerging technologies, from advanced AI algorithms to cutting-edge automation solutions.'
    },
    {
      icon: Wrench,
      title: 'Industrial Automation',
      description: 'Deep expertise in manufacturing automation, process control systems, and industrial IoT implementations across various sectors.'
    },
    {
      icon: BookOpen,
      title: 'Strategic Consulting',
      description: 'Technology strategy and digital transformation consulting to guide businesses through their modernization journey.'
    },
    {
      icon: Rocket,
      title: 'Innovation Labs',
      description: 'Collaborative innovation partnerships to develop breakthrough solutions and proof-of-concept implementations.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">GirjaSoft</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a leading AI technology company dedicated to transforming businesses 
              through innovative intelligent solutions. Our team of experts combines deep 
              technical expertise with industry knowledge to deliver cutting-edge AI modules 
              that drive real business value.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded on the principle of making AI accessible and practical for businesses 
              of all sizes, we specialize in software automation, custom development, 
              strategic consulting, and advanced R&D. Our solutions are designed to integrate 
              seamlessly with existing systems while providing measurable outcomes and real-time insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                Learn More
              </a>

            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm text-center group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <item.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To democratize AI technology by creating intelligent solutions that are accessible, 
              practical, and transformative for businesses worldwide. We believe in the power of 
              AI to solve complex challenges and drive innovation across industries through 
              cutting-edge research and development.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the global leader in AI-driven business transformation, enabling organizations 
              to achieve unprecedented levels of efficiency, innovation, and growth through our 
              intelligent solutions, advanced automation technologies, and expert guidance.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 bg-primary-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Innovation</h4>
              <p className="text-primary-100">
                Continuously pushing the boundaries of what's possible with AI and automation
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Excellence</h4>
              <p className="text-primary-100">
                Delivering exceptional quality and results that exceed client expectations
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Partnership</h4>
              <p className="text-primary-100">
                Building long-term relationships based on trust, transparency, and mutual success
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 