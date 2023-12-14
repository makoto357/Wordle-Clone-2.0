import React from 'react';
import { useGuesses } from '@/store/useGuesses';

interface GuessProps {
  rowIndex: number;
}

const Guess: React.FC<GuessProps> = ({ rowIndex }) => {
  const { answer, currGuess, guesses } = useGuesses();
  function charBgColor(rowIndex: number, charIndex: number, char: string) {
    const isGuessed = rowIndex < currGuess;
    if (!isGuessed) return;
    if (answer.includes(char)) {
      if (answer[charIndex] === char) {
        return 'bg-green-400';
      }
      return 'bg-yellow-400';
    }
    return 'bg-black';
  }

  return (
    <div className="w-full items-center justify-between text-sm lg:flex">
      <div className="grid grid-cols-5 gap-2 mb-2">
        {new Array(5).fill('0').map((_, index) => (
          <div
            className={`h-16 w-16 border border-gray-400 font-bold uppercase text-white flex items-center justify-center 
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
