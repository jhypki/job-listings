import React from "react";

export type FilterContextType = {
  filters: {
    role: string;
    level: string;
    languages: string[];
    tools: string[];
  };
  setFilters: (filters: any) => void;
};

const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = React.useState({
    role: "",
    level: "",
    languages: [],
    tools: [],
  });

  return (
    <FilterContext.Provider
      value={{ filters, setFilters } as FilterContextType}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const FilterContext = React.createContext<FilterContextType>({
  filters: {
    role: "",
    level: "",
    languages: [],
    tools: [],
  },
  setFilters: (filters: any) => void 0,
});
export default FilterContextProvider;
