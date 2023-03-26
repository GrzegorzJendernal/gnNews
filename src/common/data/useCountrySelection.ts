import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCountry, setCountry } from "../../features/news/newsSlice";
import { countries } from "./countries";

export const useCountrySelection = () => {
	const dispatch = useDispatch();
	const country = useSelector(selectCountry);

	useEffect(() => {
		// znajdź obiekt kraju na podstawie nazwy
		const selectedCountry = countries
			.find(
			(c) => c.url === country?.toLowerCase()
		);

		// pobierz kod kraju i zaktualizuj stan w Reduxie
		if (selectedCountry) {
			dispatch(setCountry(selectedCountry.short));
		}
	}, [dispatch, country, countries]);

	return country;
};
