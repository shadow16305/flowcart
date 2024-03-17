import getAllProducts from "@/libs/actions/getAllProductsData";
import ProductBanner from "@/components/product-banner";
import Container from "@/components/ui/container";
import ProductCard from "@/components/ui/product-card";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const HomePage = async () => {
  const products = await getAllProducts();

  return (
    <Container className="space-y-8 pt-[138px] ">
      <ProductBanner />
      <section className="flex flex-col flex-wrap items-center gap-y-4 lg:flex-row lg:gap-x-2 2xl:justify-between">
        {products.slice(0, 9).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
            price={product.price}
          />
        ))}
        <Link
          href="/catalog"
          className="flex h-[290px] min-w-[91.666667%] items-center justify-center gap-x-3 rounded-2xl bg-amber-400 px-10 text-2xl font-medium transition-all hover:scale-95 lg:min-w-0 lg:px-7 xl:px-10"
        >
          <p className="flex items-center gap-x-3">
            See more <IoIosArrowRoundForward size={24} />
          </p>
        </Link>
      </section>
    </Container>
  );
};

export default HomePage;
