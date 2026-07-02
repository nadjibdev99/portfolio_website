import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nadjib - Front-End Developer',
  description: 'Front-end developer crafting beautiful, performant digital experiences. Building seamless end-to-end digital experiences.',
  metadataBase: new URL('https://nadjib.dev'),
  openGraph: {
    title: 'Nadjib - Front-End Developer',
    description: 'Building Digital Experiences That Perform',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gradient-dark text-slate-200`}>
        <div className="aurora-bg" aria-hidden="true" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
