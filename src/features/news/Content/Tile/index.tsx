import { useQuery } from "@tanstack/react-query";
import { News } from "../../../../common/types/news";
import { getNews } from "../../../../common/api/apiRequest";
import { Box, ContentBox, Image, TileBox, Title } from "./styled";
import { useState } from "react";
import Popup from "./Popup";
import { useSelector } from "react-redux";
import { selectCountry, selectView } from "../../newsSlice";
import { countries } from "../../../../common/data/countries";
import { useCountrySelection } from "../../../../common/data/useCountrySelection";

const Tile = () => {
	const [showPopup, setShowPopup] = useState<{ [key: string]: boolean }>({});
	const listView = useSelector(selectView);
	const country = useCountrySelection();
	const short = useSelector(selectCountry);
	const {data} = useQuery(["news", {country: country}], () => getNews(short));

	console.log(country)

	const formatDate = (dateString: string) => {
		return new Intl.DateTimeFormat("en-US", {
			day: "numeric",
			month: "long",
			year: "numeric",
		}).format(new Date(dateString));
	};

	const handleTileClick = (title: string) => {
		setShowPopup((prevState) => ({
			...prevState,
			[title]: !prevState[title],
		}));
	};

	const handleClosePopup = (title: string) => {
		setShowPopup((prevState) => ({
			...prevState,
			[title]: false,
		}));
	};

	return (
		<ContentBox>
			<Title>Top NEWS for {countries.find((c) => c.short === country)?.country}</Title>
			<Box listView={listView}>
			{data.articles.map((news: News) => (
				<TileBox
					key={news.title}
					onClick={() => handleTileClick(news.title)}
					listView={listView}
				>
					<h2>{news.title}</h2>
					{!listView && (
						<><Image
							src={news.urlToImage}
							alt={"image"}
							/>
						<p>{news.description}</p>
							</>
					)}
					<p>Source: {news.source.name}</p>
					<p>Date of publications: {formatDate(news.publishedAt)}</p>
					{showPopup[news.title] && (
						<Popup
							author={news.author}
							content={news.content}
							url={news.url}
							onClose={() => handleClosePopup(news.title)}
						/>
					)}
				</TileBox>
			))}
		</Box>
		</ContentBox>
	);
};

export default Tile;