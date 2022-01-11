/* import React, { useEffect, useState } from "react";

export default function Conspiracy() {
  const [conspiracy, setConspiracy] = useState("Punjab");
  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div>
      <h3>Hello {conspiracy} useEffect </h3>
      <button
        onClick={() => {
          setConspiracy("Uttar Pradesh");
        }}
      >
        Update
      </button>
    </div>
  );
} */

/* import React, { useState, useEffect } from "react";
export default function Conspiracy() {
  const [belch, setBelch] = useState(10);
  const [snores, setSnores] = useState(100);

  useEffect(() => {
    alert("useEffect for Snores");
  }, [snores]);
  useEffect(() => {
    alert("useEffect for belch");
  }, [belch]);

  return (
    <div>
      <h3>Hello Akash</h3>
      {"Belch is" + " " + belch} <br />
      {"Snores is" + " " + snores} <br />
      <button
        onClick={() => {
          setBelch(belch + 1);
        }}
      >
        Update Belch
      </button>{" "}
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button
        onClick={() => {
          setSnores(snores + 2);
        }}
      >
        Update Snores
      </button>
    </div>
  );
}
 */
import React, { useEffect } from "react";
export default function Encourage(props) {
  useEffect(() => {
    alert(props.Name);
  }, [props.Name]);
  useEffect(() => {
    alert(props.Number);
  }, [props.Number]);
  return (
    <div>
      <h3></h3>
      {props.Name} &nbsp; &nbsp; &nbsp;
      {props.Number}
    </div>
  );
}
