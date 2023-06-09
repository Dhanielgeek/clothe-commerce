import React,  {useContext} from 'react'
import {ProductContext} from '../Context/ProductContext'
// import {motion} from 'framer-motion'
import { Products, Hero } from '../Components'


const Home = () => {

const {products} = useContext(ProductContext)
//get only eletronics catergory 
// console.log(products)

const FilterdProducts = products.filter((item)=>{
  return (
    item.category === "women's clothing" || item.category === "jewelery" || item.category === "men's clothing" 
  )
})
console.log(FilterdProducts)

  return (
    <div >
      <Hero/>
      <section className='py-16'>
        <div className="container mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {FilterdProducts.map(products => {
              return <Products product= {products} key={products.id}/>
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home