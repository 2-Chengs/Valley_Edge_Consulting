export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Valley Edge Consulting",
          "description": "Professional web design, IT support, and business technology solutions in Port Alberni, BC. Serving Vancouver Island businesses with custom websites, tech support and digital services.",
          "url": "https://www.valleyedgeconsulting.io",
          "logo": "https://www.valleyedgeconsulting.io/logo.png",
          "image": "https://www.valleyedgeconsulting.io/Ivan_Front_Lines.jpg",
          "telephone": "+1-250-730-2398",
          "email": "ivan@valleyedgeconsulting.io",
          "currenciesAccepted": "CAD",
          "paymentAccepted": "Credit Card, Cash",
          "priceRange": "$$",
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 49.2339,
              "longitude": -124.8055
            },
            "geoRadius": "100km"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Port Alberni",
            "addressLocality": "Port Alberni",
            "addressRegion": "BC",
            "postalCode": "V9Y",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.2339,
            "longitude": -124.8055
          },
          "sameAs": [
            "https://linkedin.com/company/valley-edge-consulting",
            "https://github.com/valley-edge-consulting"
          ],
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            }
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 49.2339,
              "longitude": -124.8055
            },
            "geoRadius": "100km"
          },
          "knowsAbout": [
            "Web Design Port Alberni",
            "IT Support Port Alberni",
            "Business Technology Solutions Vancouver Island",
            "Web Development Nanaimo",
            "IT Services Parksville",
            "Web Design Tofino",
            "Website Development Ucluelet",
            "Technology Consulting Courtenay"
          ]
        })
      }}
    />
  )
} 