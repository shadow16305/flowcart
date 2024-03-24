import BookmarkContextProvider from "@/context/bookmark-context";
import CartContextProvider from "@/context/cart-context";
import SearchContextProvider from "@/context/search-context";
import { ReactNode } from "react";

const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <CartContextProvider>
      <BookmarkContextProvider>
        <SearchContextProvider>{children}</SearchContextProvider>
      </BookmarkContextProvider>
    </CartContextProvider>
  );
};

export default Providers;
