import React from "react";
export default class Hiccup extends React.Component {
  render() {
    return (
      <div>
        <h3>Hello {this.props.Name}</h3>
      </div>
    );
  }
}
