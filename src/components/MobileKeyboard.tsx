import { useContext } from 'react';
import { useStore } from 'zustand';
import { StoreContext } from '../store/useCreateStore';
import Image from 'next/image';
import backSpace from '../../public/backspace.png';

interface MobileKeyboardProps {
  handleKeyDown: any;
}

const MobileKeyboard: React.FC<MobileKeyboardProps> = ({ handleKeyDown }) => {
  const store = useContext(StoreContext);
  if (!store) throw new Error('Missing CounterContext.Provider in the tree');

  const { answer, currGuess, guesses, correctlyGuessedChars } = useStore(
    store,
    (state) => state
  );

  const keyboardKeys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ''],
    ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
  ];

  function keyBgColor(key: string) {
    if (key === '') return;
    if (currGuess === 0) return 'bg-white';
    const coloredKey = guesses.slice(0, currGuess).join();
    if (coloredKey.includes(key)) {
      if (answer.includes(key)) {
        if (correctlyGuessedChars.includes(key)) {
          return 'bg-macaron-red';
        }
        return 'bg-macaron-yellow';
      }
      return 'bg-macaron-blue';
    }
    return 'bg-white';
  }

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
      <div>
        {keyboardKeys.map((keyboardRow, index) => (
          <div
            className="flex justify-center space-x-1 my-2"
            key={`keyboardRow_${index}`}
          >
            {keyboardRow.map((keyboardChar, index) => (
              <button
                key={`${keyboardChar}${index}`}
                onClick={handleKeyDown}
                className={`font-bold uppercase flex-1 rounded
                ${keyBgColor(keyboardChar)}
                ${keyboardChar === '' && 'outline-none pointer-events-none'} 
                ${
                  keyboardChar === 'Backspace'
                    ? 'text-transparent text-xs'
                    : 'p-1 sm:p-2 text-black'
                }
                `}
              >
                <div className="relative">
                  {keyboardChar}
                  {keyboardChar === 'Backspace' && (
                    <div className="absolute -top-2 right-6">
                      <Image src={backSpace} alt="Backspace" width="34" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileKeyboard;
