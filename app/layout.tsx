import "./globals.css"
import { Inter, Exo_2 } from "next/font/google"
import type { Metadata } from "next"
import type React from "react"
import JsonLd from "./components/JsonLd"
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] })
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Valley Edge Consulting | Web Development & Business Automation",
    template: "%s | Valley Edge Consulting"
  },
  description: "Expert software development and cloud solutions for businesses. Specializing in web applications, cloud architecture, and digital transformation.",
  keywords: ["software development", "cloud solutions", "web development", "digital transformation", "Valley Edge Consulting"],
  metadataBase: new URL('https://www.valleyedgeconsulting.io'),
  openGraph: {
    title: 'Valley Edge Consulting',
    description: 'Expert software development and cloud solutions for businesses',
    url: 'https://valleyedgeconsulting.io',
    siteName: 'Valley Edge Consulting',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Valley Edge Consulting - Software Development & Cloud Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valley Edge Consulting',
    description: 'Expert software development and cloud solutions for businesses',
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
