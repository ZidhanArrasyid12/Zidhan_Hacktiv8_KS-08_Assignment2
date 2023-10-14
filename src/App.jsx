import "./App.css";
import DataTable from "./components/Table/DataTable";
import axios from "axios";
import React, { useEffect, useState } from "react";

const baseAPI =
  "https://api.currencyfreaks.com/latest?apikey=0a83ee1580484cc08de7e2f1190d0653&symbols=CAD,EUR,IDR,JPY,CHF,GBP";

function App() {
  const header = ["Currency", "We Buy", "Exchange Rate", "We Sell"];

  const [data, setData] = useState([]);

  const getCurrencyData = async () => {
    try {
      const response = await axios.get(baseAPI);
      setData(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrencyData();
  }, []);

  return <DataTable data={data} header={header} />;
}

export default App;
