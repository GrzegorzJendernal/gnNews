import { useQuery } from "@tanstack/react-query";
import { getNews } from "../api/apiRequest";
import Loader from "./states/Loader";
import { ErrorBox } from "./states/ErrorPage/styled";
import Tile from "../News";

const Content = () => {
	const {isLoading, isError} = useQuery(["news"], getNews);
	if (isLoading) return (<Loader/>);
	if (isError) return (<ErrorBox/>);

	return <Tile/>
};

export default Content;