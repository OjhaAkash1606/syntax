import React from "react";
export default class Snores extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      Name: "Akash",
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(lastProps, lastState, snapshot) {
    console.log("componentDidUpdate", lastState.Name, this.state.Name);
  }
  render() {
    console.log("render");
    return (
      <div>
        <h3>Hello {this.state.Name}</h3>
        <button
          onClick={() => {
            this.setState({ Name: "Neeraj" });
          }}
        >
          Update
        </button>
      </div>
    );
  }
}
