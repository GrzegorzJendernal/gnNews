import { useQuery } from "@tanstack/react-query";
import { getNews } from "../../../common/api/apiRequest";
import Loader from "./states/Loader";
import { ErrorBox } from "./states/ErrorPage/styled";
import Tile from "./Tile";
import {  useSelector } from "react-redux";
import { selectCountry } from "../newsSlice";
import { useCountrySelection } from "../../../common/data/useCountrySelection";

const Content = () => {
	const short = useSelector(selectCountry);
	const country = useCountrySelection();

	const {isLoading, isError} = useQuery(["news", {country: country}], () => getNews(short));
	if (isLoading) return (<Loader/>);
	if (isError) return (<ErrorBox/>);

	return <Tile/>
};

export default Content;