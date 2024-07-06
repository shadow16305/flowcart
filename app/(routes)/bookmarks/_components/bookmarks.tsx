"use client";

import { BookmarkContext } from "@/context/bookmark-context";
import { useContext } from "react";
import Link from "next/link";
import Container from "@/components/ui/container";
import ProductCard from "@/components/ui/product-card";
import ButtonPrimary from "@/components/ui/button-primary";

const Bookmarks = () => {
  const bookmarkCtx = useContext(BookmarkContext);

  return (
    <article className="bg-neutral-800">
      <Container className="flex flex-col flex-wrap gap-8 py-8 lg:flex-row">
        {bookmarkCtx.bookmarks.length > 0 ? (
          bookmarkCtx.bookmarks.map((bookmark) => (
            <ProductCard
              key={bookmark.id}
              id={bookmark.id}
              title={bookmark.title}
              price={bookmark.price}
              thumbnail={bookmark.thumbnail}
            />
          ))
        ) : (
          <div className="flex w-full flex-col items-center gap-y-4 text-white lg:py-44">
            <p>No bookmarks added...</p>
            <Link href="/catalog">
              <ButtonPrimary>Go to catalog</ButtonPrimary>
            </Link>
          </div>
        )}
      </Container>
    </article>
  );
};

export default Bookmarks;
