const Button = ({ symbol, color, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className="font-light font-poppins h-16 w-full mx-auto flex justify-center mt-4 items-center text-2xl bg-[#5A5A5A] flex-1 m-1 text-white rounded-md hover:cursor-pointer"
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
};

export default Button;
