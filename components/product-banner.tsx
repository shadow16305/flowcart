import Link from "next/link";
import ButtonSecondary from "./ui/button-secondary";

const ProductBanner = () => {
  return (
    <section className="flex w-full flex-col items-center gap-y-4 rounded-3xl bg-neutral-800 py-16">
      <h1 className="text-[32px] tracking-widest text-white">
        Browse our products
      </h1>
      <Link href="/catalog">
        <ButtonSecondary>Catalog</ButtonSecondary>
      </Link>
    </section>
  );
};

export default ProductBanner;
