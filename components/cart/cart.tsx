import Link from "next/link";
import ButtonSecondary from "../ui/button-secondary";
import clsx from "clsx";
import CartItem from "./cart-item";
import { IoIosClose } from "react-icons/io";

interface CartProps {
  onClick: () => void;
  cartIsOpen: boolean;
  items?: CartItem[];
  clearCart: () => void;
  totalPrice: number;
}

const Cart: React.FC<CartProps> = ({
  items,
  clearCart,
  onClick,
  totalPrice,
}) => {
  return (
    <aside className={clsx("flex flex-col gap-y-4 rounded-2xl bg-white p-4")}>
      <div className="flex justify-between">
        <h5 className="text-lg font-semibold tracking-widest">Cart</h5>
        <div className="flex gap-x-4">
          {items!.length > 0 && (
            <button type="button" onClick={clearCart} className="">
              Clear cart
            </button>
          )}
          <button onClick={onClick}>
            <IoIosClose size={24} />
          </button>
        </div>
      </div>
      {items!.length > 0 ? (
        <>
          <div className="max-h-56 space-y-4 overflow-y-auto">
            {items!.map((item) => (
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
        </>
      ) : (
        <p className="text-neutral-600">Cart is empty...</p>
      )}
      <p className="font-semibold">
        Total: <span className="pl-1 font-normal">${totalPrice}</span>
      </p>
      {items!.length < 1 ? (
        <ButtonSecondary className="w-full cursor-not-allowed text-center">
          Checkout
        </ButtonSecondary>
      ) : (
        <Link href="/checkout" className="flex justify-center">
          <ButtonSecondary className="w-full text-center">
            Checkout
          </ButtonSecondary>
        </Link>
      )}
    </aside>
  );
};

export default Cart;
