import React from 'react'
import featuredProducts from '../../assets/featuredProducts'
import { ShoppingCart, Star, Heart } from "lucide-react"
import { Link } from 'react-router-dom'


const FeaturedProducts = ({addItems}) => {

  function addProduct(item){
    addItems(item);
  }

  return (
  <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Hand-picked cubes loved by speedcubers worldwide</p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cardLeftView"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span
                      className={`absolute top-4 left-4 px-2 py-1 text-xs font-semibold text-white rounded ${
                        product.badge === "Sale"
                          ? "bg-red-500"
                          : product.badge === "New"
                            ? "bg-green-500"
                            : "bg-blue-500"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <button className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 text-xs border border-gray-600 rounded-xl text-black ">{product.difficulty}</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors text-black">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <label
                    className="btn w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md transition-colors flex items-center justify-center hover:cursor-pointer"
                    htmlFor="my_modal_7"
                    onClick={() => addProduct(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </label>
                </div>
              </div>
            ))}
          </div>


        </div>
    </section>
  )
}

export default FeaturedProducts