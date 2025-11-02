import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import '../styles/globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const quicksand = Quicksand({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand'
})

export const metadata: Metadata = {
  title: 'De Taalreis - Bij de Taalreis gaan we samen op een taalrijke ontdekkingsreis!',
  description: 'Bij de Taalreis gaan we samen op een taalrijke ontdekkingsreis! Nederlandse bijlessen voor studenten.',
  keywords: 'nederlands bijles, dutch tutoring, nederlandse taal, bijlessen, taalles, de taalreis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={quicksand.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
