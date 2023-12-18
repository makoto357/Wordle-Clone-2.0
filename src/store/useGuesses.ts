import { create } from 'zustand';
import words from '../../public/words.json';

interface StoreState {
  answer: string;
  wordlist: string[];
  currGuess: number;
  guesses: string[][];
  correctlyGuessedChars: string[];
  incrCurrGuess: () => void;
  setGuesses: (char: string, action: string) => void;
  setCorrectlyGuessedChars: (char: string[]) => void;
}

export const useGuesses = create<StoreState>((set) => {
  return {
    answer: words[Math.floor(Math.random() * words.length)],
    wordlist: words,
    currGuess: 0,
    guesses: Array.from({ length: 6 }, () => []),
    correctlyGuessedChars: [],
    incrCurrGuess: () => set((state) => ({ currGuess: state.currGuess + 1 })),
    setGuesses: (char, action) =>
      set((state) => {
        if (action === 'add') {
          state.guesses[state.currGuess].push(char);
        } else if (action === 'delete') {
          state.guesses[state.currGuess].pop();
        }
        return { guesses: state.guesses };
      }),
    setCorrectlyGuessedChars: (chars) =>
      set((state) => {
        chars.map((char) => state.correctlyGuessedChars.push(char));
        return {
          correctlyGuessedChars: state.correctlyGuessedChars
        };
      })
  };
});
