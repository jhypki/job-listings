import styles from "./Offer.module.css";
import image from "../../../images/myhome.svg";
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

  const addLangCategory = (e: React.MouseEvent<HTMLSpanElement>) => {
    const lang = e.currentTarget.innerText;
    if (!filters.languages.includes(lang)) {
      setFilters({ ...filters, languages: [...filters.languages, lang] });
    }
  };
  const addToolCategory = (e: React.MouseEvent<HTMLSpanElement>) => {
    const tool = e.currentTarget.innerText;
    if (!filters.tools.includes(tool)) {
      setFilters({ ...filters, tools: [...filters.tools, tool] });
    }
  };
  const addRoleCategory = () => {
    if (!filters.role) {
      setFilters({ ...filters, role: offer.role });
    }
  };
  const addLevelCategory = () => {
    if (!filters.level) {
      setFilters({ ...filters, level: offer.level });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.generalInfo}>
        <img src={image} />

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
        {offer.languages.map((language, index) => (
          <span
            onClick={addLangCategory}
            className={styles.category}
            key={index}
          >
            {language}
          </span>
        ))}
        {offer.tools.map((tool, index) => (
          <span
            onClick={addToolCategory}
            className={styles.category}
            key={index}
          >
            {tool}
          </span>
        ))}
        <span onClick={addRoleCategory} className={styles.category}>
          {offer.role}
        </span>
        <span onClick={addLevelCategory} className={styles.category}>
          {offer.level}
        </span>
      </div>
    </div>
  );
};

export default Offer;
