import getSingleProduct from "@/libs/actions/getSingleProductData";
import ProductDetails from "@/components/product/product-details";
import Reviews from "@/components/product/reviews";

const ProductPage = async ({ params }: { params: { productId: number } }) => {
  const product = await getSingleProduct(params.productId);
  console.log(product);

  return (
    <main className="space-y-8 pt-[138px]">
      <ProductDetails
        id={product.id}
        title={product.title}
        thumbnail={product.thumbnail}
        description={product.description}
        rating={product.rating}
        category={product.category}
        price={product.price}
      />
      <Reviews productId={product.id} />
    </main>
  );
};

export default ProductPage;
