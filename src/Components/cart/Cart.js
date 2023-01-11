import React from "react";
import CartEntry from "./CartEntry";

function Cart() {
  return (
    <main className="flex flex-col pt-36 px-8 sm:px-24 gap-12">
      <h1 className="text-5xl font-semibold">Shopping Cart</h1>
      <ul className="flex flex-col gap-6">
        <CartEntry />
        <CartEntry />
      </ul>
      <div className="flex justify-end pb-12 text-3xl font-bold">
        Subtotal (2 Items): $1998
      </div>
    </main>
  )
}

export default Cart