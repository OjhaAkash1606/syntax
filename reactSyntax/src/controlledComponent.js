import React from "react";
export class Controll extends React.Component {
  /*    
        multiple input filds controlled by multiple handler 

  constructor() {
    super();
    this.state = {
      count: 100,
      name: "Akash",
    };
  }
  update = (e) => {
    console.log(e.target.value);
    this.setState({
      count: e.target.value.toUpperCase(),
    });
  };
  updateName = (en) => {
    console.log(en.target.value);
    this.setState({
      name: en.target.value.toUpperCase().substr(0,10),
    });
  };
  render() {
    return (
      <div>
        <h1>Controlled component</h1>
        <h3>It is controlled by state.</h3>
        <input
          type="text"
          value={this.state.name}
          maxLength="10"
          onChange={this.updateName}
        />{" "}
        <br />
        Name : {this.state.name} <br />{" "}
        <input
          type="text"
          maxLength="10"
          Value={this.state.count}
          onChange={this.update}
        />{" "}
        <br />
        Count : {this.state.count} <br />
      </div>
    );
  } */
  /* multiple input field handle by one handler  */
  constructor() {
    super();
    this.state = {
      name: "Akash",
      password: "akash@test",
      address: "Nikol",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>multiple inputs controlled by one handler</h2>
        <form action="">
          <label htmlFor="">
            Name : {this.state.name}
            <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="">
            Password : {this.state.password}
            <br />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>{" "}
          <label htmlFor="">
            <br />
            Address : {this.state.address}
            <br />
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
