import { useContext, useEffect } from "react";
import { FindOffers } from "./api/FindOffers";
import data from "./data.json";
import { useState } from "react";
import OfferLayout from "./components/OfferLayout/OfferLayout";
import Header from "./components/Header/Header";
import { FilterContext, FilterContextType } from "./context/FilterContext";

function App() {
  const [offers, setOffers] = useState(data);
  const { filters } = useContext(FilterContext) as FilterContextType;
  useEffect(() => {
    setOffers(FindOffers(data, filters));
    console.log(FindOffers(data, filters));
  }, [filters]);

  return (
    <>
      <Header />
      <OfferLayout offers={offers} />
    </>
  );
}

export default App;
