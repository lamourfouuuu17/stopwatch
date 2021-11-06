import React from "react";

function Timer({ time }) {
  return (
    <div className="timer" style={{ fontSize: "20px" }}>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
    </div>
  );
}

export default Timer;
