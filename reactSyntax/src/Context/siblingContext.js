import React from "react";
import { CreateContext } from "./createContext";
export function SiblingContext() {
  return (
    <div>
      <CreateContext.Consumer>
        {({ details }) => (
          <h4>
            My name is {details.name} and age {details.age} and colour is{" "}
            {details.colour}
          </h4>
        )}
      </CreateContext.Consumer>
    </div>
  );
}
