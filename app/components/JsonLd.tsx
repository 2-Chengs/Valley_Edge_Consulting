export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Valley Edge Consulting",
          "description": "Professional web development, IT support, and business technology solutions serving Vancouver and Vancouver Island, BC. Expert services for businesses in Victoria, Nanaimo, Courtenay, Port Alberni, and throughout coastal British Columbia.",
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
              "latitude": 49.2827,
              "longitude": -123.1207
            },
            "geoRadius": "250km"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "909 Mainland St",
            "addressLocality": "Vancouver",
            "addressRegion": "BC",
            "postalCode": "V6B 1T7",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.2827,
            "longitude": -123.1207
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
              "latitude": 49.2827,
              "longitude": -123.1207
            },
            "geoRadius": "250km"
          },
          "knowsAbout": [
            "Web Development Vancouver",
            "Vancouver Island Web Development",
            "Web Design Vancouver",
            "Victoria Web Development",
            "IT Support Vancouver",
            "Vancouver Island IT Services",
            "Web Development Nanaimo",
            "Courtenay Web Development",
            "Custom Web Development Vancouver",
            "Victoria IT Services",
            "Business Technology Solutions Vancouver Island",
            "Web Design Port Alberni",
            "IT Support Port Alberni",
            "Comox Valley Web Development",
            "IT Services Parksville",
            "Web Developer Vancouver Island",
            "Technology Consulting Coastal BC"
          ]
        })
      }}
    />
  )
} 