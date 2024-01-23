import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevcount) => prevcount - 1);
  }
  function incrementCount() {
    setCount((prevcount) => prevcount + 1);
  }
  function reset() {
    setCount((count = 0));
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <button onClick={reset}>Reset Count</button>
    </>
  );
}

export default App;
4.39;
