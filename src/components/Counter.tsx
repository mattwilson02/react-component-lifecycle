import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // If StrictMode is enabled, the return of a useEffect will run on mounting and unmounting, in order to detect unexpected side effects in development mode
  // https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects

  // component did mount
  useEffect(() => {
    console.log("component mounted");
  }, []);

  // component did update
  useEffect(() => {
    console.log("component and count updated");
  }, [count]);

  // component did unmount
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  }, []);

  return (
    <div>
      <h1> Count: {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
