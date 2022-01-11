import React, { useRef } from "react";
export function FunUseRef() {
  let myRef = useRef(null);
  function getData() {
    myRef.current.value = 500; //to put value
    console.log(myRef.current.value); //to get value
    myRef.current.focus(); //to focus in input field
    myRef.current.style.display = "none"; // to hide display
  }
  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={getData}>Click</button>
    </div>
  );
}
