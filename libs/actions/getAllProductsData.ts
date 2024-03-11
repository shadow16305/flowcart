const URL = "https://dummyjson.com/products?limit=0";

const getAllProducts = async (): Promise<Products[]> => {
  const res = await fetch(URL);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.products;
};

export default getAllProducts;
