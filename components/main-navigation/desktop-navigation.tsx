import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { BsHandbag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { TbBookmark } from "react-icons/tb";
import ButtonPrimary from "../ui/button-primary";

interface DesktopNavigationProps {
  bookmarks: BookmarkItem[];
  cartItems: CartItem[];
  onClick: () => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  bookmarks,
  cartItems,
  onClick,
}) => {
  return (
    <nav className="fixed left-1/2 z-50 hidden -translate-x-1/2 items-center justify-between rounded-2xl bg-neutral-800 px-8 py-5 text-white lg:mt-6 lg:flex lg:w-[1000px] xl:w-[1180px] 2xl:w-[1240px]">
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
        <Link
          href="/bookmarks"
          className="relative transition hover:-translate-y-1 hover:text-amber-400"
        >
          {bookmarks.length > 0 && (
            <span className="absolute -right-1 -top-2 h-4 w-4 rounded-full bg-amber-400 text-center text-xs text-black">
              {bookmarks.length}
            </span>
          )}
          <TbBookmark size={24} />
        </Link>
        <button
          type="button"
          onClick={onClick}
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
      </div>
    </nav>
  );
};

export default DesktopNavigation;
