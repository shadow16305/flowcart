"use client";

import { CartContext } from "@/context/cart-context";
import Image from "next/image";
import { ChangeEvent, useContext, useState } from "react";

const CartItem: React.FC<CartItem> = ({
  id,
  title,
  price,
  thumbnail,
  quantity,
}) => {
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);
  const cartCtx = useContext(CartContext);

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);

    if (newQuantity < 1) {
      cartCtx.removeFromCart(id);
    } else {
      setUpdatedQuantity(newQuantity);
      cartCtx.addToCart({
        id,
        title,
        price,
        thumbnail,
        quantity: newQuantity,
      });
    }
  };

  const decrementItem = () => {
    const newQuantity = updatedQuantity - 1;
    if (newQuantity > 0) {
      setUpdatedQuantity(newQuantity);
      cartCtx.addToCart({
        id,
        title,
        price,
        thumbnail,
        quantity: newQuantity,
      });
    } else {
      cartCtx.removeFromCart(id);
    }
  };

  const incrementItem = () => {
    const newQuantity = updatedQuantity + 1;
    setUpdatedQuantity(newQuantity);
    cartCtx.addToCart({
      id,
      title,
      price,
      thumbnail,
      quantity: newQuantity,
    });
  };

  return (
    <div className="flex items-center gap-x-12">
      <div className="flex items-center gap-x-2 lg:w-80">
        <Image
          src={thumbnail}
          alt={title}
          width={96}
          height={32}
          className="rounded-xl"
        />
        <div className="space-y-1">
          <p className="font-semibold">{title}</p>
          <p className="text-sm">${price * updatedQuantity}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <button type="button" onClick={() => cartCtx.removeFromCart(id)}>
          Remove
        </button>
        <div className="flex items-center gap-x-2">
          <button type="button" onClick={decrementItem} className="text-3xl">
            -
          </button>
          <input
            type="number"
            value={updatedQuantity}
            onChange={handleQuantityChange}
            className="max-w-14 rounded-lg border-none bg-slate-200 px-2 py-1 text-center placeholder:text-black focus:border-none focus:outline-none focus:ring-0"
          />
          <button type="button" onClick={incrementItem} className="text-3xl">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
