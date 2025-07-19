import React from 'react'
import NavBar from '../components/Homepage/NavBar'
import CartHero from '../components/CartComponents/CartHero'
import Footer from '../components/Homepage/Footer'
import CartItems from '../components/CartComponents/CartItems'
import CheckOutModal from '../components/CartComponents/CheckOutModal'

const Cart = ({items, deleteItems}) => {
  return (
    <div>
        <NavBar/>
        <CartHero/>
        <CartItems items={items} deleteItems={deleteItems}/>
        <CheckOutModal/>
        <Footer/>
    </div>
  )
}

export default Cart