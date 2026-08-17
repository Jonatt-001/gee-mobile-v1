import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  metadataBase: new URL('https://mobile.geefox.xyz'),
  title: {
    default: 'Gee Mobile - Mobile Developer Workspace by GeeFox',
    template: '%s | Gee Mobile by GeeFox',
  },
  description:
    'Gee Mobile is a mobile-first developer workspace by GeeFox for building, inspecting, editing, deploying and managing software projects from your phone.',
  keywords: [
    'Gee Mobile',
    'GeeFox',
    'mobile developer workspace',
    'mobile development',
    'mobile coding',
    'code from phone',
    'build software from phone',
    'deploy software from phone',
    'manage GitHub projects on mobile',
    'mobile developer tools',
  ],
  applicationName: 'Gee Mobile',
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/192.png',
    shortcut: '/icons/192.png',
    apple: '/icons/180.png',
  },
  authors: [{ name: 'GeeFox', url: 'https://geefox.xyz' }],
  creator: 'GeeFox',
  publisher: 'GeeFox',
  category: 'technology',
  alternates: {
    canonical: 'https://mobile.geefox.xyz/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://mobile.geefox.xyz/',
    siteName: 'Gee Mobile',
    title: 'Gee Mobile - Mobile Developer Workspace by GeeFox',
    description:
      'Build, inspect, edit, deploy and manage software projects from your phone with Gee Mobile, the mobile-first developer workspace by GeeFox.',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gee Mobile - Mobile Developer Workspace by GeeFox',
    description:
      'Build, inspect, edit, deploy and manage software projects from your phone with Gee Mobile by GeeFox.',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://mobile.geefox.xyz/#software',
      name: 'Gee Mobile',
      alternateName: 'Gee Mobile by GeeFox',
      applicationCategory: 'DeveloperApplication',
      applicationSubCategory: 'Mobile Developer Workspace',
      operatingSystem: 'Web',
      url: 'https://mobile.geefox.xyz/',
      description:
        'Gee Mobile is a mobile-first developer workspace by GeeFox for building, inspecting, editing, deploying and managing software projects from a phone.',
      creator: {
        '@type': 'Organization',
        '@id': 'https://geefox.xyz/#organization',
        name: 'GeeFox',
        url: 'https://geefox.xyz/',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://geefox.xyz/#organization',
        name: 'GeeFox',
        url: 'https://geefox.xyz/',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://mobile.geefox.xyz/#website',
      name: 'Gee Mobile',
      alternateName: 'Gee Mobile by GeeFox',
      url: 'https://mobile.geefox.xyz/',
      description:
        'The official Gee Mobile website and mobile-first developer workspace by GeeFox.',
      publisher: {
        '@type': 'Organization',
        '@id': 'https://geefox.xyz/#organization',
        name: 'GeeFox',
        url: 'https://geefox.xyz/',
      },
      inLanguage: 'en',
    },
    {
      '@type': 'Organization',
      '@id': 'https://geefox.xyz/#organization',
      name: 'GeeFox',
      url: 'https://geefox.xyz/',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}