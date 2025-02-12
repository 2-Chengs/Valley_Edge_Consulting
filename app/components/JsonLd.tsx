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
          url: "https://www.valleyedgeconsulting.io"
        })
      }}
    />
  )
} 