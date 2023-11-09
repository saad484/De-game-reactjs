import axios from "axios";

export const productstApi = axios.create({baseURL:"http://localhost:5555"})

export const getPro=()=>{
    return productstApi.get("/products");
}

export const deleteProduct=(product)=>{
    return productstApi.delete('/products/'+product.id)
}