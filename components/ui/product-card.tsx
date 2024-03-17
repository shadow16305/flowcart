"use client";

import { BookmarkContext } from "@/context/bookmark-context";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";

const ProductCard: React.FC<Products> = ({ title, thumbnail, price, id }) => {
  const pathname = usePathname();
  const bookmarkCtx = useContext(BookmarkContext);
  const isBookmarked = bookmarkCtx.bookmarks.some((item) => item.id === id);

  const bookmarkHandler = () => {
    if (isBookmarked) {
      bookmarkCtx.removeBookmark(id);
    } else {
      const newBookmark = { id, title, thumbnail, price };
      bookmarkCtx.addBookmark(newBookmark);
    }
  };

  const getBaseButtonClasses = () => {
    return "absolute right-4 top-4 z-20 rounded-full p-2 transition-all";
  };

  const getButtonColorClasses = () => {
    if (pathname === "/bookmarks" || isBookmarked) {
      return "bg-black text-amber-400 hover:bg-white hover:text-black";
    } else {
      return "bg-white lg:opacity-0 lg:hover:bg-black lg:hover:text-amber-400 lg:group-hover:opacity-100";
    }
  };

  const bookmarkButtonClasses = clsx(
    getBaseButtonClasses(),
    getButtonColorClasses(),
  );

  return (
    <div className="group relative min-w-full lg:min-w-0">
      <SignedOut>
        <Link
          href="/sign-in"
          className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 opacity-0 transition-all hover:bg-black hover:text-amber-400 group-hover:opacity-100"
        >
          <BsBookmarkPlusFill size={24} />
        </Link>
      </SignedOut>
      <SignedIn>
        <button
          type="button"
          onClick={bookmarkHandler}
          className={bookmarkButtonClasses}
        >
          <BsBookmarkPlusFill size={24} />
        </button>
      </SignedIn>
      <Link
        href={`/catalog/${id}`}
        className="mx-auto flex w-11/12 flex-col items-center gap-y-6 rounded-2xl bg-white pb-7 transition-all group-hover:scale-95 lg:w-60"
      >
        <div className="relative h-[186px] w-full overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="rounded-t-2xl object-cover"
            sizes="(max-width: 768px) 100vw, (min-width: 768px) width: 220px"
          />
        </div>
        <div className="text-center">
          <h2 className="px-1 text-lg">{title}</h2>
          <p>${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
