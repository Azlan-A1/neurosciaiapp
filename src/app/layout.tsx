import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Neurosci AI — Research infrastructure for neuroscience labs',
  description:
    'An AI research operating system for neuroscience. Analyze experiments, query the literature, generate figures — built for the way labs actually work.',
  metadataBase: new URL('https://www.neurosci.app'),
  openGraph: {
    title: 'Neurosci AI',
    description:
      'Research infrastructure for neuroscience labs. Data → insight, in hours not weeks.',
    url: 'https://www.neurosci.app',
    siteName: 'Neurosci AI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-ink-0 text-ink-900 font-sans antialiased selection:bg-accent/25">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
