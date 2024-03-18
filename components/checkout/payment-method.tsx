const PaymentMethod: React.FC<{ setIsCard: (arg0: boolean) => void }> = ({
  setIsCard,
}) => {
  return (
    <div className="flex justify-between">
      <p className="text-sm font-semibold">Payment Method</p>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-2 rounded-lg border border-neutral-800 py-2 pl-2 pr-6">
          <input
            type="radio"
            name="payment"
            value="Credit Card"
            onClick={() => setIsCard(true)}
            className="transition-all duration-300 checked:bg-amber-400 checked:text-amber-400 focus:outline-amber-400 focus:ring-amber-400"
          />
          <label htmlFor="card" className="text-sm font-semibold">
            Credit Card
          </label>
        </div>
        <div className="flex items-center gap-x-2 rounded-lg border border-neutral-800 py-2 pl-2 pr-6">
          <input
            type="radio"
            name="payment"
            value="Cash on Delivery"
            onClick={() => setIsCard(false)}
            className="transition-all duration-300 checked:bg-amber-400 checked:text-amber-400 focus:outline-amber-400 focus:ring-amber-400"
          />
          <label htmlFor="cash" className="text-sm font-semibold">
            Cash on Delivery
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
