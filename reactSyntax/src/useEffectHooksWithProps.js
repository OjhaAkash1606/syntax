import React, { useEffect, useState } from "react";
import Encourage from "./useEffectHooks";
export default function Enthusiastic() {
  const [data, setData] = useState("Akash");
  const [count, setCount] = useState(10);
  return (
    <div>
      <h3>Hello</h3>
      <Encourage
        Name={"Your Name is" + " " + data}
        Number={"Your number is" + " " + count}
      ></Encourage>{" "}
      <br />
      <button
        onClick={() => {
          setData("Hiral");
        }}
      >
        Update Name
      </button>{" "}
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Number
      </button>
    </div>
  );
}
