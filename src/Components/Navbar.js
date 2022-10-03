import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "../Css/Navbar.css"
import search from "../Images/Search.png"
import heart from "../Images/Heart.png"
import user from "../Images/User.png"
import cart from "../Images/Cart.png"
import Shop from "../Pages/Shop";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Pages from "../Pages/Pages";
import { useContext } from "react";
import { CountContext } from "../App";
import { useSelector } from "react-redux";


function Navbar() {
  // const[item,setItem]=useState(0);
  const counter=useSelector(state => state.changeNumber);
  return (
    

    <div className="NavbarContainer">
      <div className="navbarBrand">
        <h3 className="acciojob">AccioJob</h3>
      </div>
      <div className="navbarItems">
        <div>
        <Router >
        <div>
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/shop">Shop</Link>
        <Link className="links" to="/about">About</Link>
        <Link className="links" to="/blog">Blog</Link>
        <Link className="links" to="/contact">Contact</Link>
        <Link className="links" to="/pages">Pages</Link>

        </div>
        <Switch>
          <Route exact path="/shop">
            <Shop/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route exact path="/blog">
            <Blog/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/pages">
            <Pages/>
          </Route>

        </Switch>
        </Router>

        </div>
      </div>
      <div className="menu">
        <div style={{display: "flex",flexDirection:"row",alignItems:'center',marginRight:'6px'}}>
        <img src={user} />
        {/* <p className="login">Login / Register</p> */}
        <Router>
          <Link className="login" to="/login">Login / Register</Link>
          <Switch>
            <Route path="/login"></Route> 
          </Switch>
        </Router>

        </div>
        <div style={{display: "flex",flexDirection:"row",alignItems:'center',marginRight:'6px'}}>
        <img src={search} />
        
        </div>
        <div style={{display: "flex",flexDirection:"row",alignItems:'center',marginRight:'6px'}}>
        <img src={cart} />
        {/* <p className="cart-number">1</p> */}
        <small className="cart-num">{counter}</small>
        </div>
        <div style={{display: "flex",flexDirection:"row",alignItems:'center',marginRight:'6px'}}>
        <img src={heart} />
        {/* <p className="heart-number">1</p> */}
        <small className="heart-num">1</small>
        </div>
      </div>
      
    </div>
    

  );
}

export default Navbar;
