import axios from "axios";

export const getNews = async (country: string) => {
	const params = new URLSearchParams({
		country: country,
		}
	);

	const response = await axios.get(
		`https://newsapi.org/v2/top-headlines?${params}&apiKey=717b16ebba75457990be9eaecf0cd28b`
	);
	return await response.data;
};