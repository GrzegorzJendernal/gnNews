import Clock from "./Clock";
import { Text, Wrapper } from "./styled";
import { useQuery } from "@tanstack/react-query";
import { useSelectedCountry } from "../../../common/functions/useSelctedCountry";
import { getNews } from "../../../common/api/apiRequest";

const Footer = () => {
	const {short} = useSelectedCountry();
	const {data} = useQuery(["news", {country: short}], () => getNews(short));
	return (
		<Wrapper>
			{data &&
				<Text>
					Articles on site: {data.totalResults}
				</Text>}
			<Clock/>
		</Wrapper>
	);
};

export default Footer;