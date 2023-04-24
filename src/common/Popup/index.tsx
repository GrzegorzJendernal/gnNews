import React from "react";
import { Button, Header, Paragraph, PopupContent, PopupWrapper, Title } from "./styled";
import { LinkButton } from "../Button";
import { useDispatch } from "react-redux";
import { closePopup } from "../../features/news/newsSlice";

interface PopupProps {
	title: string
	author: string;
	content: string;
	url?: string;
}

const Popup = ({title, author, content, url}: PopupProps) => {
	const dispatch = useDispatch();

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
					By:
					{author}
				</Paragraph>
				{!!url && (<LinkButton
					as={"a"}
					href={url}
				>
					Go to the article
				</LinkButton>)}
			</PopupContent>
		</PopupWrapper>
	);
};

export default Popup;
