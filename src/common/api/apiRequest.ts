import axios from "axios";

export const getNews = async () => {
	const response = await axios.get(
		"https://newsapi.org/v2/top-headlines?country=us&apiKey=717b16ebba75457990be9eaecf0cd28b"
	);
	return await response.data;
};