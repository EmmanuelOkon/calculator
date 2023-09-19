const Input = ({ text, operation, result }) => {
  return (
    <div className="h-[10em] flex gap- justify-end items-end flex-col  space-y-2   font-poppins">
    
      <div className="text-right border border-lightGray p-2 font-bold w-full ">

        <h1 className="text-lg ">{operation}</h1>
        <h1 className="text-3xl" style={{ overflowWrap: "break-word" }}>{result}</h1>
      </div>

      <div className="flex justify-end border border-lightGray text-lg font-semibold h-10 p-2 w-full">
        <h3 className="h-5">{text}</h3>
      </div>
    </div>
  );
};

export default Input;
