import React from 'react'
import EmptyCart from './EmptyCart'
import ListItems from './ListItems'

const CartItems = ({items, deleteItems}) => {
  return (
    <div>
        {items.length === 0 ? <EmptyCart/> : <ListItems items={items} deleteItems={deleteItems}/>}
    </div>
  )
}

export default CartItems