import React from 'react'
import { ShoppingCart, Star, Heart } from "lucide-react"
import allProducts from '../../assets/productAssets/allProducts'

const Produts = ({productName, difficulty, addItems}) => {

  const filteredProducts = allProducts.filter((product) => {
    const nameMatch = productName === "" || product.name.toLowerCase().includes(productName.toLowerCase());
    const difficultyMatch = difficulty === "" || product.difficulty === difficulty;
    return nameMatch && difficultyMatch;
  });

  function addProduct(item){
    addItems(item);
  }

  return (
    <div className='mb-10'>
      {filteredProducts.length === 0 ? 
      
      <div className='flex justify-center'>
        <div role="alert" className="alert alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>No product/s found. Please try again</span>
        </div> 
      </div>

              :   

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            
              {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group "
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
                    <span className="px-2 py-1 text-xs border border-gray-300 rounded-xl dark:text-black dark:border-black">{product.difficulty}</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors dark:text-black">
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
      }
    </div>
    
  )
}

export default Produts