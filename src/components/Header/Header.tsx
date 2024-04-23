import Image from "../../images/bg-header-desktop.svg";
import styles from "./Header.module.css";
import FilterBar from "../FilterBar/FilterBar";
import { FilterContext, FilterContextType } from "../../context/FilterContext";
import React, { useContext, useEffect } from "react";

const Header = () => {
  const { filters } = useContext(FilterContext) as FilterContextType;
  const [showFilter, setShowFilter] = React.useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>;
      {filters.length > 0 && <FilterBar />}
    </div>
  );
};

export default Header;
