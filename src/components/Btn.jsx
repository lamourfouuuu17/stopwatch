import React from "react";
import "./Btn.scss";

function Btn({ state, start, stop, reset, waitDouble }) {
  return (
    <div>
      {state === 1 ? (
        <button className="btn" onClick={start}>
          Start
        </button>
      ) : (
        ""
      )}

      {state === 2 ? (
        <div>
          <button className="btn" onClick={stop}>
            Stop
          </button>
        </div>
      ) : (
        ""
      )}

      {state === 3 ? (
        <div>
          <button className="btn" onDoubleClick={waitDouble}>
            Wait
          </button>

          <button className="btn" onClick={reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Btn;
