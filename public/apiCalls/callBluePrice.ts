import { useState, useEffect } from "react";
import axios from "axios";

export function callBluePrice() {
  const [priceBlue, setPriceBlue] = useState(0);
  useEffect(() => {
    axios
      .get("https://api.bluelytics.com.ar/v2/evolution.json")
      .then(function (response) {
        console.log(response);
        setPriceBlue(response.data[1].value_sell);
        console.log(priceBlue);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
}
