import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [sentence, setSentence] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [keyCount, setKeyCount] = useState(0);
  const [keyCounted, setKeyCounted] = useState(false);
  const [accuraccy, setAccuraccy] = useState(0);
  // const [timeShow, setTimeShow] = useState(30);

  // const rightkey = []
  // const wrongket = []

  // console.log(sentence.length)
  function randomSentence() {
    const inputs = "abcd efghijklmn opqrst uvw xyz";
    //Sween Khan
    let setpara = "";

    for (let i = 0; i < 15; i++) {
      let checkEmptySpace = "";
      checkEmptySpace += inputs[Math.floor(Math.random() * inputs.length)];

      if (" " === checkEmptySpace.slice(0, 1)) {
        console.log("space in first");
        i = 0;
        setpara = "";
      } else if (" " === checkEmptySpace.substring(4, 5)) {
        console.log("space in last");
        i = 0;
        setpara = "";
      } else {
        setpara += inputs[Math.floor(Math.random() * inputs.length)];
      }
    }

    setSentence(setpara);
    console.log(setpara);
    console.log(setpara.length);
  }

  useEffect(() => {
    randomSentence();
  }, []);

  const isCorrect = inputValue === sentence.slice(0, inputValue.length);

  function handleKey() {
    setKeyCount(keyCount + 1);
    if (isCorrect) {
      // let count = 30;

      setTimeout(() => {
        setKeyCounted(true);
      }, 15000);

      if (sentence.length === inputValue.length) {
        setAccuraccy(Math.floor((sentence.length / (keyCount + 1)) * 100));
      } else {
        setAccuraccy(0);
      }
    }
  }

  function handleRef() {
    setAccuraccy(0);
    setKeyCounted(false);
    setKeyCount(0);
    setInputValue("");
    randomSentence();
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="main">
            {/* <p>{timeShow}</p> */}
            <h1>Touch Typing Project</h1>
            <h3> Type the sentence below:</h3>
          </div>
          <h2
            className="showSent"
            style={{ color: isCorrect ? "green" : "red" }}
          >
            {" "}
            {sentence}
          </h2>
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyUp={handleKey}
            value={inputValue}
            placeholder="Start Typing"
          />
          {keyCounted ? (
            <div className="minibox">
              <h2> keyCount:{keyCount}</h2>
              <h3 className="accTag">accuracy:{accuraccy} %</h3>
              <button onClick={handleRef}>Click Me</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
