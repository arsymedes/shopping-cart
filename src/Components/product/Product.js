import React from "react";
import products from "../Products";
import RightArrow from "./RightArrow";
import { useParams } from "react-router-dom";

function Product(props) {
  const gadget = useParams().gadget;
  const item = products[gadget];

  return (
    <div className="pt-36 px-16 flex flex-col sm:flex-row gap-20">
      <div className="sm:h-[28rem] sm:w-[28rem] flex items-center bg-white">
        <img className="h-auto w-full" src={item.location} alt={item.name} />
      </div>
      <div className="px-3 py-20 flex flex-col justify-between">
        <div className="flex flex-col gap-10">
          <h1 className="font-semibold text-lg sm:text-5xl">Buy {item.name}</h1>
          <h2 className="font-semibold text-lg sm:text-5xl">
            ${item.price}.00
          </h2>
        </div>
        <div className="flex items-center gap-12">
          <button className="flex gap-2 h-12 items-center font-semibold text-xl text-[#147CE5] px-4 rounded-3xl hover:bg-[#147CE5] hover:text-white transition ease-in-out duration-200">
            <RightArrow />
            <div>Buy Now</div>
          </button>
          <button className="w-36 h-12 font-semibold text-lg outline outline-black rounded-3xl hover:bg-slate-800 hover:text-white transition ease-in-out duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
