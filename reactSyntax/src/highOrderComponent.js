/* import React, { useState } from "react";
export function Hoc() {
    return (
        <div>
        <h2>High order component</h2>
        <Red prp={Hoc2}></Red>
        <Green prp={Hoc2}></Green>
        </div>
        );
        function Red(props) {
            return (
                <h3
                style={{
                    backgroundColor: "red",
                    height: "60px",
                    width: "50px",
                    padding: "4px",
                    position: "relative",
                    right: 180,
                }}
                >
                Count:
        <props.prp />
        </h3>
    );
}
function Green(props) {
    return (
        <h3
        style={{
            backgroundColor: "green",
            height: "60px",
            width: "50px",
            padding: "4px",
          position: "relative",
          right: 180,
        }}
        >
        {" "}
        Shots : <props.prp></props.prp>{" "}
        </h3>
        );
    }
    function Hoc2() {
        let [count, setCount] = useState(0);
        let [gunShots, setGunShots] = useState(0);
        function handleCounting() {
            setCount(count + 1);
        }
        return (
            <div>
            <h3 onMouseOver={handleCounting}> {count}</h3> <br />
            </div>
            );
        }
    }
    */
import React from "react";

let Army = (Men, shot) => {
  class Hoc extends React.Component {
    state = {
      gunShots: 0,
      gunName: "AK-47",
    };
    gunShotsHandle = () => {
      this.setState({ gunShots: this.state.gunShots + shot });
    };
    render() {
      return (
        <div>
          <Men
            hocGunShotsHandle={this.gunShotsHandle}
            hocGunShots={this.state.gunShots}
            hocGunName={this.state.gunName}
            {...this.props}
          ></Men>
        </div>
      );
    }
  }
  return Hoc;
};
export { Army };
