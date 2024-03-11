import CartContextProvider from "@/context/cart-context";
import { ReactNode } from "react";

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default Providers;
