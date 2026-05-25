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
  title: 'Alex Rivera - Full-Stack Developer',
  description: 'Award-winning engineer crafting beautiful, performant digital experiences. 8+ years building scalable applications across 40+ projects.',
  metadataBase: new URL('https://alexrivera.dev'),
  openGraph: {
    title: 'Alex Rivera - Full-Stack Developer',
    description: 'Building Digital Experiences That Perform',
    images: [{ url: '/og-image.jpg' }],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        {/* Aurora animated background */}
        <div className="aurora-bg" aria-hidden="true" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
