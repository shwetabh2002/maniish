'use client'
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const navigation = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
      { name: 'Blog', href: '#' },
    ],
    services: [
      { name: 'AI Modules', href: '#products' },
      { name: 'Automation', href: '#products' },
      { name: 'Consulting', href: '#products' },
      { name: 'Development', href: '#products' },
    ],
    industries: [
      { name: 'Healthcare', href: '#industries' },
      { name: 'Finance', href: '#industries' },
      { name: 'Manufacturing', href: '#industries' },
      { name: 'Retail', href: '#industries' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Security', href: '#' },
    ],
  }

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                Xetralabs
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md">
                Transforming businesses with AI-driven intelligent services. 
                We deliver innovative solutions that drive measurable outcomes 
                and sustainable growth.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="mailto:hello@xetralabs.com" 
                  className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors break-all"
                >
                  hello@xetralabs.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="tel:+15551234567" 
                  className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">
                  San Francisco, CA
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 lg:col-span-3">
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Services
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Industries
              </h4>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {navigation.industries.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Legal
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href} 
                      className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto lg:mx-0">
            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 text-center lg:text-left">
              Stay Updated
            </h4>
            <p className="text-gray-300 text-sm sm:text-base mb-4 text-center lg:text-left">
              Get the latest insights on AI and automation delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-400 text-sm sm:text-base transition-colors"
                required
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors font-medium text-sm sm:text-base whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © 2024 Xetralabs. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="text-gray-400 text-xs sm:text-sm">
              Built with ❤️ using Next.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 