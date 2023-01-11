import React from "react";
import CartEntry from "./CartEntry";

function Cart() {
  return (
    <main className="flex flex-col pt-36 px-8 sm:px-24 gap-6 sm:gap-12 scrollbar-thin scrollbar-track-white scrollbar-thumb-black">
      <h1 className="text-3xl sm:text-5xl font-semibold">Shopping Cart</h1>
      <ul className="flex flex-col sm:gap-6 mb-16">
        <CartEntry />
        <CartEntry />
      </ul>
      <div className="text-xl sm:text-3xl font-bold fixed bottom-0 left-0 h-16 w-screen flex justify-end items-center px-8 sm:px-24 bg-white">
        <div>Subtotal (2 Items): $1998</div>
      </div>
    </main>
  )
}

export default Cart