import React from 'react'

const CartHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 cardAppear">
          <h1 className="text-4xl font-bold mb-4">Your Shopping Cart</h1>
          <p className="text-xl text-blue-100">Review your selected items before checkout</p>
        </div>
      </section>
  )
}

export default CartHero