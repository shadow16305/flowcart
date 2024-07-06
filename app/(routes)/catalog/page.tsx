import getAllProducts from "@/libs/actions/getAllProductsData";
import Products from "@/app/(routes)/catalog/_components/products";
import CatalogBanner from "./_components/catalog-banner";

const CatalogPage = async () => {
  const products = await getAllProducts();

  return (
    <main className="space-y-8 pt-[138px]">
      <CatalogBanner />
      <Products items={products} />
    </main>
  );
};

export default CatalogPage;
