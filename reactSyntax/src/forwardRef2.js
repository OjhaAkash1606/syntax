/* import React, { forwardRef } from "react";
function Forward2(props, received) {
  return (
    <div>
      <input type="text" ref={received} />
    </div>
  );
}
export default forwardRef(Forward2);
 */
import React, { forwardRef } from "react";
export class ForwardRef2 extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
