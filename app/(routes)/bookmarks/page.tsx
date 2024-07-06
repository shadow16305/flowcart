import Bookmarks from "./_components/bookmarks";
import BookmarksBanner from "./_components/bookmarks-banner";

const BookmarksPage = () => {
  return (
    <main className="space-y-8 pt-[138px]">
      <BookmarksBanner />
      <Bookmarks />
    </main>
  );
};

export default BookmarksPage;
