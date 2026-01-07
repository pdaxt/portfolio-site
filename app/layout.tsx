import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pranjal Gupta | Enterprise AI Portfolio',
  description: 'Building production AI systems that actually ship. 12+ production deployments across government, banking, healthcare, and technology.',
  keywords: ['AI', 'Machine Learning', 'Enterprise AI', 'Multi-Agent Systems', 'RAG', 'LLM'],
  authors: [{ name: 'Pranjal Gupta' }],
  openGraph: {
    title: 'Pranjal Gupta | Enterprise AI Portfolio',
    description: 'Building production AI systems that actually ship.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0f] text-slate-50 antialiased`}>
        {children}
      </body>
    </html>
  )
}
