'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useGuesses } from '@/store/useGuesses';
import Guess from '@/components/Guess';
import MobileKeyboard from '@/components/MobileKeyboard';
import words from '../../public/words.json';

let answer = words[Math.floor(Math.random() * words.length)];

export default function Home() {
  const { currGuess, guesses, incrCurrGuess, setGuesses } = useGuesses();

  const handleKeyDown = (e: any) => {
    const char = e.currentTarget.textContent || e.key;

    if (char === 'Backspace') {
      guesses[currGuess] = guesses[currGuess].slice(
        0,
        guesses[currGuess].length - 1
      );
    }
    if (char === 'Enter') {
      if (currGuess < 6) {
        incrCurrGuess();
      }
    }
    if (guesses[currGuess].length < 5 && char.match(/^[A-z]$/)) {
      setGuesses(char);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 m-auto">
      <div>
        {guesses.map((_, index) => (
          <Guess rowIndex={index} key={`guessRow_${index}`} />
        ))}
      </div>
      <div>
        <MobileKeyboard handleKeyDown={handleKeyDown} />
      </div>
    </main>
  );
}
