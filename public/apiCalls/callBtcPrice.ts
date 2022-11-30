import { useState, useEffect } from "react";
import axios from "axios";

export function callBtcPrice(priceBtcProp: number) {
  const [priceBtc, setPriceBtc] = useState(0);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true"
      )
      .then(function (response) {
        // console.log(response);
        setPriceBtc(response.data.bitcoin.usd), [];
      })
      .catch(function (e) {
        console.log(e);
      });
  }, []);
}
