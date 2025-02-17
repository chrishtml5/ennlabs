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
        <link rel="icon" href="/combined.svg" type="image/x-icon" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="EnnLabs" />
        <meta property="og:description" content="A venture studio focused on building a family of consumer products." />
        <meta property="og:image" content="https://ennlabs.com/combined.svg" />
        <meta property="og:url" content="http://ennlabs.com" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
