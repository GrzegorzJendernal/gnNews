import React from "react";
import { Button, Header, PopupContent, PopupWrapper } from "./styled";
import { LinkButton } from "../Button";
import { useDispatch,  } from "react-redux";
import { closePopup } from "../../features/news/newsSlice";

interface PopupProps {
	title: string
	author: string;
	content: string;
	url?: string;
}

const Popup = ({ title, author, content, url }: PopupProps) => {
	const dispatch = useDispatch();
	return (
		<PopupWrapper>
			<PopupContent>
				<Header>
					<h3>{title}</h3>
					<Button
						onClick={() => dispatch(closePopup())}
					>
						x
					</Button>
				</Header>
					<p>{content}</p>
					<p>By: {author}</p>
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
