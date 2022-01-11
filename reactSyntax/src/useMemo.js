import React, { useState, useMemo } from "react";
export function Memo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);
  let multiCount = useMemo(function () {
    console.log("render");
    return count * 2;
  }, []);
  return (
    <div>
      {console.log("re-rendering")}
      <h2> Count : {count}</h2>
      <h2>Number : {number}</h2>
      <h2>MultiCount : {multiCount} </h2>
      <button
        onClick={() => {
          setCount(count);
        }}
      >
        Count
      </button>
      &nbsp;
      <button
        onClick={() => {
          setNumber(number);
        }}
      >
        Number
      </button>
    </div>
  );
}
