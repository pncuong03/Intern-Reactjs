import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deQty, inQty, removeCart } from "~/redux/cartSlice";
import { IProduct } from "~/types";

interface CartItemsProps {
  product: IProduct;
}

const CartItems: React.FC<CartItemsProps> = ({ product }) => {
  const dispatch = useDispatch();

  const onIncreaseQuantity = (productId: number) => {
    dispatch(inQty({ id: productId }));
    toast.success("Quantity increased");
  };

  const onDecreaseQuantity = (productId: number) => {
    dispatch(deQty({ id: productId }));
    toast.success("Quantity decreased");
  };

  const onRemoveItem = (productId: number) => {
    dispatch(removeCart({ id: productId }));
    toast.success("Item removed from cart");
  };

  return (
    <div className="flex hover:shadow-lg  w-[306px] transition-all ease-in duration-150 basis-1/3 flex-1  flex-col border-2 border-slate-500 px-3 py-2 rounded-md">
      <div className="flex flex-col items-center">
        <img
          className=" w-[225px] h-[225px] object-contain"
          src={product.image}
          alt={product.title}
        />
        <div className="my-5">
          <h3 className="text-center  font-bold">{product.title}</h3>
          <h3 className="text-center mt-3 font-medium">${product?.price}</h3>
          <h3 className="text-center mt-3 font-medium">
            Quantity: {product.qty}
          </h3>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 mb-2">
        <button
          onClick={() => onIncreaseQuantity(product.id)}
          title="Increase quantity"
          className=" px-2 py-2 text-black rounded-full"
        >
          <PlusCircleOutlined style={{ fontSize: 20 }} />
        </button>
        <button
          onClick={() => onDecreaseQuantity(product.id)}
          title="Decrease Quantity"
          className=" px-2 py-2 text-black rounded-full"
        >
          <MinusCircleOutlined style={{ fontSize: 20 }} />
        </button>
        <button
          onClick={() => onRemoveItem(product.id)}
          title="Remove item from cart"
          className=" px-2 py-2 text-black rounded-full"
        >
          <DeleteOutlined style={{ fontSize: 20 }} />
        </button>
      </div>
    </div>
  );
};

export default CartItems;
