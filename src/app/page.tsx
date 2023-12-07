import Image from 'next/image';
import Guess from '@/components/Guess';
import MobileKeyboard from '@/components/MobileKeyboard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Guess />
      <MobileKeyboard />
    </main>
  );
}
