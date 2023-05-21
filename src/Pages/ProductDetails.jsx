import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { ProductContext } from '../Context/ProductContext'
import Loader from './Loader'

const ProductDetails = () => {

  //get the  products id from the url
  const {id} = useParams()
 // console.log(id)
 //get the product from the product context
 const {products} = useContext(ProductContext)
const {addtocart} = useContext(CartContext)
//get the single products based on id 
const product = products.find((item)=>{
  return item.id === parseInt(id)
})

if(!product){
  return <section className='h-screen flex justify-center items-center'>
    <Loader/>
  </section>
}
//destructing the product from the url 
const {title, price, description , image} = product
  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row items-center'>
        <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
          <img className='max-w-[200px] lg:max-w-sm:' src={image} alt=''/>
        </div>
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-[26px] font-medium mb-2 max-w-[300px] mx-auto lg:mx-0'>{title}</h1>
        <div className='text-xl text-green-500 font-medium mb-6'>₦ {price}</div>
        <p className='mb-8'>{description}</p>
        <button onClick={()=>addtocart(product, product.id)} className='bg-red-500 text-white rounded-md py-3 px-6'>Add to Cart</button>
        </div>
        </div>
       


      </div>
    </section>
  )
}

export default ProductDetails