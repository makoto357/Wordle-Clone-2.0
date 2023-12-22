import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import restartGame from '../../public/restart-game.png';

interface GameStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  dialogTitle: string;
  dialogDesc: React.ReactNode;
}

const GameStatusModal: React.FC<GameStatusModalProps> = ({
  isOpen,
  onClose,
  dialogTitle,
  dialogDesc
}) => {
  return (
    <Dialog
      className="relative z-50 text-black"
      open={isOpen}
      onClose={onClose}
    >
      <div className="fixed inset-0 bg-white/50" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-3">
        <Dialog.Panel className="w-full max-w-sm rounded bg-macaron-blue p-6 text-center">
          <Dialog.Title className="mb-3 text-lg font-bold">
            {dialogTitle}
          </Dialog.Title>
          <Dialog.Description className="mb-3">{dialogDesc}</Dialog.Description>
          <button
            className="bg-white p-1 rounded-full text-center outline-none"
            onClick={onClose}
          >
            <Image src={restartGame} alt="play again" width="30" />
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default GameStatusModal;
