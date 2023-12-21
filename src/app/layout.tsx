'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import '../globals.css';
import { StoreContextProvider } from '@/store/useCreateStore';
import websiteLogo from '../../public/wordle-logo.png';

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
          <Image src={websiteLogo} alt="website logo" width="300" priority />
        </div>
        <StoreContextProvider>{children}</StoreContextProvider>
      </body>
    </html>
  );
}
