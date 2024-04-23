import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import FilterContextProvider from "./context/FilterContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FilterContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FilterContextProvider>
);
