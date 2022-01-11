import React from "react";
import { Pure2 } from "./pureComponent2";
export class Pure extends React.PureComponent {
  /* Pure component for state 
   constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log("rendring");
    return (
      <div>
        {console.log("re-rendring")}
        <h1>Hello Count : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count });
          }}
        >
          Count
        </button>
      </div>
    );
  } */
  //   Pure Component for props
  constructor() {
    super();
    this.state = {
      count: 0,
      number: 10,
    };
  }
  render() {
    return (
      <div>
        <Pure2 count1={this.state}></Pure2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count,
              number: this.state.number,
            });
          }}
        >
          Update
        </button>
      </div>
    );
  }
}
