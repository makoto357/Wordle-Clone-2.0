import React, { useContext } from 'react';
import { useStore } from 'zustand';
import { StoreContext } from '@/store/useCreateStore';

interface GuessProps {
  rowIndex: number;
}

const Guess: React.FC<GuessProps> = ({ rowIndex }) => {
  const store = useContext(StoreContext);
  if (!store) throw new Error('Missing CounterContext.Provider in the tree');

  const { answer, currGuess, guesses } = useStore(store, (state) => state);

  function charBgColor(rowIndex: number, charIndex: number, char: string) {
    const isGuessed = rowIndex < currGuess;
    if (!isGuessed) return 'bg-white';
    if (answer.includes(char)) {
      if (answer[charIndex] === char) {
        return 'bg-macaron-red';
      }
      return 'bg-macaron-yellow';
    }
    return 'bg-white';
  }

  return (
    <div className="w-full items-center justify-between text-lg lg:flex">
      <div className="grid grid-cols-5 gap-2 mb-2">
        {new Array(5).fill('0').map((_, index) => (
          <div
            className={`h-16 w-16 rounded-full border-gray-400 font-bold uppercase text-black flex items-center justify-center 
            ${charBgColor(rowIndex, index, guesses[rowIndex][index])}
            `}
            key={`guessChar_${index}`}
          >
            {guesses[rowIndex][index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guess;
