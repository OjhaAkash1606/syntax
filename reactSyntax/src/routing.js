import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

/* export function ReactRouter() {
  return (
    <div>
      <h2>Routing Different pages</h2>
      <Router>
        <Link to="/home">Home page</Link>
        <br />
        <Link to="/about">About page</Link>
        <br />
        <Link to="/contact">Contact page</Link>
        <br />
        <Route path="/home">
          <Home></Home>
        </Route>x
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact>
            {" "}
            <h2>Contact page</h2>
            <h4>This is contact page for routing.</h4>
          </Contact>
        </Route>
      </Router>
    </div>
  );
  function Home() {
    return (
      <div>
        <h2>Home page</h2>
        <h4>This is home page for routing.</h4>
      </div>
    );
  }
  function About() {
    return (
      <div>
        <h2>About page</h2>
        <h4>This is about page for routing.</h4>
      </div>
    );
  }
  function Contact() {
    return (
      <div>
        <h2>Contact page</h2>
        <h4>This is contact page for routing.</h4>
      </div>
    );
  }
} */
/* import { Home } from "./routingHome";
import { PageNotFound } from "./routing404Page";
export function AdvanceRouting() {
  return (
    <div>
      <h3>Hello Advance</h3>
      <Router>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="career">Career</Link>
        <Switch>
          <Route path="/" exact={true}>
            <Home name="Home"></Home>
          </Route>
          <Route path="/about">
            <Home name="About"></Home>
          </Route>
          <Route path="/contact">
            <Home name="Contact"></Home>
          </Route>
          <Route path="/career">
            <Home name="Career"></Home>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
} */

// Dynamic routing
import Dynamic2 from "./routingHome";
export function Dynamic() {
  let users = [
    { id: 1, name: "Akash", occupation: "Developer", age: 26 },
    { id: 2, name: "Pankaj", occupation: "MR", age: 27 },
    { id: 3, name: "Nilesh", occupation: "Engineer", age: 28 },
    { id: 4, name: "Anil", occupation: "Marketing", age: 30 },
    { id: 5, name: "Utsav", occupation: "Product", age: 31 },
    { id: 15, name: "Rishikesh", occupation: "Bussiness", age: 29 },
  ];
  return (
    <div>
      <Router>
        {users.map((item) => (
          <div>
            <Link to={"/user/" + item.id + "/" + item.name + "/" + item.age}>
              <p>{item.name}</p>
            </Link>
          </div>
        ))}
        <Route path="/user/:id/:name/:age">
          <Dynamic2></Dynamic2>
        </Route>
      </Router>
    </div>
  );
}
