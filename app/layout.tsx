import "./globals.css"
import { Inter, Exo_2 } from "next/font/google"
import type { Metadata } from "next"
import type React from "react"
import JsonLd from "./components/JsonLd"


const inter = Inter({ subsets: ["latin"] })
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Valley Edge Consulting | Software Development & Cloud Solutions",
    template: "%s | Valley Edge Consulting"
  },
  description: "Expert software development and cloud solutions for businesses. Specializing in web applications, cloud architecture, and digital transformation.",
  keywords: ["software development", "cloud solutions", "web development", "digital transformation", "Valley Edge Consulting"],
  metadataBase: new URL('https://valleyedgeconsulting.com'), // Replace with your domain
  openGraph: {
    title: 'Valley Edge Consulting',
    description: 'Expert software development and cloud solutions for businesses',
    url: 'https://valleyedgeconsulting.io',
    siteName: 'Valley Edge Consulting',
    images: [
      {
        url: '/og-image.jpg', // Add your OG image
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
