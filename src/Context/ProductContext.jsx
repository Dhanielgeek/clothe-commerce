import React,{useState,createContext, useEffect} from 'react'
// import axios from 'axios'
// import { useFetcher } from 'react-router-dom'

  export const ProductContext = createContext()

const ProductProvider = ({children}) => {

const [products, setproducts] = useState([])
useEffect(()=>{
  const fetchproducts =  async()=>{
    const res = await fetch('https://fakestoreapi.com/products')
    // .then(res=>res.json())
    // .then(json=>console.log(json))
    const data = await res.json();
    // console.log(data)
    setproducts(data)
}
fetchproducts()

},[])

  return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider