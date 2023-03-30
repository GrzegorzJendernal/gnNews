import { useQuery } from "@tanstack/react-query";
import { getNews } from "../../../common/api/apiRequest";
import Loader from "./states/Loader";
import Articles from "./Articles";
import { useSelectedCountry } from "../../../common/functions/useSelctedCountry";
import ErrorPage from "./states/ErrorPage";

const Content = () => {
	const {short} = useSelectedCountry();

	const {isLoading, isError} = useQuery(["news", {country: short}], () => getNews(short));
	if (isLoading) return (<Loader/>);
	if (isError) return (<ErrorPage/>);

	return <Articles/>
};

export default Content;