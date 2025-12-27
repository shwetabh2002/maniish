import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://girjasoft.com'),
  title: {
    default: 'GirjaSoft - IT Infrastructure & HRMS Software Solutions India',
    template: '%s | GirjaSoft'
  },
  description: 'GirjaSoft delivers comprehensive IT infrastructure support, HRMS software, cloud services, and cybersecurity solutions. Trusted by 500+ companies across India. Get free demo today!',
  keywords: [
    'IT Infrastructure',
    'HRMS Software',
    'HRMS Software India',
    'HR Management System',
    'Payroll Software',
    'Attendance Management',
    'Cloud Services',
    'Cybersecurity',
    'Microsoft Services',
    'IT Support India',
    'Business IT Solutions'
  ],
  authors: [{ name: 'GirjaSoft', url: 'https://girjasoft.com' }],
  creator: 'GirjaSoft',
  publisher: 'GirjaSoft',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://girjasoft.com',
    siteName: 'GirjaSoft',
    title: 'GirjaSoft - IT Infrastructure & HRMS Software Solutions India',
    description: 'Comprehensive IT infrastructure support, HRMS software, cloud services, and cybersecurity solutions. Trusted by 500+ companies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GirjaSoft - IT Infrastructure & HRMS Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GirjaSoft - IT Infrastructure & HRMS Software Solutions',
    description: 'Comprehensive IT infrastructure support, HRMS software, cloud services, and cybersecurity solutions.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }
    ],
    apple: { url: '/favicon.svg', type: 'image/svg+xml' }
  },
  verification: {
    google: 'T_iTqOYoyBe9UAStBO0-vo4F5DNN0GpelKAW_nAxl_Q',
  },
  alternates: {
    canonical: 'https://girjasoft.com',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GirjaSoft',
  url: 'https://girjasoft.com',
  logo: 'https://girjasoft.com/favicon.svg',
  description: 'GirjaSoft delivers comprehensive IT infrastructure support, HRMS software, cloud services, and cybersecurity solutions.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '71, A Block, Harsh Vihar, Chipyana Buzurg',
    addressLocality: 'Greater Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201009',
    addressCountry: 'IN'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-96439-17415',
    contactType: 'sales',
    email: 'info@girjasoft.com',
    availableLanguage: ['English', 'Hindi']
  },
  sameAs: [
    'https://www.linkedin.com/company/girjasoft',
    'https://twitter.com/girjasoft'
  ],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    offerCount: 9,
    offers: [
      {
        '@type': 'Offer',
        name: 'HRMS Software',
        description: 'Complete HR Management System with attendance, payroll, and leave management'
      },
      {
        '@type': 'Offer',
        name: 'IT Infrastructure Support',
        description: '24/7 IT support and monitoring services'
      },
      {
        '@type': 'Offer',
        name: 'Cloud Services',
        description: 'Microsoft Azure and hybrid cloud solutions'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
