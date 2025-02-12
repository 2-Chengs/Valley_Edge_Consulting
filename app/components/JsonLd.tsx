export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Valley Edge Consulting",
          description: "Expert software development and cloud solutions for businesses",
          url: "https://www.valleyedgeconsulting.io",
          logo: "https://www.valleyedgeconsulting.io/logo.png",
          sameAs: [
            "https://linkedin.com/company/valley-edge-consulting",
            "https://github.com/valley-edge-consulting"
            // Add other social media URLs
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-XXX-XXX-XXXX",
            contactType: "customer service",
            email: "contact@valleyedgeconsulting.io"
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Your City",
            addressRegion: "Your State",
            addressCountry: "US"
          }
        })
      }}
    />
  )
} 