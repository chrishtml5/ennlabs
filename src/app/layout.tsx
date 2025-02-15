import './globals.css';

export const metadata = {
  title: 'EnnLabs',
  description: 'A venture studio focused on building a family of consumer products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
