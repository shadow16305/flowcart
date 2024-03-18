"use client";

import { useContext, useState } from "react";
import CheckoutLayout from "./checkout-layout";
import CardDetails from "./card-details";
import PaymentMethod from "./payment-method";
import ShippingInfo from "./shipping-info";
import BillingDetails from "./billing-details";
import { CartContext } from "@/context/cart-context";
import CartItem from "../cart/cart-item";
import ButtonPrimary from "../ui/button-primary";

const CheckoutForm = () => {
  const [isCard, setIsCard] = useState(false);
  const cartCtx = useContext(CartContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col justify-between lg:flex-row"
    >
      <div className="flex flex-col gap-y-6 rounded-xl bg-white px-8 py-4">
        <CheckoutLayout name="billing details">
          <BillingDetails />
        </CheckoutLayout>
        <CheckoutLayout name="shipping info">
          <ShippingInfo />
        </CheckoutLayout>
        <CheckoutLayout name="payment details">
          <PaymentMethod setIsCard={setIsCard} />
          {isCard && <CardDetails />}
        </CheckoutLayout>
      </div>
      <div className="h-fit space-y-4 rounded-xl bg-white p-4">
        <p className="text-lg font-semibold">Cart</p>
        <div className="max-h-56 space-y-4 overflow-y-auto">
          {cartCtx.cartItems!.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
        <p className="font-semibold">
          Total:{" "}
          <span className="pl-1 font-normal">
            ${cartCtx.calculateTotalPrice()}
          </span>
        </p>
        <button type="submit" className="flex w-full justify-end">
          <ButtonPrimary className="w-full">Checkout</ButtonPrimary>
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
