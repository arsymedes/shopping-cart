import React from "react";
import Plus from "./Plus"
import Minus from "./Minus"
import products from "../Products";

function CartEntry() {
  const product = products["iPhone 14 Pro"]
  return (
    <li className="grid grid-cols-[175px_1fr_50px] gap-5 py-6 border-b-2">
      <img src={product.location} alt="" />
      <section className="py-3 px-3 flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-3xl">{product.name}</h2>
          <h3 className="font-semibold text-lg text-slate-600">{product.type}</h3>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-2">
            <button><Minus /></button>
            <input className=" w-8 text-center font-semibold outline outline-1 outline-slate-400 rounded-sm p-0" type="text" />
            <button><Plus /></button>
          </div>
          <button className="text-[#e31312] font-semibold border-l-2 pl-10">Remove Item</button>
        </div>
      </section>
      <div className="flex justify-end text-3xl font-bold py-3">${product.price}.00</div>
    </li>
  )
}

export default CartEntry