import React from "react";
import { Army } from "./highOrderComponent";
class Hoc2 extends React.Component {
  render() {
    return (
      <div>
        Camp : {this.props.camp}
        <h3 onMouseOver={this.props.hocGunShotsHandle}>
          Rahul has {this.props.hocGunName} and {this.props.hocGunShots} number
          fired shots from it.
        </h3>
      </div>
    );
  }
}
export default Army(Hoc2, 10);
