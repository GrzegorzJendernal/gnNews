import React from "react";
import { ErrorBox, Sign, Text, Title } from "./styled";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../newsSlice";

const ErrorPage = () => {
	const english = useSelector(selectLanguage);

	return (
		<ErrorBox>
			<Sign/>
			<Title>Ooops! {english ? "Something went wrong..." : "Coś poszło nie tak..."} </Title>
			<Text>
				{english ?
					"Sorry, failed to load articles. Please try again later." :
					"Przepraszamy, coś poszło nie tak. Spróbuj ponownie później."}
			</Text>
		</ErrorBox>
	);
};

export default ErrorPage;
