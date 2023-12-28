const Header = ({ text }) => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-end justify-center h-[80px] md:h-[120px] lg:h-[190px]">
      {Array.from({ length: 3 }).map((_, row) => (
        <div key={row} className="text-4xl md:text-6xl lg:text-8xl font-bebas">
          {Array.from({ length: 10 }, (_, col) => (
            <span
              key={col}
              className={`${
                row === 1 && col === 9
                  ? "text-parts-orange"
                  : "text-parts-gray-200"
              }`}
            >
              {text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Header;
