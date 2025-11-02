import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'De Taalreis - Nederlands Bijles & Tutoring',
  description: 'Professionele Nederlandse bijlessen voor studenten die moeite hebben met de taal. Persoonlijke begeleiding bij jou thuis.',
  keywords: 'nederlands bijles, dutch tutoring, nederlandse taal, bijlessen, taalles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

