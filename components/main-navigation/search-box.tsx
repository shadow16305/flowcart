import { ChangeEvent } from "react";

interface SearchBoxProps {
  setSearchValue: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ setSearchValue }) => {
  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      type="text"
      onChange={inputChangeHandler}
      className="rounded-lg border-none bg-slate-200 px-2 py-1 focus:border-none focus:outline-none focus:ring-0"
      placeholder="Search for products..."
    />
  );
};

export default SearchBox;
