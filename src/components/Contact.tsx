'use client'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@xetralabs.com',
      action: 'mailto:hello@xetralabs.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      action: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM PST',
      action: null
    }
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Contact our experts today 
            for a personalized consultation and demo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-sm sm:text-base text-primary-600 hover:text-primary-700 break-all"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-gray-600">
                          {info.details}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white p-6 sm:p-8 rounded-xl">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                Why Contact Us?
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Free 30-minute consultation',
                  'Custom solution proposal',
                  'ROI assessment and planning',
                  '24/7 dedicated support'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm sm:text-base text-gray-700">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">
              Send Us a Message
            </h3>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                  placeholder="Company Name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="ai-modules">Intelligent AI Modules</option>
                  <option value="automation">Software Automation</option>
                  <option value="development">Custom Development</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="research">Research & Development</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base resize-vertical"
                  placeholder="Tell us about your project and requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 sm:py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors font-semibold text-base sm:text-lg"
              >
                Send Message
              </button>

              <p className="text-xs sm:text-sm text-gray-500 text-center">
                We'll respond within 24 hours. Your information is kept confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 