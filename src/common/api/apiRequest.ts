import axios from "axios";
import { apiKey } from "./apiKey";

export const getNews = async () => {
	const params = new URLSearchParams({
	// 		country: country,
			apikey: apiKey,
		}
	);

	const response = await axios.get(
		`https://gnews.io/api/v4/top-headlines?category=general&${params}`
	);
	return await response.data;
};