import { useParams } from "react-router-dom";
import { countries } from "./countries";

export const useSelectedCountry = () => {
	const {country} = useParams();

	const selectedCountry = countries
		.find(
			(countryURL) => countryURL.url === country
		);
	if (!selectedCountry) return {country: "Poland", short: "pl", url: "poland", countryPl: "Polska"};
	return selectedCountry;
};