import React from "react";
import { Wrapper, Button } from "./style";
import converter from "../assets/converter.svg";

const Navbar = () => {
  return (
    <Wrapper>
      <Button background={converter}></Button>
      <Button>b</Button>
      <Button>c</Button>
    </Wrapper>
  );
};

export default Navbar;
