import { useQuery } from "@tanstack/react-query";
import { News } from "../../../../common/types/news";
import { getNews } from "../../../../common/api/apiRequest";
import { Box, ContentBox, Image, Article, Title } from "./styled";
import Popup from "../../../../common/Popup";
import { useDispatch, useSelector } from "react-redux";
import { selectPopup, selectView, showPopup } from "../../newsSlice";
import { useSelectedCountry } from "../../../../common/data/useSelctedCountry";
import React from "react";

const Articles = () => {
	const dispatch = useDispatch();
	const popup = useSelector(selectPopup);
	const listView = useSelector(selectView);
	const {country, short} = useSelectedCountry();
	const {data} = useQuery(["news", {country: short}], () => getNews(short));

	const formatDate = (dateString: string) => {
		return new Intl.DateTimeFormat("en-US", {
			day: "numeric",
			month: "long",
			year: "numeric",
		}).format(new Date(dateString));
	};

	const openPopup = (title: string) => {
			if (popup[title]) return;
			return dispatch(showPopup(title));
	};

	return (
		<ContentBox>
			<Title>Top NEWS for {country}</Title>
			<Box listView={listView}>
			{data.articles.map((news: News) => (
				<Article
					key={news.title}
					onClick={() => openPopup(news.title)}
					listView={listView}
				>
					<h2>{news.title}</h2>
					{!listView && (
						<>{news.urlToImage && (<Image
							src={news.urlToImage}
							alt={"image"}
							/>)}
						<p>{news.description}</p>
							</>
					)}
					<p>Source: {news.source.name}</p>
					<p>Date of publications: {formatDate(news.publishedAt)}</p>
					{popup[news.title] && (
						<Popup
							title={news.title}
							author={news.author}
							content={news.content}
							url={news.url}
						/>
					)}
				</Article>
			))}
		</Box>
		</ContentBox>
	);
};

export default Articles;