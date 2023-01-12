import React from "react";
import Plus from "./Plus";
import Minus from "./Minus";
import products from "../Products";

function CartEntry(props) {
  const { item, setPurchases} = props

  const product = products[item[0]];

  function handleInputChange(event) {
    let value = event.target.value
    const key = event.nativeEvent.data
    if (value === 0) {value = key}
    if (value === "") {value = 0}

    if (!isNaN(+key)) {
      setPurchases((prevState) => ({
        ...prevState,
        [item[0]]: +value,
      }))
    }
  }

  function addCart() {
    setPurchases((prevState) => ({
      ...prevState,
      [item[0]]: prevState[item[0]] + 1,
    }))
  }

  function minusCart() {
    setPurchases((prevState) => ({
      ...prevState,
      [item[0]]: ((prevState[item[0]] - 1) < 0 ? 0 : prevState[item[0]] - 1),
    }))
  }

  function removeItem() {
    setPurchases((prevState) => {
      const copy = {...prevState}
      delete copy[item[0]]
      return copy
    })
  }

  return (
    <li className="grid grid-cols-[100px_1fr_50px] sm:grid-cols-[175px_1fr_50px] sm:gap-5 py-6 border-b-2">
      <img src={product.location} alt="" />
      <section className="py-3 px-3 flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-lg sm:text-3xl">{product.name}</h2>
          <h3 className="font-semibold text-md sm:text-lg text-slate-600">
            {product.type}
          </h3>
        </div>
        <div className="flex gap-2 sm:gap-8 items-center">
          <div className="flex gap-2">
            <button onClick={minusCart}>
              <Minus />
            </button>
            <input
              className="w-6 h-6 py-2 sm:w-8 text-center font-semibold outline outline-1 outline-slate-400 rounded-sm"
              type="text"
              value={item[1]}
              onChange={handleInputChange}
            />
            <button onClick={addCart}>
              <Plus />
            </button>
          </div>
          <button onClick={removeItem} className="text-[#e31312] w-6 sm:w-auto text-center text-sm sm:text-md font-semibold border-l-2 pl-2 sm:pl-10">
            Remove Item
          </button>
        </div>
      </section>
      <div className="flex justify-end text-lg sm:text-3xl font-semibold py-3">
        ${product.price}.00
      </div>
    </li>
  );
}

export default CartEntry;
