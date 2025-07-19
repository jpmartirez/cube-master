import NavBar from '../components/Homepage/NavBar'
import ProductsHero from '../components/productsComponents/ProductsHero'
import Produts from '../components/productsComponents/Produts'
import AddModal from '../components/Homepage/AddModal'
import Search from '../components/productsComponents/Search'
import { useState } from 'react'
import Footer from '../components/Homepage/Footer'

const Products = ({cartCount, addItems}) => {

  const [productName, setProductName] = useState("");
  const [difficulty, setDifficulty] = useState("");

  return (
    <div>
        <NavBar cartCount={cartCount}/>
        <ProductsHero />
        <Search productName={productName} setProductName={setProductName} difficulty={difficulty} setDifficulty={setDifficulty}/>
        <Produts productName={productName} difficulty={difficulty} addItems={addItems}/>
        <AddModal />
        <Footer/>

    </div>
  )
}

export default Products