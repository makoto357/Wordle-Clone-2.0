import { useGuesses } from '@/store/useGuesses';

interface MobileKeyboardProps {
  handleKeyDown: any;
}

const MobileKeyboard: React.FC<MobileKeyboardProps> = ({ handleKeyDown }) => {
  const { answer, currGuess, guesses, correctlyGuessedChars } = useGuesses();

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
          return 'bg-green-400';
        }
        return 'bg-yellow-400';
      }
      return 'bg-slate-400';
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
                className={`p-2 text-black font-bold uppercase flex-1 rounded ${
                  keyboardChar === '' && 'pointer-events-none'
                } ${keyBgColor(keyboardChar)}`}
                onClick={handleKeyDown}
                key={`${keyboardChar}${index}`}
              >
                {keyboardChar}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileKeyboard;
