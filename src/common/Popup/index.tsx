import React from "react";
import { Button, Header, Paragraph, PopupContent, PopupWrapper, Title } from "./styled";
import { LinkButton } from "../Button";
import { useDispatch, useSelector, } from "react-redux";
import { closePopup, selectLanguage } from "../../features/news/newsSlice";

interface PopupProps {
	title: string
	author: string;
	content: string;
	url?: string;
}

const Popup = ({title, author, content, url}: PopupProps) => {
	const dispatch = useDispatch();
	const english = useSelector(selectLanguage);
	return (
		<PopupWrapper>
			<PopupContent>
				<Header>
					<Title>
						{title}
					</Title>
					<Button
						onClick={() => dispatch(closePopup())}
					>
						x
					</Button>
				</Header>
				<Paragraph>
					{content}
				</Paragraph>
				<Paragraph>
					{english ? "By: " : "Przez: "}
					{author}
				</Paragraph>
				{!!url && (<LinkButton
					as={"a"}
					href={url}
				>
					{english ? "Go to the article" : "Przjdź do artykułu"}
				</LinkButton>)}
			</PopupContent>
		</PopupWrapper>
	);
};

export default Popup;
