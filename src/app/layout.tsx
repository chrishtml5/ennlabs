import './globals.css';

export const metadata = {
  title: 'EnnLabs',
  description: 'A venture studio focused on building a family of consumer products',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
