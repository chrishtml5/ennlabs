import './globals.css';

export const metadata = {
  title: 'EnnLabs',
  description: 'A venture studio focused on building a family of consumer products',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>EnnLabs</title>
        <meta name="description" content="A venture studio focused on building a family of consumer products." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="EnnLabs" />
        <meta property="og:description" content="A venture studio focused on building a family of consumer products." />
        <meta property="og:image" content="https://ennlabs.com/ennlabs.svg" /> {/* Replace with actual image URL */}
        <meta property="og:url" content="http://ennlabs.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "EnnLabs",
            "url": "http://ennlabs.com",
            "logo": "https://ennlabs.com/ennlabs.svg",  // Replace with actual logo URL
            "description": "A venture studio focused on building a family of consumer products."
          }
          `}
        </script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
