import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";
import moment from "moment";

const Covid = () => {
  const today = new Date(new Date().setHours(0, 0, 0, 0)).toISOString(true);
  // const today = moment().startOf("day");
  const priorDate = moment().subtract(31, "days").toISOString(true);

  const { dataCovid } = useFetch(
    `https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`,
    true
  );

  return (
    <>
      <h3>Covid 19 Tracking In Viet Nam</h3>
      <table id="customers">
        <thead>
          <tr>
            <th>Country</th>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Country}</td>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default Covid;
