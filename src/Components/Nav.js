import Logo from "./Logo"
import React from "react"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="font-apple w-full flex justify-between items-center px-16 pt-14 font-semibold absolute text-white">
      <div className="flex items-center gap-2">
        <Logo />
        <div>Apple Store</div>
      </div>
      <ul className="flex content-between gap-16">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <li>Cart</li>
      </ul>
    </nav>
  )
}

export default Nav