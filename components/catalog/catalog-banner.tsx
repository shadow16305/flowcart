import Container from "../ui/container";

const CatalogBanner = () => {
  return (
    <section className="w-full bg-amber-300 py-7">
      <Container className="flex justify-between text-[32px] font-semibold">
        <span className="tracking-widest text-amber-400">CATALOG</span>
        <span className="tracking-widest text-amber-400">CATALOG</span>
        <span className="tracking-widest text-black">CATALOG</span>
        <span className="tracking-widest text-amber-400">CATALOG</span>
        <span className="tracking-widest text-amber-400">CATALOG</span>
      </Container>
    </section>
  );
};

export default CatalogBanner;
