import React, { useEffect, useState } from "react";

export function PutMethod() {
  let [store, setStore] = useState([]);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [address, setAddress] = useState("");
  let [userId, setUserId] = useState();

  useEffect(() => {
    render();
  }, []);
  function render() {
    fetch("http://localhost:3001/user").then((req) => {
      req.json().then((res) => {
        setStore(res);
      });
    });
  }
  function selectData(item, i) {
    // setName(store[i].name);
    setName(item.name);
    // setEmail(store[i].email);
    setEmail(item.email);
    // setMobile(store[i].mobile);
    setMobile(item.mobile);
    // setAddress(store[i].address);
    setAddress(item.address);
    // setUserId(item.id);
    setUserId(store[i].id);
  }
  //   console.log(userId);
  function updateData() {
    let sendData = { userId, name, email, mobile, address };
    fetch("http://localhost:3001/user/" + userId, {
      method: "PUT",
      headers: {
        //prettier-ignore
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    }).then((req) => {
      req.json().then((res) => {
        /* setName(res.name);
        setEmail(res.email);
        setMobile(res.mobile);
        setAddress(res) */
        render();
      });
    });
  }
  return (
    <div>
      <h4>Put method</h4>
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
        {store.map((item, i) => (
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
      <button
        onClick={() => {
          updateData();
        }}
      >
        Update data
      </button>
    </div>
  );
}
