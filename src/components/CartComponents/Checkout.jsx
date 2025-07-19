import React from 'react'

const Checkout = ({allCartItems}) => {
    var totalAmount = 0;

    allCartItems.forEach( item => totalAmount+=(item.price*item.quantity) )

  return (
    <div>
        <div className="card w-96 bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title font-black">Order Summary</h2>
                <div className='flex justify-between'>
                    <p>Items</p>
                    <p className='text-end'>${totalAmount.toFixed(2)}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Shipping</p>
                    <p className='text-end'>$5.00</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-black text-xl'>Total</p>
                    <p className='font-black text-xl text-end'>${(totalAmount+5).toFixed(2)}</p>
                </div>
                <div className="justify-center card-actions">
                    <button className="btn px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md transition-colors" onClick={()=>document.getElementById('my_modal_1').showModal()}>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout