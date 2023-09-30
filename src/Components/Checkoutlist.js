import React,{useState} from "react";

const Checkoutlist=({cartItems,setCartItems,setSuccess})=>{
   
     let total =0;
     cartItems.forEach(element => {
        total=total+element.price;
     });
     function checkOutFromApp(){
         setCartItems([]);
         setSuccess("Items have been checkout successfully")
     }
    console.log(cartItems);
    return <div className="checkoutlist-container"><p className="checkoutlist-text">Checkout List</p>
       {
        cartItems&&cartItems.map((item)=>(
            <div className="checkout-items"><p>{item.title}</p>
            <p>${item.price}</p></div>
            


        ))
       }{
        <div  className="checkout-items total"><p>Total:</p>
        <p>${total}</p></div>
       }
       <button className="checkout-btn" onClick={checkOutFromApp}>Click To Checkout</button>
    </div>
    
}
export default Checkoutlist;