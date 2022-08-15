import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  console.log("APP RUNNING");
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(
    (event) => {
      if (allowToggle) {
        setShowParagraph((prevShowParagraph) => !prevShowParagraph);
      }
    },
    [allowToggle]
  );

  const allowToggleHandler = () => {
    setAllowToggle((prevAllowToggle) => !prevAllowToggle);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
