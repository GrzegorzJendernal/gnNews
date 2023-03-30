import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { News } from "../../../../common/types/news";
import { getNews } from "../../../../common/api/apiRequest";
import { Box, ContentBox, Image, Article, Header, Title, Paragraph } from "./styled";
import Popup from "../../../../common/Popup";
import { selectLanguage, selectPopup, selectView, showPopup } from "../../newsSlice";
import { useSelectedCountry } from "../../../../common/functions/useSelctedCountry";
import { formatDate } from "../../../../common/functions/formatDate";

const Articles = () => {
	const dispatch = useDispatch();
	const popup = useSelector(selectPopup);
	const listView = useSelector(selectView);
	const english = useSelector(selectLanguage);
	const {country, short, countryPl} = useSelectedCountry();
	const {data} = useQuery(["news", {country: short}], () => getNews(short));
	const locales = english ? "en-US" : "pl-PL";

	const openPopup = (title: string) => {
			if (popup[title]) return;
			return dispatch(showPopup(title));
	};

	return (
		<ContentBox>
			<Header>{english ? `Top NEWS for ${country}` : `${countryPl} - najważniejsze informacje`}</Header>
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
						{english ? "Source: " : "Źródło: "}
						 {news.source.name}
					</Paragraph>
					<Paragraph>
						{english ? "Published: " : "Opublikowano: "}
						 {formatDate(news.publishedAt, locales)}
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