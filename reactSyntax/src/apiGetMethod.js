import React, { useEffect, useState } from "react";
export function GetMethod() {
  let [user, setUser] = useState([]);
  useEffect(() => {
    /* fetch(
      "https://reqres.in/api/unknown"
    ) */
    fetch("https://reqres.in/api/users?page=1").then((request) => {
      request.json().then((response) => {
        console.log(response);
        setUser(response.data);
        console.log(user);
      });
    });
  }, []);
  // console.log(user);
  return (
    <div>
      <table border="1">
        <tr>
          <td>Sr. No.</td>
          <td>Images</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Email</td>
        </tr>
        {user.map((ele) => (
          <tr>
            <td>{ele.id}</td>
            <td>
              <img
                src={ele.avatar}
                alt="Img"
                style={{ width: "50px", height: "50px" }}
              />
            </td>
            <td>{ele.first_name}</td>
            <td>{ele.last_name}</td>
            <td>{ele.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
/* 
import React, { useState, useEffect } from "react";
export function PostMethod() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/user").then((request) => {
      request.json().then((response) => {
        console.log(response);
        setData(response);
        console.log(data);
      });
    });
  }, []);
  return (
    <div>
      <table border="1">
        <tr>
          <td>id</td>
          <td>name</td>
          <td>email</td>
          <td>mobile</td>
          <td>address</td>
        </tr>
        {data.map((ele) => (
          <tr>
            <td>{ele.id}</td>
            <td>{ele.name}</td>
            <td>{ele.email}</td>
            <td>{ele.mobile}</td>
            <td>{ele.address}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
 */
