import { useState } from "react";

import * as math from "mathjs";
import "@fontsource/poppins";

import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };

  const calculateResult = () => {
    try {
      const input = text.join("");
      const resultValue = math.evaluate(input);
      setResult(resultValue.toString()); 
    } catch (error) {
      setResult("Error"); 
    }
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  // const buttonColor = "#BE123C";
  const buttonColor = "#EF7C00";
  const equalColor = "#008000";
  const clearColor = "#FF0000";

  return (
    <div className="bg-lightGray flex justify-center h-screen items-center   ">
      <div className="bg-ros bg-white px-4 pb-6 w-[400px] rounded-2xl ">
        <Input text={text} result={result} />
        <div className="flex gap-4 ">
          <Button
            className="hover:cursor-pointer"
            symbol="7"
            handleClick={addToText}
          />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="flex gap-4 ">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="flex gap-4 ">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="flex gap-4">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" color={equalColor} handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="flex">
          <Button
            symbol="Clear"
            color={clearColor}
            // className="flex justify-center items-center text-2xl bg-[#5A5A5A] flex-1 m-1 text-white rounded-md hover:cursor-pointer"

            handleClick={resetInput}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
