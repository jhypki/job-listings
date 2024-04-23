import styles from "./Offer.module.css";
import React, { useContext } from "react";
import {
  FilterContext,
  FilterContextType,
} from "../../../context/FilterContext";

interface OfferProps {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const Offer = ({ offer }: { offer: OfferProps }): JSX.Element => {
  const { setFilters, filters } = useContext(
    FilterContext
  ) as FilterContextType;

  const addFilter = (e: React.MouseEvent<HTMLSpanElement>) => {
    const filter = e.currentTarget.innerHTML;
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.mobileImg} src={offer.logo} />
      <div className={styles.generalInfo}>
        <img className={styles.desktopImg} src={offer.logo} />

        <div className={styles.offerInfo}>
          <div className={styles.companyInfo}>
            <div className={styles.companyName}>{offer.company}</div>
            {offer.new && <div className={styles.new}>NEW!</div>}
            {offer.featured && <div className={styles.featured}>FEATURED</div>}
          </div>

          <p className={styles.offerTitle}>{offer.position}</p>

          <div className={styles.offerDetails}>
            <span>{offer.postedAt}</span>
            <span>{offer.contract}</span>
            <span>{offer.location}</span>
          </div>
        </div>
      </div>

      <div className={styles.categories}>
        <span onClick={addFilter} className={styles.category}>
          {offer.role}
        </span>
        <span onClick={addFilter} className={styles.category}>
          {offer.level}
        </span>
        {offer.languages.map((language, index) => (
          <span onClick={addFilter} className={styles.category} key={index}>
            {language}
          </span>
        ))}
        {offer.tools.map((tool, index) => (
          <span onClick={addFilter} className={styles.category} key={index}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Offer;
