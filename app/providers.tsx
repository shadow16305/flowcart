import BookmarkContextProvider from "@/context/bookmark-context";
import CartContextProvider from "@/context/cart-context";
import { ReactNode } from "react";

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <CartContextProvider>
      <BookmarkContextProvider>{children}</BookmarkContextProvider>
    </CartContextProvider>
  );
};

export default Providers;
