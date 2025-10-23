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
    default: "Vancouver & Vancouver Island Web Development | Valley Edge Consulting",
    template: "%s | Valley Edge Consulting"
  },
  description: "Professional web development and IT services serving Vancouver and Vancouver Island, BC. Expert solutions for businesses in Victoria, Nanaimo, Courtenay, Port Alberni, and throughout coastal BC.",
  keywords: ["Vancouver web development", "Vancouver Island web development", "Victoria web development", "Nanaimo web design", "Vancouver IT services", "Vancouver Island IT services", "Courtenay web development", "Victoria IT services", "website development Vancouver", "web developer Vancouver Island", "Port Alberni web design", "Comox Valley IT services", "Parksville web development", "custom web development BC"],
  metadataBase: new URL('https://www.valleyedgeconsulting.io'),
  openGraph: {
    title: 'Vancouver & Vancouver Island Web Development | Valley Edge Consulting',
    description: 'Professional web development and IT services serving Vancouver and Vancouver Island, BC. Expert solutions for Victoria, Nanaimo, Courtenay, Port Alberni, and coastal BC businesses.',
    url: 'https://valleyedgeconsulting.io',
    siteName: 'Valley Edge Consulting',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Valley Edge Consulting - Web Development & IT Services | Vancouver & Vancouver Island'
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
    title: 'Vancouver & Vancouver Island Web Development | Valley Edge Consulting',
    description: 'Professional web development and IT services serving Vancouver and Vancouver Island, BC. Expert solutions for coastal BC businesses.',
    images: ['/og-image.jpg'],
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
