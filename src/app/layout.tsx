import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Portfolio Lautaro Lazzeri',
  description: 'Portfolio Lautaro Lazzeri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className='bg-[#181e27]'>
      <Analytics />
        {children}
      </body>
    </html>
  )
}
