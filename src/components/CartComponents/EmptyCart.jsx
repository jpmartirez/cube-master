import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const EmptyCart = () => {
  return (
        <div className='flex justify-center my-10 cardAppearLeft'>
            <div className="card card-dash bg-base-100 ">
                <div className="card-body flex flex-col items-center">
                    <ShoppingCartIcon fontSize='large'/>
                    <h2 className="card-title text-3xl">Your cart is empty</h2>
                    <p className='text-center text-xl'>Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/cube-master/products" className="card-actions">
                        <button className="btn btn-primary mt-5">Start Shopping</button>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default EmptyCart