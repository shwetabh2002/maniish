import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Users, Clock, Calendar, DollarSign, FileText, Shield, 
  BarChart3, Building2, CheckCircle, ArrowRight, Star, 
  Smartphone, Cloud, Lock, Zap, HeadphonesIcon, Award,
  UserCheck, ClipboardList, PieChart, Settings
} from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HRMS Software India | Best HR Management System | GirjaSoft',
  description: 'Complete HRMS software solution for attendance, payroll, leave management, recruitment & employee management. Trusted by 500+ companies. Get free demo today!',
  keywords: 'HRMS software, HR management system, payroll software, attendance management, leave management, employee management software, HRMS India, best HRMS software',
}

export default function HRMSPage() {
  const features = [
    {
      icon: UserCheck,
      title: 'Employee Management',
      description: 'Complete employee lifecycle management from onboarding to exit with digital records and self-service portal.'
    },
    {
      icon: Clock,
      title: 'Attendance & Time Tracking',
      description: 'Biometric integration, geo-fencing, shift management, and real-time attendance tracking with mobile app support.'
    },
    {
      icon: Calendar,
      title: 'Leave Management',
      description: 'Automated leave requests, approval workflows, leave balance tracking, and holiday calendar management.'
    },
    {
      icon: DollarSign,
      title: 'Payroll Processing',
      description: 'Automated salary calculation, tax deductions, statutory compliance (PF, ESI, TDS), and payslip generation.'
    },
    {
      icon: ClipboardList,
      title: 'Recruitment & Onboarding',
      description: 'Job posting, applicant tracking, interview scheduling, offer management, and seamless onboarding workflows.'
    },
    {
      icon: BarChart3,
      title: 'Performance Management',
      description: 'Goal setting, KPI tracking, 360° feedback, appraisal cycles, and performance analytics dashboard.'
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Secure storage for employee documents, digital signatures, and automated document expiry alerts.'
    },
    {
      icon: PieChart,
      title: 'Reports & Analytics',
      description: 'Comprehensive HR analytics, custom reports, workforce insights, and data-driven decision making.'
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Save 70% Time',
      description: 'Automate repetitive HR tasks and focus on strategic initiatives'
    },
    {
      icon: Shield,
      title: '100% Compliant',
      description: 'Stay compliant with Indian labor laws, PF, ESI, and tax regulations'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based',
      description: 'Access anywhere, anytime with secure cloud infrastructure'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Employee self-service app for attendance, leaves, and payslips'
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'Enterprise-grade security with encrypted data and role-based access'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Dedicated support team to help you every step of the way'
    }
  ]

  const modules = [
    'Core HR & Employee Database',
    'Attendance & Time Tracking',
    'Leave Management System',
    'Payroll & Compliance',
    'Recruitment & ATS',
    'Performance Management',
    'Training & Development',
    'Employee Self-Service Portal',
    'Mobile App (iOS & Android)',
    'Reports & Analytics',
    'Document Management',
    'Exit Management'
  ]

  const industries = [
    { name: 'IT & Software', icon: Settings },
    { name: 'Manufacturing', icon: Building2 },
    { name: 'Healthcare', icon: Shield },
    { name: 'Retail & E-commerce', icon: DollarSign },
    { name: 'Education', icon: Award },
    { name: 'Hospitality', icon: Users }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6 border border-white/20">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Trusted by 500+ Companies Across India
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">HRMS Software</span>
              <br />for Modern Businesses
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Streamline your HR operations with our all-in-one Human Resource Management System. 
              From attendance to payroll, manage everything in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all text-lg shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1"
              >
                Get Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Companies' },
              { value: '50,000+', label: 'Employees Managed' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">HRMS Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your workforce efficiently, all in one integrated platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                All-in-One HR
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Modules</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our comprehensive HRMS comes with all the modules you need to digitize and automate your entire HR operations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {modules.map((module, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{module}</span>
                  </div>
                ))}
              </div>
              <a
                href="/contact"
                className="inline-flex items-center mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our HRMS?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Easy to use with minimal training required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Customizable to fit your organization&apos;s needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Seamless integration with existing systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Regular updates with new features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Dedicated implementation support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Affordable pricing for all business sizes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Benefits of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">HRMS Solution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your HR department with automation, insights, and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Industries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our HRMS is designed to cater to businesses of all sizes and industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all group cursor-pointer"
              >
                <industry.icon className="w-10 h-10 mx-auto mb-3 text-gray-600 group-hover:text-white transition-colors" />
                <span className="font-semibold text-gray-800 group-hover:text-white transition-colors">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a personalized demo of our HRMS and see how it can streamline your HR processes. Our experts will guide you through every feature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+919643917415"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
              >
                Call: +91 96439 17415
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

