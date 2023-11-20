import { useEffect, useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <>
      <h1>Our App</h1>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide" : "Show"} counter
      </button>
      {showCounter && <Counter />}
    </>
  );
}

export default App;
