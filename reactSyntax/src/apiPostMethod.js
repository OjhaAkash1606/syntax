import React, { useState } from "react";
export function PostMethod() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [address, setAddress] = useState("");
  function saveData() {
    let data = { name, email, mobile, address };
    console.log(data);

    fetch("http://localhost:3001/user", {
      method: "POST",
      headers: {
        //prettier-ignore
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((request) => {
      request.json().then((response) => {});
    });
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <br />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br />
      <br />
      <input
        type="text"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Mobile"
      />
      <br />
      <br />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />
      <br />
      <br />
      <button onClick={saveData}>Save data</button>
    </div>
  );
}
