export default function Guess() {
  return (
    <div className="w-full items-center justify-between text-sm lg:flex">
      <div className="grid grid-cols-5 gap-2 mb-2">
        {new Array(5).fill(0).map((_, index) => (
          <div
            className={`h-16 w-16 border border-gray-400 font-bold uppercase text-white flex items-center justify-center`}
          >
            {index}
          </div>
        ))}
      </div>
    </div>
  );
}