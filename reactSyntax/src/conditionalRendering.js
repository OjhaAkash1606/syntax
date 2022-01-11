import React, { useState } from "react";
/* export default class Humiliate extends React.Component {
  constructor() {
    super();
    this.state = {
      humiliate: false,
    };
  }
  render() {
    return (
      <div>
        {this.state.humiliate ? (
          <h3>Anil is welcome here</h3>
        ) : (
          <h3>New users are welcome here</h3>
        )}
        <button
          onClick={() => {
            if (this.state.humiliate === false) {
              this.setState({ humiliate: true });
            } else {
              this.setState({ humiliate: false });
            }
          }}
        >
          Toggle
        </button>
      </div>
    );
  }
}
 */
export default function Humiliate() {
  let [flatter, setFlatter] = useState(false);
  return (
    <div>
      {flatter ? (
        <h3>Anil is welcome here</h3>
      ) : (
        <h3>New users are welcome here</h3>
      )}
      <button
        onClick={() => {
          setFlatter(!flatter);
        }}
      >
        Toggle
      </button>
    </div>
  );
}
