import Image from 'next/image';
import Guess from '@/components/Guess';
import MobileKeyboard from '@/components/MobileKeyboard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 m-auto">
      <div>
        {new Array(6).fill(0).map((_, index) => (
          <Guess />
        ))}
      </div>
      <div>
        <MobileKeyboard />
      </div>
    </main>
  );
}
