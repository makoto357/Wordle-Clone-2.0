import { createContext } from 'react';
import { createStore } from 'zustand';
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
  resetGameStatus: () => void;
}

const useCreateStore = createStore<StoreState>((set) => {
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
      }),
    resetGameStatus: () =>
      set(() => {
        return {
          answer: words[Math.floor(Math.random() * words.length)],
          wordlist: words,
          currGuess: 0,
          guesses: Array.from({ length: 6 }, () => []),
          correctlyGuessedChars: []
        };
      })
  };
});

const StoreContext = createContext<typeof useCreateStore | null>(null);

function StoreContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <StoreContext.Provider value={useCreateStore}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContextProvider, StoreContext };
