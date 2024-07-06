import CheckoutInput from "./checkout-input";

const ShippingInfo = () => {
  return (
    <>
      <CheckoutInput label="Address" id="address" type="text" />
      <div className="flex gap-x-4">
        <CheckoutInput label="ZIP code" id="zip" type="number" />
        <CheckoutInput label="City" id="city" type="text" />
      </div>
      <CheckoutInput label="Country" id="country" type="text" />
    </>
  );
};

export default ShippingInfo;
