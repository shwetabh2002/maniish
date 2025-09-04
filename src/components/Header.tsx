'use client'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/', isHome: true },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Contact Us', href: '/contact' }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white shadow-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-600 via-blue-600 to-primary-800 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <span className="text-white font-black text-lg sm:text-xl tracking-tight group-hover:scale-110 transition-transform duration-300">
                  GS
                </span>
              </div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                GirjaSoft
              </span>
            </Link>
          </div>

          {/* Right Side - Navigation and CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium text-base relative group ${
                    item.isHome ? 'text-primary-600 font-semibold' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full ${
                    item.isHome ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="flex items-center space-x-4">
            <a
              href="/about"
              className="px-6 py-3 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                    item.isHome 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
                <a
                  href="/about"
                  className="block px-3 py-3 text-primary-600 font-semibold hover:bg-primary-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="block px-3 py-3 mx-3 bg-primary-600 text-white rounded-lg text-center font-semibold hover:bg-primary-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 