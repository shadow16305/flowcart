import clsx from "clsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  items: Products[];
  itemsPerPage: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  items,
  itemsPerPage,
  currentPage,
  paginate,
}) => {
  return (
    items.length > itemsPerPage && (
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={clsx(
            "text-xl",
            currentPage === 1
              ? "cursor-not-allowed text-gray-400"
              : "text-white",
          )}
        >
          <FiChevronLeft />
        </button>
        <ul className="flex">
          {Array.from(Array(Math.ceil(items.length / itemsPerPage)).keys()).map(
            (pageNumber) => (
              <li key={pageNumber} className="mx-1">
                <button
                  onClick={() => paginate(pageNumber + 1)}
                  className={clsx(
                    "text-xl",
                    currentPage === pageNumber + 1
                      ? "text-amber-400"
                      : "text-white",
                  )}
                >
                  {pageNumber + 1}
                </button>
              </li>
            ),
          )}
        </ul>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(items.length / itemsPerPage)}
          className={clsx(
            "text-xl",
            currentPage === Math.ceil(items.length / itemsPerPage)
              ? "cursor-not-allowed text-gray-400"
              : "text-white",
          )}
        >
          <FiChevronRight />
        </button>
      </div>
    )
  );
};

export default Pagination;
