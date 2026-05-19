import { Metadata } from 'next'
import { Fira_Code, Inter } from 'next/font/google'
import { Analytics } from '../components/analytics'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { MobileNav } from '../components/mobileNav'
import './styles/codeblock.css'
import './styles/globals.css'

const FontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const FontFiraCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  title: {
    default: 'Talha Cagatay ISIK | Game and Web Developer',
    template: '%s | Talha Cagatay ISIK',
  },
  description: 'Portfolio website of Talha Cagatay ISIK',
  openGraph: {
    title: 'Talha Cagatay ISIK',
    description: 'Portfolio website of Talha Cagatay ISIK',
    url: 'https://talhacagatayisik.com',
    siteName: 'Talha Cagatay ISIK',
    images: [
      {
        url: 'https://talhacagatayisik.com/static/og/default.png',
        width: 1280,
        height: 675,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/static/favicon/favicon-96x96.png',
    shortcut: '/static/favicon/favicon.ico',
    apple: '/static/favicon/apple-touch-icon.png',
    other: [{ rel: 'manifest', url: '/static/favicon/site.webmanifest' }],
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${FontInter.variable} ${FontFiraCode.variable} font-sans flex flex-col min-h-screen relative`}
      >
        <MobileNav />
        <Header />
        <main className="container flex-grow max-w-screen-lg px-5 m-auto mt-16 sm:px-12 md:px-20">
          {children}
        </main>
        <Footer />
        <Analytics />
        <BackgroundNoise />
      </body>
    </html>
  )
}

function BackgroundNoise() {
  return (
    <div className="absolute inset-0 -z-20 opacity-80 h-full mix-blend-overlay noise-bg"></div>
  )
}
