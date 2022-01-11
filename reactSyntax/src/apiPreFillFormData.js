import React, { useEffect, useState } from "react";
export function PreFill() {
  let [data, setData] = useState([]);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [address, setAddress] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/user").then((req) => {
      req.json().then((res) => {
        setData(res);
      });
    });
  }, []);
  function selectData(item, i) {
    // setName(item.name);
    setName(data[i].name);
    // setEmail(item.email);
    setEmail(data[i].email);
    // setMobile(item.mobile);
    setMobile(data[i].mobile);
    // setAddress(item.address);
    setAddress(data[i].address);
  }
  return (
    <div>
      <h4>Pre fill form data</h4>
      <table border="1">
        <tr>
          <td>No</td>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
          <td>Address</td>
          <td>Select</td>
        </tr>
        {data.map((item, i) => (
          <tr>
            <td>{i + 1}</td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
            <td>{item.address}</td>
            <td>
              <button
                onClick={() => {
                  selectData(item, i);
                }}
              >
                Select
              </button>
            </td>
          </tr>
        ))}
      </table>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <br />
    </div>
  );
}
