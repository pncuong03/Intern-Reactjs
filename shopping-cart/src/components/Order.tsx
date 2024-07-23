import React from "react";
import { useSelector } from "react-redux";
import { getTotal } from "~/ultils/getTotal";

const Order = () => {
  const cartItems = useSelector((state: any) => state.cartReducer.cart);

  const quantity = getTotal(cartItems).totalQuantity;
  const price = getTotal(cartItems).totalPrice;

  return (
    <div className="pt-5 pb-10 px-3 order-2 border-slate-500 rounded-md">
      <h2 className="font-bold text-center text-2xl mb-5">Order Value</h2>

      <h3 className="text-xl text-center  ">
        Total Quantity: Total Quantity:{" "}
        <span className="font-bold"> {quantity}</span>
      </h3>
      <h3 className="text-xl text-center mt-5  ">
        Total Price: <span className="font-bold">{price.toFixed(2)} $</span>
      </h3>
    </div>
  );
};
export default Order;
