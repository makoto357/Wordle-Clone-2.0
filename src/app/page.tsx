'use client';

import { useContext, useEffect, useState } from 'react';
import { useStore } from 'zustand';
import Image from 'next/image';
import { StoreContext } from '@/store/useCreateStore';
import Guess from '@/components/Guess';
import MobileKeyboard from '@/components/MobileKeyboard';
import GameStatusModal from '@/components/GameStatusModal';
import GameInstructionPopover from '@/components/GameInstructionPopover';
import InvalidGuessAlert from '@/components/InvalidGuessAlert';
import restartGame from '../../public/restart-game.png';

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
    setCorrectlyGuessedChars,
    resetGameStatus
  } = useStore(store, (state) => state);

  const [isOpen, setIsOpen] = useState(false);
  const [alert, setAlert] = useState({ isOpen: false, textContent: '' });
  const allGuesses = guesses.map((guess) => guess.join(''));
  const win =
    allGuesses.includes(answer) && allGuesses[currGuess - 1] === answer;
  const lose = !allGuesses.includes(answer) && currGuess === 6;
  const displayedAnswer = answer.split('').map((a, index) => (
    <div
      className="flex items-center justify-center h-12 w-12 rounded-full border-gray-400 font-bold uppercase text-black bg-macaron-red"
      key={`ansChar_${index}`}
    >
      {a}
    </div>
  ));

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
        setAlert({
          isOpen: true,
          textContent: 'Not enough letters, can you think of a 5-letter word?'
        });
        return;
      }
      if (!wordlist.includes(guesses[currGuess].join(''))) {
        setAlert({
          isOpen: true,
          textContent: 'Not in word list, please choose another word!'
        });
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
    if (win || lose) {
      setIsOpen(true);
    }
  }, [allGuesses, setIsOpen]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (alert.isOpen) {
      timeoutId = setTimeout(
        () => setAlert({ isOpen: false, textContent: '' }),
        1500
      );
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [alert, setAlert]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <main className="flex min-h-screen flex-col items-center p-6 m-auto relative">
      <GameStatusModal
        isOpen={isOpen}
        onClose={() => {
          resetGameStatus();
          setIsOpen(false);
        }}
        dialogTitle={win ? 'YOU WIN!' : 'YOU LOSE!'}
        dialogDesc={
          <>
            <div className="mb-12">The answer is</div>
            <div className="flex items-center justify-center gap-2 mb-12">
              {displayedAnswer}
            </div>
          </>
        }
      />
      {alert.isOpen && <InvalidGuessAlert textContent={alert.textContent} />}
      <div>
        <div className="flex gap-2 mb-6 justify-end">
          <button
            className="bg-white p-1 rounded-full text-center outline-none"
            onClick={resetGameStatus}
          >
            <Image src={restartGame} alt="play again" width="36" />
          </button>
          <GameInstructionPopover />
        </div>
        <div className="mb-6">
          {guesses.map((_, index) => (
            <Guess rowIndex={index} key={`guessRow_${index}`} />
          ))}
        </div>
        <div>
          <MobileKeyboard handleKeyDown={handleKeyDown} />
        </div>
      </div>
    </main>
  );
}
