const Header = ({ text }) => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-end justify-center h-[80px] md:h-[120px] lg:h-[190px]">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="text-4xl md:text-6xl lg:text-8xl font-bebas">
          {Array.from({ length: 10 }, (_, j) => (
            <span
              key={j}
              className={`${
                i === 1 && j === 9 ? "text-parts-orange" : "text-parts-gray-200"
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
