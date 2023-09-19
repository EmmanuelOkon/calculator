import { useState } from "react";

import * as math from "mathjs";
import "@fontsource/poppins";

import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");

  const addToText = (val) => {
    let updatedText = text;

    if (
      (val === "•" && text.length === 0) ||
      (/[+÷X-]$/.test(text[text.length - 1]) && val === "•")
    ) {
      updatedText = ["0", val];
    } else {
      updatedText = [...text, val];
    }

    setText(updatedText);
  };

  const calculateResult = () => {
    const input = text.join("");
    setOperation(input);

    // Check if the input contains a percentage calculation (e.g., "10%" or "10 %")
    if (input.includes("%")) {
      const parts = input.split("%");

      // Check if there are two parts (number and percentage sign)
      if (parts.length === 2) {
        const number = parseFloat(parts[0]);
        const percentage = parseFloat(parts[1]);

        // Check if both parts are valid numbers
        if (!isNaN(number) && !isNaN(percentage)) {
          // Calculate the result as a percentage of the number
          const resultValue = (number * percentage) / 100;
          setResult(resultValue);
          setText("");
          return;
        }
      }
    }

    setResult(math.evaluate(input));
    setText("");
  };

  const resetInput = () => {
    setText("");
    setResult("");
    setOperation("");
  };

  // const buttonColor = "#BE123C";
  const buttonColor = "#EF7C00";
  const equalColor = "#008000";
  const clearColor = "#FF0000";

  return (
    <div className="bg-lightGray flex justify-center h-screen items-center   ">
      <div className="bg-ros bg-white px-4 py-6 w-[400px] rounded-2xl ">
        <Input operation={operation} text={text} result={result} />
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
          <Button symbol="." handleClick={addToText} />
          <Button symbol="0" handleClick={addToText} />
          <Button
            symbol="%"
            color={buttonColor}
            handleClick={addToText}
          />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="flex gap-4">
          <Button symbol="A/C" color={clearColor} handleClick={resetInput} />
          <Button symbol="=" color={equalColor} handleClick={calculateResult} />
        </div>
      </div>
    </div>
  );
};

export default App;
