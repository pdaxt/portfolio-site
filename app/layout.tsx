import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pranjal Gupta | Enterprise AI Consultant & Multi-Agent Systems Expert',
  description: 'Building production AI systems that actually ship. 12+ production deployments, $7.4M+ documented savings. Specializing in multi-agent systems, RAG at scale, and enterprise AI implementation for government, banking, healthcare.',
  keywords: [
    'Enterprise AI Consultant',
    'Multi-Agent Systems',
    'RAG Systems',
    'LLM Implementation',
    'Production AI',
    'AI Strategy',
    'Machine Learning',
    'Claude',
    'GPT-4',
    'AI Infrastructure',
    'Healthcare AI',
    'Government AI',
    'Banking AI',
    'AI Change Management',
  ],
  authors: [{ name: 'Pranjal Gupta', url: 'https://www.linkedin.com/in/pran-dataxlr8/' }],
  creator: 'Pranjal Gupta',
  publisher: 'Pranjal Gupta',
  metadataBase: new URL('https://portfolio-site-nu-beryl.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pranjal Gupta | Enterprise AI Consultant',
    description: 'Building production AI systems that actually ship. 12+ deployments, $7.4M+ savings. Multi-agent systems, RAG, enterprise AI.',
    url: 'https://portfolio-site-nu-beryl.vercel.app',
    siteName: 'Pranjal Gupta Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranjal Gupta | Enterprise AI Consultant',
    description: 'Building production AI systems that actually ship. Multi-agent systems, RAG, enterprise AI.',
    creator: '@pran_dataxlr8',
  },
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
  verification: {
    google: 'verification_token',
  },
}

// JSON-LD structured data for LLMs and search engines
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pranjal Gupta',
  url: 'https://portfolio-site-nu-beryl.vercel.app',
  email: 'pranjal.gupta@dataxlr8.ai',
  jobTitle: 'Enterprise AI Consultant',
  worksFor: {
    '@type': 'Organization',
    name: 'DataXLR8',
    url: 'https://dataxlr8.ai',
  },
  sameAs: [
    'https://www.linkedin.com/in/pran-dataxlr8/',
    'https://bskiller.substack.com',
  ],
  knowsAbout: [
    'Enterprise AI Implementation',
    'Multi-Agent Systems',
    'RAG (Retrieval Augmented Generation)',
    'Large Language Models (LLMs)',
    'Claude AI',
    'GPT-4',
    'AI Infrastructure',
    'Production Machine Learning',
    'AI Security',
    'Healthcare AI',
    'Government AI Systems',
    'Financial Services AI',
  ],
  description: 'Enterprise AI consultant specializing in production AI systems. 12+ production deployments with $7.4M+ documented savings. Expert in multi-agent systems, RAG at scale, and AI implementation for regulated industries.',
  alumniOf: {
    '@type': 'Organization',
    name: 'Enterprise AI Practice',
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'APRA Compliance Certification',
      description: 'Passed 4 compliance audits including APRA for Australian banking',
    },
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Enterprise AI Consultant',
    occupationLocation: {
      '@type': 'Country',
      name: 'Australia',
    },
    skills: 'Multi-Agent Systems, RAG, LLM Implementation, AI Strategy, Python, TypeScript, AWS, GCP, Azure, Kubernetes',
  },
}

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Enterprise AI Consulting',
  provider: {
    '@type': 'Person',
    name: 'Pranjal Gupta',
  },
  serviceType: 'AI Implementation & Strategy',
  description: 'End-to-end enterprise AI implementation from proof-of-concept to production. Specializing in multi-agent systems, RAG at scale, and AI for regulated industries.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Advisory Engagement',
      description: 'Architecture review, technology selection, and strategic guidance. 2-4 weeks.',
    },
    {
      '@type': 'Offer',
      name: 'Implementation',
      description: 'End-to-end system design, build, and production deployment. 3-12 months.',
    },
    {
      '@type': 'Offer',
      name: 'Rescue',
      description: 'Failing AI project assessment, course correction, and recovery. 1-3 months.',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Worldwide',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-[#0a0a0f] text-slate-50 antialiased`}>
        {children}
      </body>
    </html>
  )
}
