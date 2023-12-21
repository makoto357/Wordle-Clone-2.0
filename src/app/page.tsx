'use client';

import { useContext, useEffect } from 'react';
import { useStore } from 'zustand';
import Image from 'next/image';
import { StoreContext } from '@/store/useCreateStore';
import Guess from '@/components/Guess';
import MobileKeyboard from '@/components/MobileKeyboard';

export default function Home() {
  const store = useContext(StoreContext);
  if (!store) throw new Error('Missing CounterContext.Provider in the tree');

  const {
    answer,
    wordlist,
    currGuess,
    guesses,
    incrCurrGuess,
    setGuesses,
    setCorrectlyGuessedChars
  } = useStore(store, (state) => state);
  console.log('XXX ans', answer);

  const allGuesses = guesses.map((guess) => guess.join(''));

  const handleKeyDown = (e: any) => {
    const char = e.currentTarget.textContent || e.key;
    if (char === 'Backspace') {
      guesses[currGuess] = guesses[currGuess].slice(
        0,
        guesses[currGuess].length
      );
      setGuesses('', 'delete');
      return;
    }
    if (char === 'Enter') {
      if (
        currGuess === 6 ||
        (allGuesses.includes(answer) && allGuesses[currGuess - 1] === answer)
      )
        return;
      if (guesses[currGuess].length < 5) {
        alert('Not enough letters, can you think of a 5-letter word?');
        return;
      }
      if (!wordlist.includes(guesses[currGuess].join(''))) {
        alert('Not in word list, please choose another word:)');
        return;
      }
      if (guesses[currGuess].length === 5) {
        const rightGuessedChars = guesses[currGuess]
          .map((char, index) => {
            if (char === answer[index]) {
              return char;
            }
          })
          .filter((char) => {
            if (char !== undefined) return char;
          });
        setCorrectlyGuessedChars(rightGuessedChars as string[]);
        incrCurrGuess();
      }
      if (guesses[currGuess].join('') === answer) {
        return;
      }
    }

    if (guesses[currGuess].length < 5 && char.match(/^[A-z]$/)) {
      setGuesses(char, 'add');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <main className="flex min-h-screen flex-col items-center p-6 m-auto">
      {allGuesses.includes(answer) && allGuesses[currGuess - 1] === answer && (
        <div className="mb-4 text-md whitespace-nowrap text-black font-semibold">
          <h1>You won! The answer is {answer}.</h1>
        </div>
      )}
      {!allGuesses.includes(answer) && currGuess === 6 && (
        <div className="mb-4 text-md whitespace-nowrap text-black font-semibold">
          <h1>You lost! The answer is {answer}.</h1>
        </div>
      )}
      <div className="mb-6">
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
