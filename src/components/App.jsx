import { useState } from "react";
import DisplayArea from "./DisplayArea";
import ButtonsArea from "./ButtonsArea";
import Button from "./Button";
import { create, all } from "mathjs";

function App() {
  const [operations, setOperations] = useState([]);

  const config = {};
  const math = create(all, config);

  const handleClick = (e) => {
    const value = e.target.getAttribute("value");
    console.log(operations);
    switch (value) {
      case "clear":
        setOperations([]);
        break;

      case "equal":
        calculateOperations();
        break;

      default:
        setOperations([...operations, value]);
        break;
    }
  };

  const calculateOperations = () => {
    let result = operations.join("");
    console.log(result);
    if (result) {
      result = math.evaluate(result);
      result = math.format(result, { precision: 14 });
      result = String(result);
      setOperations(result);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-red-300 px-8">
        <h1 className="text-4xl font-semibold">Calculator App</h1>
        <div className="max-w-sm w-full m-8 rounded-t-xl border-[1px] border-slate-400">
          <DisplayArea data={operations}></DisplayArea>
          <ButtonsArea>
            {/* Buttons column */}
            <div className="flex-auto">
              <Button
                onClick={handleClick}
                label="C"
                value="clear"
                color="#F7C86E"
              />
              <Button onClick={handleClick} label="7" value="7" />
              <Button onClick={handleClick} label="4" value="4" />
              <Button onClick={handleClick} label="1" value="1" />
              <Button onClick={handleClick} label="0" value="0" />
            </div>
            {/* Buttons column */}
            <div className="flex-auto">
              <Button
                onClick={handleClick}
                label="/"
                value="/"
                color="#F7C86E"
              />
              <Button onClick={handleClick} label="8" value="8" />
              <Button onClick={handleClick} label="5" value="5" />
              <Button onClick={handleClick} label="2" value="2" />
              <Button onClick={handleClick} label="," value="." />
            </div>
            {/* Buttons column */}
            <div className="flex-auto flex flex-col">
              <Button
                onClick={handleClick}
                label="x"
                value="*"
                color="#F7C86E"
              />
              <Button onClick={handleClick} label="9" value="9" />
              <Button onClick={handleClick} label="6" value="6" />
              <Button onClick={handleClick} label="3" value="3" />
              <Button label="" value="null" isFiller />
            </div>
            {/* Buttons column */}
            <div className="flex-auto flex flex-col">
              <Button
                onClick={handleClick}
                label="-"
                value="-"
                color="#F7C86E"
              />
              <Button
                onClick={handleClick}
                label="+"
                size="2"
                value="+"
                color="#F7C86E"
                isFiller
              />
              <Button
                onClick={handleClick}
                label="="
                size="2"
                value="equal"
                color="#F7C86E"
                isFiller
              />
            </div>
          </ButtonsArea>
        </div>
        <h3>Made by Carlos Exojo</h3>
      </div>
    </>
  );
}

export default App;
