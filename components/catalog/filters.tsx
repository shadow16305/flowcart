import { category_items } from "@/constants/constants";
import clsx from "clsx";
import { RxCross2 } from "react-icons/rx";

interface FiltersProps {
  selectedCategory: string;
  setCategory: (name: string) => void;
  minPrice: number | null;
  setMinPrice: (price: number | null) => void;
  maxPrice: number | null;
  setMaxPrice: (price: number | null) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  setCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  return (
    <aside className="lg:min-w-none mx-auto flex h-fit w-full max-w-[91%] flex-col rounded-2xl bg-white py-6 pl-4 pr-24 lg:max-w-fit">
      <p className="text-xl font-semibold tracking-widest">Categories</p>
      <div className="mt-3 flex flex-col items-start gap-y-0.5">
        {category_items.map((category) => (
          <div
            key={category.name}
            className="flex w-[170px] items-center gap-x-2"
          >
            <button
              type="button"
              onClick={() => setCategory(category.name)}
              className={clsx(
                "transition-all hover:font-semibold",
                category.name === selectedCategory && "font-semibold",
              )}
            >
              {category.name}
            </button>
            {category.name === selectedCategory && (
              <button type="button" onClick={() => setCategory("")}>
                <RxCross2 />
              </button>
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-xl font-semibold tracking-widest">Price range</p>
      <div className="mt-3 flex items-center gap-x-2">
        <input
          type="number"
          value={minPrice || ""}
          className="max-w-14 rounded-lg bg-slate-200 px-2 py-1 focus:outline-none"
          onChange={(e) => setMinPrice(parseInt(e.target.value) || null)}
          placeholder="$0"
        />
        <span>to</span>
        <input
          type="text"
          value={maxPrice || ""}
          className="max-w-14 rounded-lg bg-slate-200 px-2 py-1 focus:outline-none"
          onChange={(e) => setMaxPrice(parseInt(e.target.value) || null)}
          placeholder="$0"
        />
      </div>
    </aside>
  );
};

export default Filters;
