import React, {createContext, useState, useEffect} from 'react'



export const CartContext = createContext()

const CartProvider = ({children}) => {
  

 const [cart, setcart] = useState([])

 const [itemAmount, setitemAmount] = useState(0)

 // total price of item 
 const [total, settotal] = useState(0)

 useEffect(()=>{
  const total = cart.reduce((accumulator, currentItem)=>{
 return accumulator + currentItem.price * currentItem.Amount
  }, 0)
settotal(total)
 },[cart])

 //update amount of item 

 useEffect(()=>{
  if(cart){
const amount = cart.reduce((accumulator, currentItem) => {
  return accumulator + currentItem.Amount
}, 0)
setitemAmount(amount)
  }
 },[cart])

  const addtocart = (product,id)=>{
    const newItem = {...product , Amount : 1}
    // check if the item is already in the cart
    const cartitem = cart.find((item)=> {
      return item.id === id
    })
    /// if item is available 
    if (cartitem){
      const newCart = [...cart].map((item)=>{
        if (item.id === id){
          return {...item, Amount : item.Amount + 1}
        }else {
          return item 
        }
      })
      setcart(newCart)
    }else{
      setcart([...cart, newItem])
    }
  }
// remove cart
  const removefromcart = (id)=>{
    const newCarti = cart.filter(item => {
      return item.id !== id
    })
    setcart(newCarti)
  }
//clear all cart items
  const clearCart = ()=>{

    setcart([])
  }
// increased amount 
const increaseAmount = (id)=>{
const cartItem = cart.find((item)=> item.id === id)
addtocart(cartItem, id)
}

// decreased amount
const decreaseAmount = (id)=>{
  const cartItem = cart.find((item)=> item.id === id);
  if(cartItem){
    const newCart = cart.map((item)=>{
      if (item.id === id ){
        return {...item, Amount : item.Amount - 1}
      }else{
        return item
      }
    })
    setcart(newCart)
  }
    if(cartItem.Amount < 2){

      removefromcart(id)
    }
  
}

console.log()
  ///////////
  return (
    <CartContext.Provider  value={{
      cart, addtocart, 
      removefromcart,
      clearCart,
      increaseAmount,
      decreaseAmount,
      itemAmount,
      total
    }}>{children}</CartContext.Provider>
  )
}

 



export default CartProvider