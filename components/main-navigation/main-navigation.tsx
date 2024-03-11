"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BsHandbag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { TbBookmark } from "react-icons/tb";
import ButtonPrimary from "../ui/button-primary";
import Cart from "../cart/cart";
import { CartContext } from "@/context/cart-context";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const MainNavigation = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const cartCtx = useContext(CartContext);
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
        <nav className="fixed left-1/2 z-50 mt-6 flex -translate-x-1/2 items-center justify-between rounded-2xl bg-neutral-800 px-8 py-5 text-white lg:w-[1000px] xl:w-[1180px] 2xl:w-[1240px]">
          <div className="space-x-6">
            <Link href="/" className="text-2xl font-bold tracking-widest">
              Flowcart
            </Link>
            <Link href="/" className="group relative">
              Home
              <div className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-3xl bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/catalog" className="group relative">
              Catalog
              <div className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-3xl bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
          <div className="flex items-center gap-x-6">
            <button
              type="button"
              className="transition hover:-translate-y-1 hover:text-amber-400"
            >
              <FiSearch size={24} />
            </button>
            <Link
              href="/bookmarks"
              className="transition hover:-translate-y-1 hover:text-amber-400"
            >
              <TbBookmark size={24} />
            </Link>
            <button
              type="button"
              onClick={cartHandler}
              className="relative transition hover:-translate-y-1 hover:text-amber-400"
            >
              {cartCtx.cartItems.length > 0 && (
                <span className="absolute -right-1 -top-2 h-4 w-4 rounded-full bg-amber-400 text-xs text-black">
                  {cartCtx.cartItems.length}
                </span>
              )}
              <BsHandbag size={24} />
            </button>
            <SignedOut>
              <Link href="/sign-in">
                <ButtonPrimary>Sign in</ButtonPrimary>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </nav>
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
                className="fixed right-[20%] top-32 z-40 origin-center"
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
