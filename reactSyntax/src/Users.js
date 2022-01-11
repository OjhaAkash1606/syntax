import React from "react";
// Class Component

/* export class User extends React.Component{
    constructor(){
        super() 
    }
    componentDidMount(){

    }
    render(){
        return(
            <div>
                <p>Class component!</p>
            </div>
        )
    }
    
}
export default User; */

// Functional Component

/* export function FunctionClass (){
    return(
        <div>
            <h3>This is functional component!</h3>
        </div>
    )
} */

// State in class Component

export class Statefull extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "William",
      Brand: "Pantallons",
    };
  }
  Update() {
    this.setState({ Name: "Peter" });
  }
  render() {
    return (
      <div>
        <h3>Hello {this.state.Name} come inside State World!</h3>
        <button
          onClick={()=>
            {this.Update()}
          }
        >
          Update Here
        </button>
      </div>
    );
  }
}


// State in function Component using hooks!

// import { useState } from "react";

/* export function Update() {
  const [Name, setName] = useState("Warner");
  function UpdateName() {
    setName("Pollard");
    setName("Nibba");
  }
  return (
    <div>
      <h2
        onClick={() => {
          UpdateName();
        }}
      >
        Hello &nbsp;{Name} , welcome to hooks world!
      </h2>
      <button onClick={UpdateName}>Update</button>
    </div>
  );
} */

// Props In function Component

/* export function PropsFun(p) {
  return (
    <div>
      <h2 onClick={p.Fun}>
        Hello you are welcome in Props in functional component!
      </h2>
    </div>
  );
} */

/* export class PropsFun extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Hello {this.props.data.name} you are welcome props {this.props.dev} in
          class function!
        </h3>
      </div>
    );
  }
} */
