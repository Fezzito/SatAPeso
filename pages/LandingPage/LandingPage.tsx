import React, { useState, useEffect } from "react";
import { GetBtcRate } from "../../public/src/api/getBtcRate";
import { GetBlueRate } from "../../public/src/api/getBlueRate";
import { Hero, Wrapper } from "./style";
import Navbar from "../../public/src/components";

const LandingPage: React.FC = () => {
  const [btcValue, setBtcValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  useEffect(() => {
    GetBtcRate().then((response) => setBtcValue(response.bitcoin.usd));
  }, []);

  useEffect(() => {
    GetBlueRate().then((response) => setBlueValue(response[1].value_sell));
  }, []);

  let satapeso = (btcValue / 100000000) * blueValue;

  return (
    <Wrapper>
      <Hero>
        <h1>
          1 peso argentino son <br />
          {satapeso.toString().slice(0, 4)} satoshis
        </h1>
        <h2>
          1 satoshi es la unidad mínima en <br />
          la que se divide un bitcion
        </h2>
      </Hero>

      <Navbar />
    </Wrapper>
  );
};

export default LandingPage;
