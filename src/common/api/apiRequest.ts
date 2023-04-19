import axios from "axios";
import { apiKey } from "./apiKey";

export const getNews = async (country: string) => {
	// const params = new URLSearchParams({
	// 		country: country,
	// 		apiKey: apiKey,
	// 		pageSize: "50",
	// 	}
	// );

	const response = await axios.get(
		// `https://newsapi.org/v2/top-headlines?${params}`
		// `https://gnews.io/api/v4/top-headlines?category=general&apikey=14010cbd996dccd43c90e07480634c41`
	);
	return await response.data;
};