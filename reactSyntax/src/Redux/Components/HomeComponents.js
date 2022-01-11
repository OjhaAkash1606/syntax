import React from "react";
// import logo from "./download.jpg"
function Home() {
  return (
    <div>
      <div className="add-to-cart">
        <img src={require("../../Images/add-to-cart.jpg").default} alt="Cart Image" style={{width:"50px"}} />
      </div>
      <div className="product-list">
      <div className="img-wrapper item">
        <img src={require("../../Images/iphone.jpg").default} alt="logo" />
      </div>
      <div className="text-wrapper item">
        <span>I-Phone</span> <br />
        <span>Price: $1000</span>
      </div>
      <div className="btn-wrapper item">
        <button>Add to cart</button>
      </div>
      </div>
    </div>
  );
}
export default Home;
