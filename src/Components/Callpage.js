
import React ,{useState,useEffect}from "react";
import axios from "axios";

  


const CallPage=({setItems})=>{
  
        useEffect(()=>{
           getItems();
        },[])
 async function getItems(){
    
        const data=await axios.get("https://dummyjson.com/products")
        setItems(data.data.products);
       
       
     }
   
    
       // getItems();
    
    
       
  
   
    return(<div>
   
    </div>)
}
export default CallPage;