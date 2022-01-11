import React, { useState } from "react";
export function StateWithObjectProblm() {
  let [details, setDetails] = useState({});
  /* whenever one input fields data changing then other input fields data invisible problm */
  return (
    <div>
      <input
        type="text"
        value={details.name}
        placeholder="Enter Name"
        onChange={(e) => {
          setDetails({ ...details, name: e.target.value });
        }}
      />
      <br />
      {details.name}
      <br />
      <input
        type="text"
        value={details.email}
        placeholder="Enter Email"
        onChange={(e) => {
          setDetails({ ...details, email: e.target.value });
        }}
      />
      <br />
      {details.email}
      <br />
      <input
        type="text"
        value={details.qualification}
        placeholder="Enter Qualification"
        onChange={(e) => {
          setDetails({ ...details, qualification: e.target.value });
        }}
      />
      <br />
      {details.qualification}
    </div>
  );
}
