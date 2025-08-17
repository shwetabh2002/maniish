'use client'
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react'

const Careers = () => {
  const openings = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI modules and machine learning solutions.'
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Build scalable web applications and contribute to our platform architecture.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / London',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for our AI automation solutions.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Berlin',
      type: 'Full-time',
      description: 'Manage cloud infrastructure and CI/CD pipelines for our AI platforms.'
    }
  ]

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health coverage',
    'Flexible remote work',
    'Learning and development budget',
    'Annual team retreats',
    'Latest tech equipment'
  ]

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-primary-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of AI technology. 
            We're looking for passionate individuals who want to make a real impact.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Open Positions</h3>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h4>
                    <p className="text-gray-600 mb-4 lg:mb-0">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold group-hover:translate-x-1 transform"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Work With Us?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We offer a collaborative environment where innovation thrives and every team 
              member has the opportunity to make a meaningful impact on the future of AI technology.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Don't see your role?
            </h4>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you'd like to contribute.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Careers 