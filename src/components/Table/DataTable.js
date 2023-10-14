import React from "react";

const DataTable = ({ data, header }) => {
  return (
    <div className={`App`}>
      <table className={`table-auto`}>
        <thead className="border">
          <tr>
            {header.map((column, index) => {
              return (
                <th className="kolom" key={index}>
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.rates &&
            Object.keys(data.rates).map((currency, index) => {
              return (
                <tr key={index}>
                  <td>{currency}</td>
                  <td>{parseFloat(`${data.rates[currency] * 1.05}`)}</td>
                  <td>{parseFloat(data.rates[currency])}</td>
                  <td>{parseFloat(`${data.rates[currency] * 0.95}`)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <p>
        Rates are based from 1 USD <br></br>
        This application usess API from https://currencyfreaks.com/
      </p>
    </div>
  );
};

export default DataTable;
