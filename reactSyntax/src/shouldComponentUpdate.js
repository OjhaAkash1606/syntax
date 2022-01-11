import React from "react";
export default class Belch extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      Name: "Rahul",
      Count: 0,
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate", this.state.Count);
    if (this.state.Count > 5 && this.state.Count < 15) {
      return true;
    }
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render", this.state.Count);
    return (
      <div>
        <h3>
          {" "}
          {this.state.Name} Should Component Update {this.state.Count}{" "}
        </h3>
        <button
          onClick={() => {
            this.setState({ Count: this.state.Count + 1 });
          }}
        >
          Update
        </button>
      </div>
    );
  }
}
