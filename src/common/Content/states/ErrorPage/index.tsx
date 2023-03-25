import React from "react";
import { ErrorBox, Link, Sign, Title } from "./styled";

const ErrorPage = () => (
  <ErrorBox>
    <Sign />
    <Title>Ooops! Something went wrong... </Title>
    <span>
      Sorry, failed to load Github projects. {"\n"}
      You can check them directly on Github.
    </span>
  </ErrorBox>
);

export default ErrorPage;
