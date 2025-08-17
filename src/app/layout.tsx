import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Xetralabs - AI-driven Intelligent Services',
  description: 'Next-generation AI-driven intelligent services for modern businesses. Software automation, custom development, and consulting solutions.',
  keywords: 'AI, artificial intelligence, software automation, custom development, consulting, intelligent modules',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 