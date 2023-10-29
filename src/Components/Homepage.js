
import React ,{useState,useEffect}from "react";
import axios from "axios";
import Navbar from "./Navbar";

  


const Homepage=({items,setCartItems,cartItems,setSuccess})=>{
  
    function addItemToCart(item){
       let itemPresent=false;
          if(!cartItems){
            setCartItems(item)
          }
          else{
            cartItems.forEach(element => {
                if(element.id===item.id){
                    itemPresent=true;
                }
            });
          }
          if(!itemPresent){
            setCartItems([...cartItems,item]);
            setSuccess("");
            
          }
          
    }   
    
      
    
    
       
  
   
    return(<div>
        <Navbar/>
      <h1>All items</h1>
    <div className="item-container">
    {
        items&&items.map(item=>(
            <div key={item.id} className="items">
                <img src={item.thumbnail} alt="image"/>
                <div>Title:{item.title}</div>
                <div>Price:${item.price}</div>
                <button onClick={()=>{addItemToCart(item)}}>Add to Cart</button>
            </div>
        ))
    }
    </div>
    </div>)
}
export default Homepage;