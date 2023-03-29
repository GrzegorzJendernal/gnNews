import axios from "axios";
import { apiKey } from "./apiKey";

export const getNews = async (country: string) => {
	const params = new URLSearchParams({
		country: country,
		apiKey: apiKey,
		pageSize: "50",
		}
	);

	const response = await axios.get(
		`https://newsapi.org/v2/top-headlines?${params}`
	);
	return await response.data;
};