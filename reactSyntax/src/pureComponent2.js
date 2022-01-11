import React, { PureComponent } from "react";
export class Pure2 extends PureComponent {
  render() {
    console.log("rendring");
    return (
      <div>
        {console.log("re-rendering")}
        Hello Count : {this.props.count1.count} <br />
        Hello Number : {this.props.count1.number}
      </div>
    );
  }
}
