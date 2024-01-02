'use client';

import '../globals.css';
import { StoreContextProvider } from '@/store/useCreateStore';
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <StoreContextProvider>{children}</StoreContextProvider>
      </body>
    </html>
  );
}
