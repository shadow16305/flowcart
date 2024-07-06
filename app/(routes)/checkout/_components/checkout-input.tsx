interface CheckoutInputProps {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
}

const CheckoutInput: React.FC<CheckoutInputProps> = ({
  label,
  id,
  type,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="rounded-lg border border-neutral-800 bg-transparent px-4 py-2 transition-colors focus:border-amber-400 focus:outline-none focus:ring-0"
        placeholder={placeholder}
        inputMode={
          id === "phone number" || id === "card_num" || id === "zip"
            ? "numeric"
            : "text"
        }
      />
    </div>
  );
};

export default CheckoutInput;
