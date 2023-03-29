import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { News } from "../../../../common/types/news";
import { getNews } from "../../../../common/api/apiRequest";
import { Box, ContentBox, Image, Article, Title } from "./styled";
import Popup from "../../../../common/Popup";
import { selectPopup, selectView, showPopup } from "../../newsSlice";
import { useSelectedCountry } from "../../../../common/funtions/useSelctedCountry";
import { formatDate } from "../../../../common/funtions/formatDate";

const Articles = () => {
	const dispatch = useDispatch();
	const popup = useSelector(selectPopup);
	const listView = useSelector(selectView);
	const {country, short} = useSelectedCountry();
	const {data} = useQuery(["news", {country: short}], () => getNews(short));

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
						<>
							{news.urlToImage && (
								<Image
							src={news.urlToImage}
							alt={"image"}
							/>)}
						<p>{news.description}</p>
							</>
					)}
					<p>Source: {news.source.name}</p>
					<p>Published: {formatDate(news.publishedAt)}</p>
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