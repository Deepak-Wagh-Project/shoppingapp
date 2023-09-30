import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import Checkoutlist from "./Checkoutlist"


const Cartpage=({cartItems,setCartItems,setSuccess,success})=>{
    
    function removeItemFromCart(item){
        let arr= cartItems.filter(ele => ele !== item);
        setCartItems(arr);
    }
    return(<div className="cartpage">
        { success ? <div className="success-transaction">{success}</div>: cartItems.length===0 ?<div className="empty-messsage">Your cart is empty.Please add some products</div> :
        <div>
        <h1>My Cart</h1>
    <div className="container">
    <div className="cart-items-container">
    {
        cartItems&&cartItems.map(item=>(
            <div >
                <img src={item.thumbnail} alt="image"/>
                <div>Title:{item.title}</div>
                <div>Price:${item.price}</div>
                <button onClick={()=>{removeItemFromCart(item)}}>Remove From Cart</button>
            </div>
        ))
    }
    </div>{cartItems&& <Checkoutlist cartItems={cartItems} setCartItems={setCartItems} setSuccess={setSuccess}/>}
   
    </div>
    </div>
}
    </div>)
}
export default Cartpage;