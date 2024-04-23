import { useContext, useEffect } from "react";
import { FindOffers } from "./api/FindOffers";
import data from "./data.json";
import { useState } from "react";
import OfferLayout from "./components/OfferLayout/OfferLayout";
import Header from "./components/Header/Header";
import { FilterContext, FilterContextType } from "./context/FilterContext";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [offers, setOffers] = useState(data);
  const { filters } = useContext(FilterContext) as FilterContextType;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/data.json");
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      setOffers(FindOffers(data, filters));
    }
  }, [data, filters]);

  return (
    <>
      <Header />
      <OfferLayout offers={offers} />
    </>
  );
}

export default App;
