interface InvalidGuessAlertProps {
  textContent: string;
}

const InvalidGuessAlert: React.FC<InvalidGuessAlertProps> = ({
  textContent
}) => {
  return (
    <div className="absolute rounded p-4 bg-white text-black z-10 top-24">
      {textContent}
    </div>
  );
};

export default InvalidGuessAlert;
