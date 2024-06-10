import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("May 10 2024");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="counter-date">
      <div className="counter-box">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        {/* <button className="x" onClick={() => setStep((s) => s - 1)}>
          -
        </button> */}

        <p>Step: {step}</p>

        {/* <button className="x" onClick={() => setStep((s) => s + 1)}>
          +
        </button> */}
      </div>

      <div className="counter-box">
        <button className="x" onClick={() => setCount((c) => c - step)}>
          -
        </button>

        <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>

        <button className="x" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>

        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
