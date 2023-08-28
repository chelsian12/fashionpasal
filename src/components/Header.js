import { NavLink } from "react-router-dom"

import logo from "../Assets/Images/logo.png"

import { HiShoppingBag } from 'react-icons/hi'

const Header = () => {
  return (
    <div className="flex justify-between content-center px-5 py-2 items-center h-20  top-0 w-full bg-[#34343E] ">
      <div className="h-auto w-80">
        <NavLink to='/'>
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <nav className="flex gap-10 justify-center items-center">
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/about-us'>About Us</NavLink >
        <NavLink to='/shopping'>Shop</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/contact-us'>Contact</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <HiShoppingBag className="text-3xl" />
      </nav>


    </div>
  )
}
export default Header