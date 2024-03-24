"use client";

import { ReactNode, createContext, useState } from "react";

interface SearchContextObject {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const SearchContext = createContext<SearchContextObject>({
  searchValue: "",
  setSearchValue: () => {},
});

const SearchContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const contextValue = {
    searchValue,
    setSearchValue,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
