import React from 'react'
import image1 from '../../assets/Logo.jpg';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const links=<>
    
    <li><NavLink to='/'>Home</NavLink></li>
    <li><a>Shop</a></li>
    <li><a>About us</a></li>
    <li><NavLink to="/ListedItem">Listed-Item</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex'>
        <img src={image1}  className=' mt-3 w-[30px] h-[30px]'  alt="" />
        <div>
        <a className="btn btn-ghost text-xl">Fresh Harvests</a>
        </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-5 ">
    <div className='flex gap-1'>
    <Heart />
    <p>Favorites</p>
    </div>
    <div className='flex gap-1'>
    <ShoppingCart />
    <p>Cart</p>
    </div>
    <div>
    <button className='btn border rounded-lg '>Sign in</button>
    </div>
  </div>
</div>
  )
}
