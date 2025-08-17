'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Products', href: '#products' },
    { name: 'Industries', href: '#industries' },
    { name: 'Technology', href: '#technology' },
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleMobileMenuClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="text-xl sm:text-2xl font-bold text-primary-800 hover:text-primary-600 transition-colors"
            >
              Xetralabs
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm xl:text-base text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a
              href="#contact"
              className="px-3 xl:px-4 py-2 text-sm xl:text-base text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Free Trial
            </a>
            <a
              href="#contact"
              className="px-4 xl:px-6 py-2 text-sm xl:text-base bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg rounded-b-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-base text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors rounded-md"
                  onClick={handleMobileMenuClick}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2 border-t border-gray-200 mt-4">
                <a
                  href="#contact"
                  className="block px-3 py-3 text-base text-primary-600 font-medium hover:bg-gray-50 rounded-md"
                  onClick={handleMobileMenuClick}
                >
                  Free Trial
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-3 mx-3 bg-primary-600 text-white rounded-lg text-center font-medium hover:bg-primary-700 transition-colors"
                  onClick={handleMobileMenuClick}
                >
                  Request Demo
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