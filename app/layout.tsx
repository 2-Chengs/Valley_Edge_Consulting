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
    default: "Vancouver Web Development & IT Services | Valley Edge Consulting",
    template: "%s | Valley Edge Consulting"
  },
  description: "Professional web development and IT services in Vancouver, BC. Also serving Port Alberni and Vancouver Island businesses with custom websites, tech support, and digital solutions.",
  keywords: ["Vancouver web development", "Vancouver web design", "Vancouver IT services", "website development Vancouver", "business technology solutions Vancouver", "IT support Vancouver", "Port Alberni web design", "Vancouver Island IT services", "web design Nanaimo", "Parksville IT services", "custom web development Vancouver"],
  metadataBase: new URL('https://www.valleyedgeconsulting.io'),
  openGraph: {
    title: 'Vancouver Web Development & IT Services | Valley Edge Consulting',
    description: 'Professional web development and IT services in Vancouver, BC. Also serving Port Alberni and Vancouver Island businesses with custom websites, tech support, and digital solutions.',
    url: 'https://valleyedgeconsulting.io',
    siteName: 'Valley Edge Consulting',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Valley Edge Consulting - Web Development & IT Services in Vancouver, BC'
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
    title: 'Vancouver Web Development & IT Services | Valley Edge Consulting',
    description: 'Professional web development and IT services in Vancouver, BC. Also serving Port Alberni and Vancouver Island businesses.',
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
