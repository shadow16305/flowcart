"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import ButtonPrimary from "../ui/button-primary";
import Hamburger from "./hamburger";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenu from "./mobile-menu";
import { BsHandbag } from "react-icons/bs";

interface MobileNavigationProps {
  bookmarks: BookmarkItem[];
  cartItems: CartItem[];
  toggleCart: () => void;
  isOpen: boolean;
  setIsOpen: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  bookmarks,
  toggleCart,
  cartItems,
  isOpen,
  setIsOpen,
}) => {
  return (
    <nav className="fixed z-50 w-full">
      <div className="relative z-50 flex w-full items-center justify-between bg-neutral-800 p-4 text-white lg:hidden">
        <Link href="/" className="text-2xl font-bold tracking-widest">
          Flowcart
        </Link>
        <div className="flex items-center gap-x-4">
          <button
            type="button"
            onClick={toggleCart}
            className="relative transition hover:-translate-y-1 hover:text-amber-400"
          >
            {cartItems.length > 0 && (
              <span className="absolute -right-1 -top-2 h-4 w-4 rounded-full bg-amber-400 text-center text-xs text-black">
                {cartItems.length}
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
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={setIsOpen}
              className="fixed left-0 top-0 z-30 h-screen w-screen bg-black opacity-40"
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4 }}
              className="relative top-0 z-40 w-full overflow-hidden bg-neutral-800 text-white"
            >
              <MobileMenu
                bookmarks={bookmarks}
                cartItems={cartItems}
                onClick={toggleCart}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavigation;
