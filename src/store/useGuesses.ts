import { create } from 'zustand';

interface StoreState {
  currGuess: number;
  guesses: string[][];
  incrCurrGuess: () => void;
  setGuesses: (char: string) => void;
}

export const useGuesses = create<StoreState>((set) => {
  return {
    currGuess: 0,
    guesses: Array.from({ length: 6 }, () => []),
    incrCurrGuess: () => set((state) => ({ currGuess: state.currGuess + 1 })),
    setGuesses: (char) =>
      set((state) => {
        state.guesses[state.currGuess].push(char);
        return { guesses: state.guesses };
      })
  };
});
