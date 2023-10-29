import axios from "axios";

export const getData = async(setItems)=> {
    const data=await axios.get("https://dummyjson.com/products")
    setItems([...data.data.products]);
}