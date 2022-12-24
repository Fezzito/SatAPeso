import axios from "axios";

export const GetBlueRate = async () => {
  let response = await axios.get(
    "https://api.bluelytics.com.ar/v2/evolution.json"
  );
  return response.data;
};
