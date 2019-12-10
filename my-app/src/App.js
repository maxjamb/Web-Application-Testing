import React, { useState } from "react";
import Display from "./Components/Display";
import Dashboard from "./Components/Dashboard";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);
  const [hit, setHit] = useState(0);
  const [foul, setFoul] = useState(0);

  //**----Count Rules----**/

  //reset function
  const reset = (ball, strike, hit) => {
    ball = 0;
    strike = 0;
    hit = 0;
    return ball && strike && hit;
  };
  if (ball === 5 || strike === 4 || hit === 1) {
    setCount(reset(count));
    setBall(reset(ball));
    setStrike(reset(strike));
    setHit(reset(hit));
    setFoul(reset(foul));
  }

  return (
    <div className="App">
      <Display
        strike={strike}
        ball={ball}
        setStrike={setStrike}
        hit={hit}
        setHit={setHit}
      />
      <Dashboard
        strike={strike}
        ball={ball}
        setStrike={setStrike}
        setBall={setBall}
        hit={hit}
        setHit={setHit}
      />
    </div>
  );
};

export default App;
