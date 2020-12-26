import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input.component";
import Keyboard from "./components/Keyboard/Keyboard.component";

function App() {
  const [value, setValue] = useState<string>("");
  const resetVal = () => setValue("");
  // const [rightToLeft, setRightToLeft] = useState<boolean>(true);
  // const changeDirection = () => {
  //   setValue("");
  //   setRightToLeft(!rightToLeft);
  // }
  return (
    <div className="App">
      <h4>Phoenician Mobile Keyboard</h4>
      <Input value={value} />
      <Keyboard
        value={value}
        setValue={setValue}
      />
      <p onClick={() => resetVal()}>Reset</p>
      {/* <p onClick={() => changeDirection()}>Delete text and change text direction</p> */}
    </div>
  );
}

export default App;
