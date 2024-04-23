import React from "react";

export type FilterContextType = {
  filters: string[];
  setFilters: (filters: any) => void;
};

const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = React.useState([]);

  return (
    <FilterContext.Provider
      value={{ filters, setFilters } as FilterContextType}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const FilterContext = React.createContext<FilterContextType>({
  filters: [],
  setFilters: () => void 0,
});
export default FilterContextProvider;
