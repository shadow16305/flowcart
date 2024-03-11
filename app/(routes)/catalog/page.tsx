import getAllProducts from "@/libs/actions/getAllProductsData";
import CatalogBanner from "@/components/catalog/catalog-banner";
import Products from "@/components/catalog/products";

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
