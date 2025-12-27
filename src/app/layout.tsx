import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ChatBot from '@/components/ChatBot'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Girjasoft - End-to-End IT Infrastructure Solutions – Reliable. Secure. Scalable.',
  description: 'We deliver comprehensive IT infrastructure support, ensuring smooth Business-as-Usual operations while enabling successful project execution.',
  keywords: 'IT Infrastructure, Cybersecurity, Cloud Services, Microsoft Services, Network Security, IT Support, Business IT',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }
    ],
    apple: { url: '/favicon.svg', type: 'image/svg+xml' }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <ChatBot />
      </body>
    </html>
  )
} 