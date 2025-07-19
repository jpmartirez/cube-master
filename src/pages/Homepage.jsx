
import AddModal from "../components/Homepage/AddModal"
import Categories from "../components/Homepage/Categories"
import FeaturedProducts from "../components/Homepage/FeaturedProducts"
import Features from "../components/Homepage/Features"
import Footer from "../components/Homepage/Footer"
import Hero from "../components/Homepage/Hero"
import NavBar from "../components/Homepage/NavBar"
import Newsletter from "../components/Homepage/Newsletter"

function Homepage({cartCount, addItems}) {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <NavBar cartCount={cartCount}/>
      <Hero />
      <Categories />
      <FeaturedProducts addItems={addItems}/>
      <Features />
      <Newsletter />
      <Footer />
      <AddModal/>
    </div>
  )
}

export default Homepage
