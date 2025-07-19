import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
   

  return (
<footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 cardAppear">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 rounded-lg transform rotate-45"></div>
                    <div className="absolute inset-1 bg-white rounded transform rotate-45"></div>
                    <div className="absolute inset-2 bg-gradient-to-br from-green-500 via-orange-500 to-purple-500 rounded transform rotate-45"></div>
                </div>
                <h4 className="text-xl font-bold">CubeMaster</h4>
              </div>
              <p className="text-gray-400">Your ultimate destination for premium Rubik's cubes and puzzles.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-white transition-colors">
                    Products
                  </a>
                </li>
            
                <li>
                  <a href="https://www.speedcube.com.au/" target='_blank' className="hover:text-white transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://www.instagram.com/lopnajj_/" target='_blank' className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@SpeedCubeShopOfficial" target='_blank' className="hover:text-white transition-colors">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/" target='_blank' className="hover:text-white transition-colors">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/JohnPaul.Martirez18" target='_blank' className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {year} CubeMaster. All rights reserved.</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer