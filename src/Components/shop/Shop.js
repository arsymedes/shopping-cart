import React from "react";
import products from "../Products";
import ShopItem from "./ShopItem";
import { Link, useParams } from "react-router-dom";

function Shop() {
  const device = useParams().device

  function iterator() {
    const items = Object.values(products).filter((el) => !device || el.type === device).map((key) => (
      <ShopItem item={key} />
    ));
    return items;
  }

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-[1fr_3fr] pt-36 pb-12 px-8 sm:px-24 sm:gap-12 scrollbar-thin scrollbar-track-white scrollbar-thumb-black">
      <aside className="flex flex-col gap-28">
        <h1 className="font-semibold text-5xl">{device || "All Products"}</h1>
        <ul className="font-semibold text-slate-700 text-3xl flex flex-col gap-3">
          <Link to="/shop/iPhone">
            <li className="relative group">
              <span>iPhone</span>
              <span className="absolute -z-10 bottom-0 left-0 w-0 h-2 bg-gray-500 transition-all  duration-300 ease-in-out group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="/shop/iPad">
            <li className="relative group">
              <span>iPad</span>
              <span className="absolute -z-10 bottom-0 left-0 w-0 h-2 bg-gray-500 transition-all  duration-300 ease-in-out group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="/shop/Mac">
            <li className="relative group">
              <span>Mac</span>
              <span className="absolute -z-10 bottom-0 left-0 w-0 h-2 bg-gray-500 transition-all  duration-300 ease-in-out group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="/shop/Watch">
            <li className="relative group">
              <span>Watch</span>
              <span className="absolute -z-10 bottom-0 left-0 w-0 h-2 bg-gray-500 transition-all  duration-300 ease-in-out group-hover:w-full"></span>
            </li>
          </Link>
        </ul>
      </aside>
      <main>
        <ul className="grid grid-cols-2 sm:grid-cols-dynamic gap-6">{iterator()}</ul>
      </main>
    </div>
  );
}

export default Shop;
