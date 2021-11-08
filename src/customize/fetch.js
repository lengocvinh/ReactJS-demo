import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url, isCovidData) => {
  const [dataCovid, setDataCovid] = useState([]);
  const ourRequest = axios.CancelToken.source();
  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(url, {
        cancelToken: ourRequest.token,
      });
      let data = res && res.data ? res.data : [];
      if (data && data.length > 0 && isCovidData === true) {
        data.map((item) => {
          item.Date = moment(item.Date).format("DD/MM/YYYY");
          return item;
        });
        data.reverse();
      }
      setDataCovid(data);
    }
    fetchData();
    return () => {
      ourRequest.cancel("err");
    };
  }, []);
  return {
    dataCovid,
  };
};
export default useFetch;
