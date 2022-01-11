import React, { useState } from "react";
export default function Whenever() {
  /* const [display, setDisplay] = useState(null);
  const [print, setPrint] = useState(false);

  function whether(asset) {
    setDisplay(asset.target.value);
    setPrint(false);
  }
  return (
    <div>
      <div>Name : {print ? <section>{display}</section> : null}</div>
      <br />
      <input type="text" onChange={whether} /> <br />
      <button
        onClick={() => {
          setPrint(true);
        }}
      >
        Update
      </button>
    </div>
  ); */

  // Submit form onSubmit btn using function component

  /* const [name,setName]=useState('');
  const [superStitious,setSuperStitious] =useState('');
  const [stubBorn,setStubBorn]=useState(false);
  function although(a){
        a.preventDefault()
        console.log(name,superStitious,stubBorn)
  }
  return(
  <form onSubmit={although}>
    <input type="text" name="Name" placeholder="Enter Name" 
    onChange={(z)=>{setName(z.target.value)}} />
    <br /><br />
    <select onChange={(y)=>{setSuperStitious(y.target.value)}}>
<option >Select Option</option>
<option >Linux</option>
<option >Android</option>
<option >Windows</option>
<option >Ubantu</option>
    </select> <br /><br />
    <input type="checkbox" onChange={(x)=>{setStubBorn(x.target.checked)}} /><span>Accept terms and condition!</span><br /><br />
    <button type="submit">Submit</button>&nbsp; &nbsp; &nbsp;
    <button type="reset">Clear</button>
  </form>
  ) */
  /* constructor()
  {
    super();
    this.state={
      name:" ",
      nameError:" ",
      user:" ",
      userError:" ",
      password:" ",
      passwordError:" "
    }

  }
  loginValid()
  {
    

      if (this.state.name.length < 5){
      this.setState({nameError:"Please enter atleast 5 charecter of Name"});}

      if(!this.state.user.includes('@')){
      this.setState({ userError:`Must be used "@"`});}

      if(this.state.password.length < 5){
        this.setState({ passwordError: "Must be enter atleast 5 charecter"});}
        
      else 
      {
        return true;
      }
    
  }
  login()
  { this.setState({nameError:" " , userError:" " , passwordError:" "});
    if (this.loginValid()){
    
    alert("Form has been submited!")
  }
  }
  render()
  {
    return(
      <div>
          <h3>Login Form</h3>
        Name : <input type="text" name="Name" onChange={(nameEvent)=>{this.setState({name:nameEvent.target.value})}}/>
        <p style={{color:'red' , fontSize:"16px"}}>{this.state.nameError}</p>
         
       User Id : <input type="text" name="User Id" onChange={(userEvent)=>{this.setState({user:userEvent.target.value})}} />
        <p style={{color:'red' , fontSize:"16px"}}>{this.state.userError}</p>
       
       Password : <input type="password" name="Password" onChange={(passwordEvent)=>{this.setState({password:passwordEvent.target.value})}}/>
        <p style={{color:'red' , fontSize:"16px"}}>{this.state.passwordError}</p>
        
        <button onClick={()=>{this.login()}}>Login</button>
        &nbsp; &nbsp; &nbsp;<button type="reset">Clear</button>

      </div>
    )
  } */
  /* let [user, setUser] = useState("");
  let [password, setPassword] = useState("");
  let [userError, setUserError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  function loginHandle(l) {
    l.preventDefault();
    alert("Form has been submited");
  }
  function userHandle(e) {
    let userItem = e.target.value;
    userItem.length < 4 ? setUser(true) : setUser(false);
  }
  function passwordHandle(p) {
    let passwordItem = p.target.value;
    passwordItem.length < 5 ? setPassword(true) : setPassword(false);
  }
  return (
    <div>
      <form onSubmit={loginHandle}>
        <h3>Login Form</h3>
        User Id &nbsp; &nbsp; : <input type="text" onChange={userHandle} />
        <p>{user ? "Invalid User" : " "} </p>
        Password : <input type="Password" onChange={passwordHandle} />
        <p>{password ? "Invalid Password" : " "} </p>
        <button>Login</button>
      </form>
    </div>
  ); */
  const [hide, setHide] = useState(false);
  return (
    <div>
      {hide ? <h3>This is hide and show content!</h3> : null}
      <button
        onClick={() => {
          setHide(true);
        }}
      >
        Visible
      </button>{" "}
      &nbsp; &nbsp; &nbsp;
      <button
        onClick={() => {
          setHide(false);
        }}
      >
        Invisible
      </button>{" "}
      &nbsp; &nbsp; &nbsp;
      <button
        onClick={() => {
          setHide(!hide);
        }}
      >
        Toggle
      </button>
    </div>
  );
}
