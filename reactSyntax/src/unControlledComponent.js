import React, { createRef } from "react";

export class Uncontroll extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      password: "",
      address: "",
    };
    this.inputAddress = createRef();
    this.inputPassword = createRef();
    this.inputUser = createRef();
  }

  formHandle = (e) => {
    e.preventDefault();
    this.setState({ user: this.inputUser.current.value });
    this.setState({ password: this.inputPassword.current.value });
    this.setState({ address: this.inputAddress.current.value });
  };
  render() {
    return (
      <div>
        <h2>
          Input fields are not handled by state of react it is known as
          Uncontroll component.
        </h2>
        <form action="" onSubmit={this.formHandle}>
          <label htmlFor="">
            User : {this.state.user}
            <br />
            <input type="text" name="User" ref={this.inputUser} />
          </label>
          <br />
          <label htmlFor="">
            Passowrd :{this.state.password} <br />
            <input type="password" name="Password" ref={this.inputPassword} />
          </label>
          <br />

          <label htmlFor="">
            Address :{this.state.address} <br />
            <textarea
              name="Address"
              id=""
              cols="15"
              rows="1"
              ref={this.inputAddress}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
