export default function MobileKeyboard() {
  const keyboardKeys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ''],
    ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
  ];

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
      <div>
        {keyboardKeys.map((keyboardRow, index) => (
          <div className="flex justify-center space-x-1 my-2">
            {keyboardRow.map((keyboardChar, index) => (
              <button
                className={`p-2 text-black font-bold uppercase flex-1 rounded ${
                  keyboardChar === '' ? 'pointer-events-none' : 'bg-white'
                }`}
              >
                {keyboardChar}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
