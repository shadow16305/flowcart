const URL = "https://dummyjson.com/products/";

const getSingleProduct = async (productId: number): Promise<SingleProduct> => {
  const res = await fetch(`${URL}${productId}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data;
};

export default getSingleProduct;
