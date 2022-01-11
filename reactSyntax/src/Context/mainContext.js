import React, { useEffect, useState } from "react";
import { CreateContext } from "./createContext";
import { ChildContext } from "./childContext";
export function MainContext() {
  const [details, setDetails] = useState({
    name: "Akash",
    age: 29,
    colour: "White",
  });

  return (
    <div>
      <CreateContext.Provider value={{ details }}>
        <h2>Hello</h2>
        <ChildContext></ChildContext>
      </CreateContext.Provider>
    </div>
  );
}
