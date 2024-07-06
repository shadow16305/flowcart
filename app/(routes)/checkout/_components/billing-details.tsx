import CheckoutInput from "./checkout-input";

const BillingDetails = () => {
  return (
    <>
      <div className="flex gap-x-4">
        <CheckoutInput
          label="Name"
          id="name"
          type="text"
          placeholder="John Smith"
        />
        <CheckoutInput
          label="Email Address"
          id="email"
          type="email"
          placeholder="example@email.com"
        />
      </div>
      <CheckoutInput
        label="Phone Number"
        id="phone number"
        type="tel"
        placeholder="+123123123"
      />
    </>
  );
};

export default BillingDetails;
