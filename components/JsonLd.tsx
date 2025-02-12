export default function JsonLd() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Valley Edge Consulting",
      "description": "Expert software development and cloud solutions for businesses",
      "url": "https://valleyedgeconsulting.io",
      "logo": "https://valleyedgeconsulting.io/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@valleyedgeconsulting.io"
      }
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }