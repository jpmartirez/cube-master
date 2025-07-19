import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Products from "../pages/Products";
import { useState } from "react";
import Cart from "../pages/Cart";

function App() {

  const [cartCount, setCartCount] = useState(0);
  const [items, setItems] = useState([]);

  function addItems(item){
    const isExists = items.some(cartItems=>cartItems.id === item.id);
    if(!isExists){
      setCartCount(prevCount=>prevCount+1);
      setItems(prevItems=>{
        return [...prevItems, item];
      })
    }
  }

  function deleteItems(id){
    setItems(prevItems=>
      prevItems.filter((item) =>{
        return item.id !== id;
      })
    );
    setCartCount(prevValue => prevValue-1);
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage cartCount={cartCount} addItems={addItems}/>} />
      <Route path="/about" element={<About cartCount={cartCount}/>} />
      <Route path="/products" element={<Products cartCount={cartCount} addItems={addItems}/>} />
      <Route path="/cart" element={<Cart items={items} deleteItems={deleteItems}/>} />
    </Routes>
  )
}

export default App
