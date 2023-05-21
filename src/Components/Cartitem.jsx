import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {MdAdd, MdOutlineDeleteOutline, MdRemove} from 'react-icons/md'
import {motion} from 'framer-motion'
import {CartContext} from '../Context/CartContext'


const Cartitem = ({item}) => {

    const {removefromcart,increaseAmount,decreaseAmount} = useContext(CartContext)


// destructuring of items 
const {id, title, image , price , Amount } = item  

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
        <div className='w-full min-h-[150px] flex items-center gap-x-4'>
            <Link to={`/product/${id}`}>
            <img className='max-w-[80px]' src={image} alt="" />
            </Link>
            <div className='w-full flex flex-col'>
            <div className='flex justify-between mb-2'>
                <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}</Link>
                <motion.div whileTap={{scale: 0.75}} onClick={()=> removefromcart(id)}>
                    <MdOutlineDeleteOutline className='text-3xl cursor-pointer text-gray-500 hover:text-red-500 transition'/>
                </motion.div>
            </div>
            <div className=' flex gap-x-2 h-[32px] text-sm'>
            <div className='flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium'>
                <div onClick={()=> decreaseAmount(id)} className='flex-1 flex justify-center items-center h-full cursor-pointer'>
                <MdRemove/>
                </div>
                <div className='h-full flex justify-center items-center px-2'>{Amount}</div>
                <div  onClick={()=> increaseAmount(id)} className='flex-1 flex justify-center items-center h-full cursor-pointer'>
                    <MdAdd/>
                </div>
            </div>
           <div className='flex-1 flex items-center justify-around'>₦ {price}</div>
           <div className='flex flex-1 justify-end items-center text-primary font-medium'>{`₦ ${parseFloat(price * Amount).toFixed(2)}`}</div>
            </div>
            </div>
        
          
        </div>
    </div>
  )
}

export default Cartitem