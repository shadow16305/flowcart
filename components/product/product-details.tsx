"use client";

import Image from "next/image";
import Container from "../ui/container";
import ButtonPrimary from "../ui/button-primary";
import { ChangeEvent, useContext, useState } from "react";
import { CartContext } from "@/context/cart-context";
import toast from "react-hot-toast";

const ProductDetails: React.FC<SingleProduct> = ({
  id,
  title,
  description,
  thumbnail,
  price,
  rating,
  category,
}) => {
  const [quantity, setQuantity] = useState(1);
  const cartCtx = useContext(CartContext);

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);

    if (newQuantity < 1 || isNaN(newQuantity)) {
      setQuantity(1);
    } else {
      setQuantity(newQuantity);
    }
  };

  const decrementItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    cartCtx?.addToCart({
      id,
      title,
      thumbnail,
      price,
      quantity: quantity,
    });
    toast("Added to cart", {
      position: "bottom-right",
      duration: 3000,
    });
  };

  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <Container className="flex flex-col items-center justify-center rounded-2xl bg-neutral-800 py-24 lg:flex-row lg:justify-between lg:px-8">
      <div className="flex flex-col gap-x-6 lg:flex-row">
        <div className="relative h-[206px] w-[320px]">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-between text-white">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="max-w-[298px]">{description}</p>
          </div>
          <div className="space-y-3">
            <p>
              <span className="pr-1 font-semibold">Rating:</span> {rating}/5
            </p>
            <p>
              <span className="pr-1 font-semibold">Category:</span>{" "}
              {capitalizedCategory}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 rounded-2xl bg-white py-4 pl-6 pr-16 text-black">
        <p>
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <div className="flex items-center gap-x-4">
          <button onClick={decrementItem} className="text-3xl">
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="1"
            className="max-w-14 rounded-lg bg-slate-200 px-2 py-1 text-center placeholder:text-black focus:outline-none"
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="text-3xl"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          className="h-full w-full"
        >
          <ButtonPrimary>Add to cart</ButtonPrimary>
        </button>
      </div>
    </Container>
  );
};

export default ProductDetails;
