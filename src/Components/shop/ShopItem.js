import React from "react";
import { Link } from "react-router-dom";

function ShopItem(props) {
  const { item } = props

  return (
    <Link to={`/product/${item.path}`}>
      <li className="sm:w-80 hover:scale-105 transition ease-in-out duration-100" data-testid="productName">
        <div className="h-60 sm:h-80 flex items-center bg-white"><img src={item.location} alt={item.name} /></div>
        <h3 className="text-xl mt-4 font-semibold">{item.name}</h3>
        <h4 className="text-lg mt-2">${item.price}.00</h4>
      </li>
    </Link>
  )
}

export default ShopItem