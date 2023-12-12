'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useGuesses } from '@/store/useGuesses';
import Guess from '@/components/Guess';
import MobileKeyboard from '@/components/MobileKeyboard';

export default function Home() {
  const { currGuess, guesses, incrCurrGuess, setGuesses } = useGuesses();

  const handleKeyup = (e: any) => {
    const char = e.currentTarget.textContent;
    console.log('XXX e', char);
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);
    return () => {
      window.removeEventListener('keyup', handleKeyup);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 m-auto">
      <div>
        {new Array(6).fill(0).map((_, index) => (
          <Guess />
        ))}
      </div>
      <div>
        <MobileKeyboard handleKeyup={handleKeyup} />
      </div>
    </main>
  );
}
