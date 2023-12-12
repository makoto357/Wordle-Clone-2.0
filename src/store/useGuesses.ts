import { create } from 'zustand';

interface StoreState {
  currGuess: number;
  guesses: string[][];
  incrCurrGuess: () => void;
  setGuesses: () => void;
}

export const useGuesses = create<StoreState>((set) => {
  return {
    currGuess: 0,
    guesses: [],
    incrCurrGuess: () => set((state) => ({ currGuess: state.currGuess + 1 })),
    setGuesses: () => set((state) => ({ guesses: state.guesses }))
  };
});
