import React, {useContext, useEffect, useState} from 'react'
//import motion 
import {motion} from 'framer-motion'
//import sidebarcontext 
import { SidebarContext } from '../Context/SidebarContext'
import {CartContext} from '../Context/CartContext'
import {MdOutlineShoppingBag} from 'react-icons/md'
import { Link } from 'react-router-dom'
import LogoHead from '../Images/lookkk.png'

const Header = () => {

  const [isactive, setisactive] = useState(false)

const {isopen , setisopen} = useContext(SidebarContext)
const {itemAmount} = useContext(CartContext)
useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    window.scrollY > 60 ? setisactive(true) : setisactive(false)
  })
})

  return (
    <header className={`${isactive ? 'bg-white py-4 shadow-md' : "bg-none"} fixed w-full z-10 transition-all`}>
      <div className='container flex mx-auto items-center justify-between h-full'>
      <Link to={'/'}>
      <div className='flex justify-center items-center'>
        <img className='w-[60px]' src= {LogoHead} alt=''/>
        <h2 className='text-xl font-bold text-primary font-primary'>Slimfit Brand</h2>
      </div>
      </Link>
      <motion.div whileTap={{scale : 1}} onClick={()=> setisopen(!isopen)}  className='cursor-pointer flex relative'>
       <MdOutlineShoppingBag  className='text-3xl '/>
       <div className=' bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[19px] h-[19px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </motion.div>
      </div>
      
    </header>
  )
}

export default Header