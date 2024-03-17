import Container from "../ui/container";

const BookmarksBanner = () => {
  return (
    <section className="w-full bg-amber-300 py-7">
      <Container className="flex justify-center text-[32px] font-semibold lg:justify-between">
        <span className="hidden tracking-widest text-amber-400 lg:block">
          BOOKMARKS
        </span>
        <span className="hidden tracking-widest text-amber-400 lg:block">
          BOOKMARKS
        </span>
        <span className="tracking-widest text-black">BOOKMARKS</span>
        <span className="hidden tracking-widest text-amber-400 lg:block">
          BOOKMARKS
        </span>
        <span className="hidden tracking-widest text-amber-400 lg:block">
          BOOKMARKS
        </span>
      </Container>
    </section>
  );
};

export default BookmarksBanner;
