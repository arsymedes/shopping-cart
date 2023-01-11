import Logo from "./Logo";
import CartLogo from "./CartLogo";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation()

  function textColor() {
    if (location.pathname === "/") return "text-white"
    return "text-black"
  }

  return (
    <nav className={`font-apple ${textColor()} w-full flex justify-between items-center px-8 sm:px-24 pt-14 font-semibold absolute`}>
      <div className="flex items-center gap-2 cursor-default">
        <Logo />
        <div>Apple Store</div>
      </div>
      <ul className="flex content-between items-center gap-4 sm:gap-16">
        <Link to="/">
          <li className="hover:text-slate-600 transition duration-200 ease-in-out">Home</li>
        </Link>
        <Link to="/shop">
          <li className="hover:text-slate-600 transition duration-200 ease-in-out">Shop</li>
        </Link>
        <Link to="/cart">
          <li className="hover:text-slate-600 transition duration-200 ease-in-out"><CartLogo /></li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
