import Image from 'next/image';
import { Popover } from '@headlessui/react';
import howToPlay from '../../public/wordle-icon.png';

const CustomIcon = () => <Image src={howToPlay} alt="How to play" width="36" />;

function GameInstructionPopover() {
  return (
    <Popover className="relative">
      <Popover.Button className="bg-white p-1 rounded-full text-center outline-none">
        <CustomIcon />
      </Popover.Button>
      <Popover.Panel className="absolute top-16 right-1/2 z-10 bg-macaron-blue text-black rounded">
        <div className="flex flex-col gap-3 w-full max-w-sm bg-macaron-blue p-6 rounded">
          <h1 className="text-xl font-bold text-center">How To Play</h1>
          <p className="text-lg">Guess the Wordle in 6 tries:</p>
          <ul className="list-disc mb-6">
            <li>Each guess must be a valid 5-letter word.</li>
            <li>
              The color of the tiles will change to show how close your guess
              was to the word.
            </li>
          </ul>
          <strong>Examples</strong>
          <div className="flex items-center justify-center gap-2">
            {'paint'.split('').map((char, index) => (
              <div
                className={`flex items-center justify-center h-12 w-12 rounded-full border-gray-400 font-bold uppercase text-black ${
                  index === 0 ? 'bg-macaron-red' : 'bg-white'
                }`}
                key={`char${index}`}
              >
                {char}
              </div>
            ))}
          </div>
          <p className="mb-6">
            <strong>P</strong> is in the word and in the correct spot.
          </p>
          <div className="flex items-center justify-center gap-2">
            {'mount'.split('').map((char, index) => (
              <div
                className={`flex items-center justify-center h-12 w-12 rounded-full border-gray-400 font-bold uppercase text-black ${
                  index === 2 ? 'bg-macaron-yellow' : 'bg-white'
                }`}
                key={`char${index}`}
              >
                {char}
              </div>
            ))}
          </div>
          <p>
            <strong>U</strong> is in the word but in the wrong spot.
          </p>
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export default GameInstructionPopover;
