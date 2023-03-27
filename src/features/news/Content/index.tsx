import { useQuery } from "@tanstack/react-query";
import { getNews } from "../../../common/api/apiRequest";
import Loader from "./states/Loader";
import { ErrorBox } from "./states/ErrorPage/styled";
import Tile from "./Tile";
import { useSelectedCountry } from "../../../common/data/useSelctedCountry";

const Content = () => {
	const {short} = useSelectedCountry();

	const {isLoading, isError} = useQuery(["news", {country: short}], () => getNews(short));
	if (isLoading) return (<Loader/>);
	if (isError) return (<ErrorBox/>);

	return <Tile/>
};

export default Content;