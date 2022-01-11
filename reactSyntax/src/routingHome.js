/* import React from "react";
import { Route, Link } from "react-router-dom";
import { AdvanceRouting } from "./routing";
export function Home(prp) {
  return (
    <div>
      <h3>{prp.name} page</h3>
      <h4>This is {prp.name} page.</h4>
    </div>
  );
}
 */
import React from "react";
import { withRouter } from "react-router-dom";
function Dynamic2(props) {
  // console.log(props);
  return (
    <div>
      <h4>
        This user no is {props.match.params.id} <br /> and those user name is{" "}
        {props.match.params.name} and his age is {props.match.params.age}.
      </h4>
    </div>
  );
}
export default withRouter(Dynamic2);
