import React from "react";
import products from "../Products";
import CartEntry from "./CartEntry";

function Cart(props) {
  const { purchases, setPurchases } = props;

  function iterator() {
    return Object.entries(purchases).map((el) => (
      <CartEntry key={el[0]} item={el} setPurchases={setPurchases} />
    ));
  }

  function htmlPurchases() {
    const belanjaan = iterator()
    if (belanjaan.length !== 0) {
      return <ul className="flex flex-col sm:gap-6 mb-20">{belanjaan}</ul>
    }
    return (
      <div className="text-3xl mt-12 text-center text-zinc-300 flex flex-col gap-4">
        <p>What are you waiting for?</p>
        <p>Go buy our products!</p>
      </div>
    )

  }

  function subtotal() {
    return Object.entries(purchases).reduce(
      (total, el) => el[1] * products[el[0]].price + total,
      0
    );
  }

  return (
    <main className="flex flex-col pt-36 px-8 sm:px-24 gap-6 sm:gap-12">
      <h1 className="text-3xl sm:text-5xl font-semibold">Shopping Cart</h1>
      {htmlPurchases()}
      <div className="text-xl border-t-2 border-black sm:text-3xl font-bold fixed bottom-0 left-0 h-20 w-screen flex justify-end items-center px-8 sm:px-24 bg-white">
        <div>Subtotal (2 Items): ${subtotal()}.00</div>
      </div>
    </main>
  );
}

export default Cart;
