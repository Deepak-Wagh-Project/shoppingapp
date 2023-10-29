import React,{useEffect, useState} from "react";
import {Route,Routes} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Cartpage from "./Components/Cartpage";
import Homepage from "./Components/Homepage";
import { getData } from "./functions/getData";

const App=()=>{
  const [items,setItems]=useState([]);
  const [cartItems,setCartItems]=useState([]);
  const [success,setSuccess]=useState("");

  useEffect(()=>{getData(setItems)},[])
  return(<div>
   
   
     
       <Routes>
       
           <Route path="/" element={<Homepage  items={items}setCartItems={setCartItems} cartItems={cartItems} setSuccess={setSuccess}/>}/>
           <Route path="/cart" element={<Cartpage cartItems={cartItems} setCartItems={setCartItems} setSuccess={setSuccess} success={success}/>}/>
           
       </Routes>
  </div>)
}
export default App;