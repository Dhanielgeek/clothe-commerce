import React, {useContext} from 'react'
//import link 
// import { Link } from 'react-router-dom'
//import icons
import {MdArrowForward} from 'react-icons/md'
import {VscTrash} from 'react-icons/vsc'
//import Cartitem from compontents
import { Cartitem } from '../Components'
// import sidebarcontext 
import { SidebarContext } from '../Context/SidebarContext'
// import cart context
import { CartContext } from '../Context/CartContext'
//import framer motion 
import {motion} from 'framer-motion'
import addto from '../Images/addto.webp'
import { Link } from 'react-router-dom'

const Sidebar = () => {

const {isopen, handleclose} = useContext(SidebarContext)
const {cart, clearCart, total, itemAmount} =  useContext(CartContext)





  return (
    <motion.div initial={{opacity: 0, x : 200}} 
    animate={{opacity :1 , x : 0}}
    exist = {{opacity : 0 , x : 200}}
    className={` ${isopen ? "right-0": "-right-full"}  w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Items ({itemAmount})</div>
        <div onClick={handleclose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <MdArrowForward className='text-3xl'/>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[400px] overflow-y-auto overflow-x-hidden border-b lg:h-[500px]'>
        {
          cart && cart ?   cart.map(item=> {
            return(
              <Cartitem  item={item} key={item.id}/>
            )
          }) :   
            <img src= {addto} alt=''  />
          
        
        }
      </div>
      <div className=' flex flex-col gap-y-3 py-4 mt-4'>
      <div className=' flex justify-between items-center'>
        <div>
          <div className='uppercase font-semibold'><span className='mr-2'>Total: </span>₦ {parseFloat(total).toFixed(2)}</div>
        </div>
        <motion.div whileTap={{scale: 0.70}} onClick={clearCart} className='cursor-pointer py-4 bg-red-300 text-white w-12 h-12 flex justify-center items-center text-2xl rounded-md hover:bg-red-600 transition-all duration-100'>
          <VscTrash/>
        </motion.div>
      </div>
      <Link className='bg-green-300 flex p-3 justify-center items-center text-cyan-600 w-full font-semibold hover:bg-green-500 transition-all duration-100 text-xl'>View Cart</Link>
      <Link className='bg-red-300 flex p-3 justify-center items-center text-white w-full font-semibold hover:bg-red-500 transition-all duration-100 text-xl'>Checkout</Link>
      
      </div>
    </motion.div>
  )
}

export default Sidebar