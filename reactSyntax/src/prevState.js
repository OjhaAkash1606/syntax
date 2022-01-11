import React, { useState, useEffect } from "react";
export function PreviousState() {
  let [count, setCount] = useState(0);
  let [preCount, setPreCount] = useState(0);
  /* function update() {
     setPreCount(count);
    console.log(preCount);
    let rand = Math.trunc(Math.random() * 10) + 1;
    setCount(rand);
    console.log(count);
    if (preCount !== count) {
      alert(count - preCount);
    } 
  } */

  /*
  // it is also working as preState

   function update() {
    let rand = Math.ceil(Math.random() * 10);

    setCount(() => {
      if (rand - count < 5) {
        console.log(rand - count);
      }
      console.log(count);
      console.log(rand);
      return rand;
    });
  } */

  // it is working as a preState

  function update() {
    let rand = Math.ceil(Math.random() * 10);

    setCount((pre) => {
      console.log(pre);
      if (rand - pre) {
        alert(rand - pre);
      }
      return rand;
    });
  }

  return (
    <div>
      <h3>Previous State</h3>
      {count} <br />
      <button onClick={() => update()}>Update</button>
    </div>
  );
}
