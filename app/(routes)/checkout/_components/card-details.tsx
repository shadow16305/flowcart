import CheckoutInput from "./checkout-input";

const CardDetails = () => {
  return (
    <div className="space-y-4">
      <div className="flex gap-x-4">
        <CheckoutInput
          label="Card Number"
          id="card_num"
          type="number"
          placeholder="4242 4242 4242 4242"
        />
        <CheckoutInput label="CVC" id="cvc" type="number" placeholder="000" />
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="text-sm font-semibold">Expiration Date</p>
        <div className="flex max-w-fit items-center rounded-lg border border-neutral-800 p-1">
          <input
            type="text"
            name="month"
            placeholder="MM"
            maxLength={2}
            inputMode="numeric"
            className="max-w-14 border-transparent text-center transition-colors focus:border-none focus:outline-none focus:ring-0"
          />
          <span className="mx-2">/</span>
          <input
            type="number"
            name="year"
            placeholder="YY"
            maxLength={2}
            inputMode="numeric"
            className="max-w-14 border-transparent text-center transition-colors focus:border-none focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
