import React from "react";
import { Army } from "./highOrderComponent";
class Hoc3 extends React.Component {
  render() {
    return (
      <div>
        <h1>Camp : {this.props.camp}</h1>
        <h3 onMouseOver={this.props.hocGunShotsHandle}>
          Sonam has {this.props.hocGunName} and {this.props.hocGunShots} number
          fired shots from it.
        </h3>
      </div>
    );
  }
}
export default Army(Hoc3, 15);
