import React, { useState, useEffect } from "react";
import { PrevProps2 } from "./prevProps2";
export function PrevProps() {
  let [count, setCount] = useState(0);
  function updateData() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>PrevProps</h3>
      {/* {console.log(count)} */}
      <PrevProps2 state={count}></PrevProps2>
      <button
        onClick={() => {
          updateData();
        }}
      >
        Update
      </button>
      {/* {console.log(count)} */}
    </div>
  );
}
