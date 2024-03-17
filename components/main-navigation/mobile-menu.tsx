import Link from "next/link";
import { BsHandbag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { TbBookmark } from "react-icons/tb";

interface MobileMenuProps {
  bookmarks: BookmarkItem[];
  cartItems: CartItem[];
  onClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  bookmarks,
  cartItems,
  onClick,
}) => {
  return (
    <div className="flex flex-col items-center gap-y-8 py-8">
      <div className="space-x-4 text-lg">
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
          className="relative transition hover:-translate-y-1 hover:text-amber-400"
        >
          {bookmarks.length > 0 && (
            <span className="absolute -right-1 -top-2 h-4 w-4 rounded-full bg-amber-400 text-center text-xs text-black">
              {bookmarks.length}
            </span>
          )}
          <TbBookmark size={24} />
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
