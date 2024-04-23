import React, { useContext } from "react";
import { FilterContext, FilterContextType } from "../../context/FilterContext";
import styles from "./FilterBar.module.css";

const FilterBar = () => {
  const { filters, setFilters } = useContext(
    FilterContext
  ) as FilterContextType;
  const handleClear = () => {
    setFilters({
      role: "",
      level: "",
      languages: [],
      tools: [],
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {filters.role.length > 0 && (
          <span className={styles.category}>
            {filters.role}
            <button className={styles.deleteBtn}>X</button>
          </span>
        )}

        {filters.level.length > 0 && (
          <span className={styles.category}>
            {filters.level}
            <button className={styles.deleteBtn}>X</button>
          </span>
        )}

        {filters.languages.map((lang, i) => (
          <span className={styles.category} key={i}>
            {lang}
            <button className={styles.deleteBtn}>X</button>
          </span>
        ))}

        {filters.tools.map((tool, i) => (
          <span className={styles.category} key={i}>
            {tool}
            <button className={styles.deleteBtn}>X</button>
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
