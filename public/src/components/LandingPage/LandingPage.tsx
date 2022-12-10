import React, { useState, useEffect } from "react";
import { GetBtcRate } from "../../api/getBtcRate";
import { GetBlueRate } from "../../api/getBlueRate";
import { Wrapper } from "./style";

const LandingPage: React.FC = () => {
  const [btcValue, setBtcValue] = useState();
  const [blueValue, setBlueValue] = useState();

  useEffect(() => {
    GetBtcRate().then((response) => setBtcValue(response.bitcoin.usd));
  }, []);

  useEffect(() => {
    GetBlueRate().then((response) => setBlueValue(response[1].value_sell));
  }, []);

  return (
    <Wrapper>
      <h1>{btcValue}</h1>
      <h1>{blueValue}</h1>
    </Wrapper>
  );
};

export default LandingPage;
