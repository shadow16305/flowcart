"use client";

import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "../cart/cart";
import { CartContext } from "@/context/cart-context";
import { usePathname } from "next/navigation";
import { BookmarkContext } from "@/context/bookmark-context";
import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";
import { SearchContext } from "@/context/search-context";
import SearchBox from "./search-box";

const MainNavigation = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const cartCtx = useContext(CartContext);
  const bookmarkCtx = useContext(BookmarkContext);
  const pathname = usePathname();

  const cartHandler = () => {
    setCartIsOpen(!cartIsOpen);
  };

  useEffect(() => {
    if (cartIsOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [cartIsOpen]);

  return (
    pathname !== "/sign-in" &&
    pathname !== "/sign-up" && (
      <>
        <DesktopNavigation
          bookmarks={bookmarkCtx.bookmarks}
          cartItems={cartCtx.cartItems}
          onClick={cartHandler}
        />
        <MobileNavigation
          bookmarks={bookmarkCtx.bookmarks}
          cartItems={cartCtx.cartItems}
          toggleCart={cartHandler}
          isOpen={mobileMenuIsOpen}
          setIsOpen={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        />
        <AnimatePresence mode="wait">
          {cartIsOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                onClick={() => setCartIsOpen(!cartIsOpen)}
                className="fixed left-0 top-0 z-30 h-screen w-screen bg-black opacity-40"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 mx-auto mb-auto mt-32 h-fit w-fit origin-center lg:inset-auto lg:right-[16%] lg:top-32 lg:mb-0 lg:mt-0"
              >
                <Cart
                  items={cartCtx?.cartItems}
                  totalPrice={cartCtx.calculateTotalPrice()}
                  onClick={() => setCartIsOpen(!cartIsOpen)}
                  clearCart={cartCtx.clearCart}
                  cartIsOpen={cartIsOpen}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    )
  );
};

export default MainNavigation;
