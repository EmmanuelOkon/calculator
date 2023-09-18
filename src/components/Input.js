
const Input = ({ text, result }) => {
  return (
    <div className="h-[10em] flex justify-end items-end flex-col p-4 ">
      <div className="flex-1 text-2xl">
        <h1>{result}</h1>
      </div>

      <div className="flex text-lg font-semibold">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Input;

