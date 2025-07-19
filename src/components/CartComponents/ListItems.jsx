import React, { useEffect, useRef, useState } from 'react'
import Checkout from './Checkout'

const ListItems = ({items, deleteItems}) => {
    const [allCartItems, setCartItems] = useState([]);
    const prevItemsRef = useRef([]);

    function handleCartItems(item, qty){
        setCartItems(prevItems=>{
            const {name, price} = item;
            return [...prevItems, {name, price, quantity: qty}];
        });
    }

    function deleteItem(item){
        setCartItems(prevItems=>{
            return prevItems.filter((product) => product.name !== item.name);
        });

        deleteItems(item.id)
    }

    function editQuantity(item, quantity){
        setCartItems(prevItems=>{
            return prevItems.filter((product) => product.name !== item.name);
        });

        handleCartItems(item, quantity);
    }

    useEffect(()=>{

        const prevItems = prevItemsRef.current;

        const newItems = items.filter((item)=>!prevItems.some(prev=>prev.id===item.id));

        newItems.forEach(item=>handleCartItems(item, 1));

        prevItemsRef.current=items;
    }, [items]);


  return (
    <div className=''>
        <div className='flex flex-wrap justify-center gap-10 my-10 items-center'>

            <div className="left-items flex flex-col gap-5 ">
                {items.map(item=>{
                    return <div className="bg-base-100 card-sm shadow-sm flex flex-wrap items-center justify-center gap-5 px-20  " key={item.id}>
                    <div className="w-[150px] h-[150px]">
                        <img
                            src={item.image}
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="">
                        <h2 className="font-bold">{item.name}</h2>
                        <p>${item.price}</p>
                    </div>

                    <div className="flex gap-3">
                        <input type="number" min={1} defaultValue={1} className='w-20 dark:text-black' onChange={(e)=>editQuantity(item, e.target.value)}/>
                        <button className="btn btn-primary" onClick={()=>deleteItem(item)}>Delete Item</button>
                    </div>
                </div>
                })
                }
            </div>

            <div className="right-checkout">
                <Checkout allCartItems={allCartItems}/>
            </div>

        </div>
    </div>
  )
}

export default ListItems