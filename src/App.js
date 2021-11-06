import "./App.css";
import React, { useState, useEffect } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import Timer from "./components/Timer";
import Btn from "./components/Btn";

function App() {
  const [state, setState] = useState(1);
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);

  useEffect(() => {
    const x = new Subject(); //разновидность объекта Observable

    interval(10)
      .pipe(takeUntil(x))
      .subscribe(() => {
        if (timeOn) {
          setTime((num) => num + 10);
        }
      });
    return () => {
      x.next();
      x.complete();
    };
  }, [timeOn]);

  const Start = () => {
    setTimeOn((change) => !change);
    setState(2);
  };

  const Stop = () => {
    setTimeOn(false);
    setState(3);
  };

  const Reset = () => {
    setTime(0);
    setTimeOn(false);
    setState(1);
  };

  // const Wait = () => {
  //   if (timer) clearTimeout(timer);
  //   timer = setTimeout(function () {
  //     Start();
  //   }, 1000);
  // };

  const WaitDoubleClick = () => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(function () {
      Start();
    }, 300);
  };

  return (
    <div className="App">
      <div
        className="timer-app"
        style={{ margin: "0 auto", marginTop: "200px" }}
      >
        <Timer time={time} />
        <Btn
          state={state}
          start={Start}
          stop={Stop}
          reset={Reset}
          waitDouble={WaitDoubleClick}
        />
      </div>
    </div>
  );
}

export default App;
