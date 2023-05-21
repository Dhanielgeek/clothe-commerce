import React, {useContext} from 'react'
import {MdAddShoppingCart, MdOutlineRemoveRedEye} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
//import cartcontext to product so we can get the add to cart items 
import { CartContext } from '../Context/CartContext'

const Products = ({product}) => {

    const {addtocart} = useContext(CartContext)

  //  console.log(product)
    const {id, image, category, title, price} = product
  return (
    <motion.div initial={{opacity: 0, x : 200}} 
    animate={{opacity :1 , x : 5, y : 4}}
    exist = {{opacity : 0 , x : 200, y : 4}}
>
        <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='w-[200px] mx-auto flex justify-center items-center'>
                    <motion.img whileHover={{scale : 0.80}} className='max-h-[160px]' src={image} alt=''/>
                </div>
            </div>
            {/* button */}
            <motion.div whileTap={{scale : 0.85}}  className=' absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all'>
                <button onClick={()=> addtocart(product,id)}>
                    <div  className='flex justify-center items-center text-white w-10 h-10 bg-red-500'>
                        <MdAddShoppingCart className='text-2xl '/>
                    </div>
                </button>
                <Link to={`/product/${id}`} className='w-10 h-10 bg-white flex justify-center items-center drop-shadow-xl text-primary'>
                <MdOutlineRemoveRedEye/>
                </Link>
            </motion.div>
        </div>
        {/* {category title & price} */}
        <div>
            <div className='text-sm capitalize text-gray-600'>
                {category}
            </div>
            <Link to={`/product/${id}`}>
            <h2 className='font-semibold mb-1 text-lg'>{title}</h2>
            </Link>
           
            <div className='font-semibold text-base'>₦ {price}</div>
        </div>


{/* < motion.div  
              initial={{opacity: 0 , x : 200, y : 100}}
              animate= {{opacity : 1 , x : 5, y : 3}}
              exist = {{opacity : 1 , x: 0 , y : 3}}className='w-full h-[300px] bg-green-500' key={products.id}>
                {products.title}
              </motion.div> */}
    </motion.div>
  )
}

export default Products