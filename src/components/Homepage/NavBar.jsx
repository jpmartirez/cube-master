import {useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const NavBar = ({cartCount}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

  return (
    <nav className="bg-white dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse cardAppear">
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 rounded-lg transform rotate-45"></div>
                        <div className="absolute inset-1 bg-white rounded transform rotate-45"></div>
                        <div className="absolute inset-2 bg-gradient-to-br from-green-500 via-orange-500 to-purple-500 rounded transform rotate-45"></div>
                    </div>
                    <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-red-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                        CubeMaster
                    </h1>
                </div>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                
                <div className='flex md:gap-x-5 items-center cardAppear'>
                   
                    <button className='p-2 hover:bg-gray-100 rounded-md hover:cursor-pointer'>
                         <PersonIcon />
                    </button>
                    <Link to={"/cart"}> 
                        <button className='p-2 hover:bg-gray-100 rounded-md hover:cursor-pointer relative'>
                            <ShoppingCartIcon />
                            {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                                {cartCount}
                            </span>
                            )}
                        </button>
                    </Link>
                </div>

                <button onClick={handleToggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cardAppear" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div className={`${isMenuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 cardAppear">
                    <li>
                        <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link to="/products" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</Link>
                    </li>
                    
                    <li>
                        <a href="https://www.speedcube.com.au/" target='_blank' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tutorials</a>
                    </li>
                    <li>
                        <Link to="/about" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar