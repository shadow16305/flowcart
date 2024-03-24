"use client";

import React, { useContext, useState } from "react";
import Filters from "./filters";
import Container from "../ui/container";
import ProductCard from "../ui/product-card";
import Pagination from "./pagination";
import { SearchContext } from "@/context/search-context";

interface ProductsProps {
  items: Products[];
}

const Products: React.FC<ProductsProps> = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const itemsPerPage = 9;
  const searchCtx = useContext(SearchContext);

  const searchedItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchCtx.searchValue.toLowerCase()),
  );

  const filteredItems = items.filter((item) => {
    if (category && item.category !== category) {
      return false;
    }
    if (minPrice !== null && item.price < minPrice) {
      return false;
    }
    if (maxPrice !== null && item.price > maxPrice) {
      return false;
    }
    return true;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <article className="bg-neutral-800 py-8">
      <Container className="flex flex-col gap-x-16 gap-y-8 lg:flex-row 2xl:gap-x-40">
        <Filters
          selectedCategory={category}
          setCategory={setCategory}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          setSearchValue={searchCtx.setSearchValue}
        />
        <section className="space-y-8">
          <div className="flex flex-wrap gap-8">
            {searchCtx.searchValue === ""
              ? currentItems.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    thumbnail={product.thumbnail}
                    price={product.price}
                  />
                ))
              : searchedItems.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    thumbnail={product.thumbnail}
                    price={product.price}
                  />
                ))}
          </div>
          {category === "" &&
            maxPrice === null &&
            minPrice === null &&
            searchCtx.searchValue === "" && (
              <Pagination
                items={items}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                paginate={paginate}
              />
            )}
        </section>
      </Container>
    </article>
  );
};

export default Products;
