import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input/Input.component";
import Keyboard from "./components/Keyboard/Keyboard.component";

function App() {
  const [value, setValue] = useState<string>("");
  const [rightToLeft, setRightToLeft] = useState<boolean>(true);
  useEffect(() => {
    if (value[0] === "-") {
      setValue(value.slice(1));
    }
  }, [value]);
  return (
    <div className="App">
      <h4>𐤐𐤕 𐤇𐤃𐤔</h4>
      <Input rightToLeft={rightToLeft} value={value} />
      <Keyboard
        rightToLeft={rightToLeft}
        setRightToLeft={setRightToLeft}
        value={value}
        setValue={setValue}
      />
    </div>
  );
}

export default App;
