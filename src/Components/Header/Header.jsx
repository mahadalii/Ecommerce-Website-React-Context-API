import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {BsCart3} from "react-icons/bs"
import { CartItemsContext } from '../../context/CartItems'

const Header = () => {
  const { itemsQuantity } = useContext(CartItemsContext)
  return (
    <>
      <header className="bg-dark">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white  md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-2 text-xl">My Logo</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to={'/'} className="mr-5 hover:text-white text-decoration-none text-white">Collection</NavLink>
            <NavLink to={'/cart'} className="mr-5 hover:text-white text-decoration-none text-white">Cart</NavLink>
            <NavLink to={''} className="mr-5 hover:text-white text-decoration-none text-white">
              <BsCart3 size={30}/>
              <sup className='total-value'>{itemsQuantity}</sup>
            </NavLink>
          </nav>
        </div>
      </header>
      <Outlet />

    </>
  )
}

export default Header