import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/styles/index.scss';
import { Navbar } from '@/app/components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Евгений Шкуратов',
  description: 'Lead Product Designer Помогаю расти дизайнерам и бизнесу',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/fav.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="main">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
