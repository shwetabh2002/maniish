import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft, Shield } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'GirjaSoft Privacy Policy - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
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
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6 border border-white/20">
              <Shield className="w-4 h-4 mr-2" />
              Legal Information
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Privacy <span className="text-black font-black">Policy</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-gray-300 text-lg">Effective date: January 1, 2026</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Home
          </Link>

          {/* Content */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
            <div className="space-y-10">
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  Welcome to Girjasoft. This Privacy Policy describes how we collect, use, disclose, and safeguard your personal information when you visit our website girjasoft.com (the "Site"). We respect your privacy and are committed to protecting your personal data.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Personal Information You Provide</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect information you provide directly to us. This includes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Any other information you submit through contact forms</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Information Collected Automatically</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you visit the Site, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                  <li>IP address</li>
                  <li>Device and browser information</li>
                  <li>Pages visited and time spent on them</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use collected data for purposes such as:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                  <li>Responding to your inquiries</li>
                  <li>Improving our website and services</li>
                  <li>Sending updates or other communications you request</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may use cookies and similar technologies to improve your experience on our Site. You can choose to disable cookies in your browser settings, but this may affect Site functionality.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Sharing of Personal Data</h2>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell your personal information to third parties. We may share information with trusted service providers to perform functions on our behalf, such as hosting, analytics, or email delivery.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Retention</h2>
                <p className="text-gray-600 leading-relaxed">
                  We retain personal information only as long as necessary to fulfill the purposes outlined in this Policy and to comply with legal requirements.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">International Transfers</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your personal data may be transferred to and processed in countries outside your home jurisdiction. Where required, we implement appropriate safeguards for such transfers.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Depending on applicable law in your region, you may have rights to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction or deletion of inaccurate data</li>
                  <li>Restrict or object to processing</li>
                  <li>Withdraw your consent to specific processing activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement reasonable technical and organizational measures to protect the personal data we collect. However, no internet transmission is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  The Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. If changes are made, the updated effective date will be reflected here.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy, you can contact us at:
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Email: <a href="mailto:Admin@girjasoft.com" className="text-primary-600 hover:text-primary-700 font-semibold underline transition-colors">Admin@girjasoft.com</a>
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  © 2026 Girjasoft. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
