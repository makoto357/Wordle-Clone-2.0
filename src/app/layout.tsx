'use client';

import { Inter } from 'next/font/google';
import '../globals.css';
import { StoreContextProvider } from '@/store/useCreateStore';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-24 flex justify-center items-center">
          <h1 className="text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">
            Wordle
          </h1>
        </div>
        <StoreContextProvider>{children}</StoreContextProvider>
      </body>
    </html>
  );
}
