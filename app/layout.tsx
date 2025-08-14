import "./globals.css"
import { Inter, Exo_2 } from "next/font/google"
import type { Metadata } from "next"
import type React from "react"
import JsonLd from "./components/JsonLd"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "./components/Analytics"


const inter = Inter({ subsets: ["latin"] })
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Port Alberni Web Design & IT Services | Valley Edge Consulting",
    template: "%s | Valley Edge Consulting"
  },
  description: "Professional web design and IT services in Port Alberni, BC. Serving Vancouver Island businesses with custom websites, tech support, and digital solutions.",
  keywords: ["Port Alberni web design", "Vancouver Island IT services", "website development Port Alberni", "business technology solutions", "IT support Port Alberni", "web design Nanaimo", "Parksville IT services", "Tofino web design", "Ucluelet web development", "Courtenay IT support"],
  metadataBase: new URL('https://www.valleyedgeconsulting.io'),
  openGraph: {
    title: 'Port Alberni Web Design & IT Services | Valley Edge Consulting',
    description: 'Professional web design and IT services in Port Alberni, BC. Serving Vancouver Island businesses with custom websites, tech support, and digital solutions.',
    url: 'https://valleyedgeconsulting.io',
    siteName: 'Valley Edge Consulting',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Valley Edge Consulting - Web Design & IT Services in Port Alberni, BC'
      }
    ],
    locale: 'en_CA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Port Alberni Web Design & IT Services | Valley Edge Consulting',
    description: 'Professional web design and IT services in Port Alberni, BC. Serving Vancouver Island businesses.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.valleyedgeconsulting.io'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="2czgf26x1grjm2zjjtqsbw5czyovti" />
        {/* Web Vitals Monitoring */}
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              addEventListener('load', () => {
                if (navigator.sendBeacon) {
                  const observer = new PerformanceObserver((list) => {
                    list.getEntries().forEach((entry) => {
                      const beacon = new FormData();
                      beacon.append('metric', entry.name);
                      beacon.append('value', entry.value.toString());
                      navigator.sendBeacon('/api/metrics', beacon);
                    });
                  });
                  observer.observe({ entryTypes: ['web-vitals'] });
                }
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd />
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
