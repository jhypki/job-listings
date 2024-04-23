import React, { useContext } from "react";
import { FilterContext, FilterContextType } from "../../context/FilterContext";
import styles from "./FilterBar.module.css";

const FilterBar = () => {
  const { filters, setFilters } = useContext(
    FilterContext
  ) as FilterContextType;
  const handleClear = () => {
    setFilters([]);
  };
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const filter = e.currentTarget.previousSibling?.textContent;
    if (filter) {
      setFilters(filters.filter((f) => f !== filter));
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {filters.map((filter, i) => (
          <span className={styles.category} key={i}>
            {filter}
            <button onClick={handleDelete} className={styles.deleteBtn}>
              X
            </button>
          </span>
        ))}
      </div>
      <button onClick={handleClear} className={styles.clear}>
        Clear
      </button>
    </div>
  );
};

export default FilterBar;
