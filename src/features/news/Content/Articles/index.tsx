import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { News } from "../../../../common/types/news";
import { getNews } from "../../../../common/api/apiRequest";
import { Box, ContentBox, Image, Article, Header, Title, Paragraph } from "./styled";
import Popup from "../../../../common/Popup";
import { selectPopup, selectView, showPopup } from "../../newsSlice";
import { useSelectedCountry } from "../../../../common/functions/useSelctedCountry";
import { formatDate } from "../../../../common/functions/formatDate";

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
			<Header>Top NEWS for {country}</Header>
			<Box listView={listView}>
			{data.articles.map((news: News) => (
				<Article
					key={news.title}
					onClick={() => openPopup(news.title)}
					listView={listView}
				>
					<Title>
						{news.title}
					</Title>
					{!listView && (
						<>
							{news.urlToImage && (
								<Image
							src={news.urlToImage}
							alt={"image"}
							/>)}
						<Paragraph>
							{news.description}
						</Paragraph>
							</>
					)}
					<Paragraph>
						Source: {news.source.name}
					</Paragraph>
					<Paragraph>
						Published: {formatDate(news.publishedAt)}
					</Paragraph>
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