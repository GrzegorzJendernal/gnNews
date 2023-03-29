import React from "react";
import { ErrorBox, Sign, Text, Title } from "./styled";

const ErrorPage = () => (
  <ErrorBox>
    <Sign />
    <Title>Ooops! Something went wrong... </Title>
    <Text>
      Sorry, failed to load articles. {"\n"}
	    Please try again later.
    </Text>
  </ErrorBox>
);

export default ErrorPage;
