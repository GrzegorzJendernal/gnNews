import { useParams } from "react-router-dom";
import { countries } from "./countries";

export const useSelectedCountry = () => {
	const {country} = useParams();

	const selectedCountry = countries
		.find(
			(countryURL) => countryURL.url === country
		);
	if (!selectedCountry) return {"country": "United States", "short": "us", "url": "united-states"};
	return selectedCountry;
};