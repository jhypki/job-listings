import Image from "../../images/bg-header-desktop.svg";
import styles from "./Header.module.css";
import FilterBar from "../FilterBar/FilterBar";
import { FilterContext, FilterContextType } from "../../context/FilterContext";
import React, { useContext, useEffect } from "react";

const Header = () => {
  const { filters } = useContext(FilterContext) as FilterContextType;
  const [showFilter, setShowFilter] = React.useState(false);
  useEffect(() => {
    if (
      filters.role.length > 0 ||
      filters.level.length > 0 ||
      filters.languages.length > 0 ||
      filters.tools.length > 0
    ) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  }, [filters]);
  return (
    <div className={styles.container}>
      {showFilter && <FilterBar />}
      <div className={styles.header}></div>;
    </div>
  );
};

export default Header;
