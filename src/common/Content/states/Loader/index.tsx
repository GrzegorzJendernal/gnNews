import React from "react";
import { Spinner, SpinnerBox } from "./styled";

const Loader = () => (
  <SpinnerBox>
    <span>Please wait, news are being loaded...</span>
    <Spinner />
  </SpinnerBox>
);

export default Loader;
