import React, { createRef } from "react";
export class Ref extends React.Component {
  constructor() {
    super();
    this.state = createRef();
    this.color = createRef();
  }
  componentDidMount() {
    this.state.current.style.color = "blue";
  }
  getValue() {
    console.log(this.color.current.value); //to get value
  }
  render() {
    return (
      <div>
        <h2 ref={this.state}>hello</h2>
        <input type="text" ref={this.color} />
        <button onClick={() => this.getValue()}>ok</button>
      </div>
    );
  }
}
