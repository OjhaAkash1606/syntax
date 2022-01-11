import React, { useEffect, useState } from "react";
export function DeletMethod() {
  let [data, setData] = useState([]);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [address, setAddress] = useState("");

  useEffect(() => {
    refresh();
  }, []);
  function refresh() {
    fetch("http://localhost:3001/user").then((request) => {
      request.json().then((response) => {
        setData(response);
        setName(response[0].name);
        setEmail(response[0].email);
        setMobile(response[0].mobile);
        setAddress(response[0].address);
      });
    });
  }
  function deletData(id) {
    fetch("http://localhost:3001/user/" + id, {
      method: "DELETE",
    }).then((req) => {
      req.json().then((res) => {
        refresh();
      });
    });
  }

  return (
    <div>
      <h4>Delet method</h4>
      <table border="1">
        <tr>
          <td>No</td>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
          <td>Address</td>
          <td>Delet</td>
        </tr>
        {data.map((item, i) => (
          <tr>
            <td>{i + 1}</td>
            <td> {item.id} </td>
            <td> {item.name} </td>
            <td> {item.email} </td>
            <td> {item.mobile} </td>
            <td> {item.address} </td>
            <td>
              <button onClick={() => deletData(item.id)}>Delet</button>
            </td>
          </tr>
        ))}
      </table>
      <br />
    </div>
  );
}
