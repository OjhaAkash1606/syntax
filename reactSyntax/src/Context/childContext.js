import React from "react";
import { SiblingContext } from "./siblingContext";
import { CreateContext } from "./createContext";
export function ChildContext() {
  return (
    <div>
      <CreateContext.Consumer>
        {({ details }) => (
          <h2>
            Hello {details.name} {details.age} {details.colour}
          </h2>
        )}
      </CreateContext.Consumer>
      <SiblingContext></SiblingContext>
    </div>
  );
}
