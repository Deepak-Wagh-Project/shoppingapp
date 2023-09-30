import React from "react";
import {NavLink} from "react-router-dom"

const Navbar=()=>{
    return(<div className="navbar"><div>Shopping Cart</div>
    <div className="links"><NavLink to="/home">Home Page</NavLink>
    <NavLink to="/cart">Cart Page</NavLink>
    </div></div>)
}
export default Navbar