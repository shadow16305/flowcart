"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface BookmarkContextObject {
  bookmarks: BookmarkItem[];
  addBookmark: (item: BookmarkItem) => void;
  removeBookmark: (itemId: number) => void;
}

export const BookmarkContext = createContext<BookmarkContextObject>({
  bookmarks: [],
  addBookmark: () => {},
  removeBookmark: () => {},
});

const BookmarkContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  const saveBookmarksToLocalStorage = (items: BookmarkItem[]) => {
    localStorage.setItem("bookmarks", JSON.stringify(items));
  };

  const removeBookmark = (itemId: number) => {
    const updatedBookmarks = bookmarks.filter((item) => item.id !== itemId);
    setBookmarks(updatedBookmarks);
    saveBookmarksToLocalStorage(updatedBookmarks);
  };

  const addBookmark = (item: BookmarkItem) => {
    const existingItem = bookmarks.find((bookmark) => bookmark.id === item.id);

    if (existingItem) {
      removeBookmark(item.id);
    } else {
      const updatedbookmarks = [...bookmarks, { ...item }];
      setBookmarks(updatedbookmarks);
      saveBookmarksToLocalStorage(updatedbookmarks);
    }
  };

  const bookmarkContextValue = {
    bookmarks,
    addBookmark,
    removeBookmark,
  };

  return (
    <BookmarkContext.Provider value={bookmarkContextValue}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContextProvider;
