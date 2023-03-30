import Clock from "./Clock";
import { Text, Wrapper } from "./styled";
import { useQuery } from "@tanstack/react-query";
import { useSelectedCountry } from "../../../common/functions/useSelctedCountry";
import { getNews } from "../../../common/api/apiRequest";
import { useSelector } from "react-redux";
import { selectLanguage } from "../newsSlice";

const Footer = () => {
	const {short} = useSelectedCountry();
	const {data} = useQuery(["news", {country: short}], () => getNews(short));
	const english = useSelector(selectLanguage);
	return (
		<Wrapper>
				{data && <Text>{english ? "Articles on site" : "Liczba artykułów"}: {data.totalResults}</Text>}
			<Clock/>
		</Wrapper>
	);
};

export default Footer;