import axios from "axios";

export const GetBtcRate = async () => {
  let response = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true"
  );
  return response.data;
};
