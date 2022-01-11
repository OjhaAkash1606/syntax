/* forwardRef uses in function component
 import React, { useRef } from "react";
import Forward2 from "./forwardRef2";
export function Forward() {
  let inputRef = useRef(null);
  function updateInput() {
    inputRef.current.value = "1000";
  }
  return (
    <div>
      <Forward2 ref={inputRef}></Forward2>
      <button onClick={updateInput}>Update</button>
    </div>
  );
}
 */
/* forwordRef uses in class component */
import React, { createRef } from "react";
import { ForwardRef2 } from "./forwardRef2";
export class Forward extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }
  update() {
    this.inputRef.current.value = 500;
  }
  render() {
    return (
      <div>
        <h2>forwardRef in class component</h2>
        <ForwardRef2 ref={this.inputRef}></ForwardRef2>
        <button
          onClick={() => {
            this.update();
          }}
        >
          Update
        </button>
      </div>
    );
  }
}
