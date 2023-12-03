import React, { useState } from 'react'
import hamburger from '../assets/hamburger.svg'
import close from '../assets/close.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state) => state.cart.cart)

  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(!toggle)

  return (
    <div className='w-full h-[50px] md:h-[77px] bg-white border-b drop-shadow-md'>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
        <div><Link to="/">
          <h1 className='px-2 text-[2rem] text-[#FF7D00] font-medium'>Click<span className='text-[#215962]'>n</span>Cart</h1>
        </Link>
        </div>

        <div className='hidden md:flex gap-6'>
          <button className='flex justify-between items-center bg-transparent px-6 gap-2 text-[1.1rem]'><Link to="/ShopProduct">View Products</Link></button>
          <button className=' flex justify-center items-center px-6 py-3 rounded-md bg-[#FF7D00] text-white font-semibold mr-3 text-[1.1rem]'>
            <Link to="/Cart">Cart</Link>
            <div className='h-6 w-6 rounded-xl bg-[#fffafa] ml-3'>
                <h2 className='text-lg text-[#215962]'>{items.length}</h2>
            </div>
          </button>
        </div>

        <div className='md:hidden mx-3' onClick={handleClick}>
          <img src={toggle ? close : hamburger} />
        </div>
      </div>

      <div className={toggle ? 'absolute -10 p-4 bg-white w-full md:hidden' : 'hidden'}>
        <ul>
          <li className='text-center p-4 hover:bg-gray-100 text-sm text-[#FF7D00]'><Link to="/">ClicknCart</Link></li>
          <div className='flex flex-col my-4 gap-4'>
            <button className='border border-[#FF7D00] flex justify-center items-center bg-transparent px-6 gap-2 text-sm py-2 rounded-md'><Link to="/ShopProduct">View Products</Link></button>
            <button className='flex items-center justify-center px-20 py-3 rounded-md bg-[#FF7D00] text-white font-bold text-sm'>
              <Link to="/Cart">Cart</Link>
              <div className='h-6 w-6 rounded-xl bg-[#fffafa] ml-3'>
                <h2 className='text-lg text-[#215962]'>{items.length}</h2>
            </div>
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar