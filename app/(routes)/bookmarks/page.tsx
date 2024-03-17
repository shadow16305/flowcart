import Bookmarks from "@/components/bookmarks/bookmarks";
import BookmarksBanner from "@/components/bookmarks/bookmarks-banner";

const BookmarksPage = () => {
  return (
    <main className="space-y-8 pt-[138px]">
      <BookmarksBanner />
      <Bookmarks />
    </main>
  );
};

export default BookmarksPage;
