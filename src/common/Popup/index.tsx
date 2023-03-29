import React from "react";
import { Button, ButtonBox, PopupContent, PopupWrapper } from "./styled";
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
				<ButtonBox>
					<h3>{title}</h3>
					<Button
						onClick={() => dispatch(closePopup())}
					>
						x
					</Button>
				</ButtonBox>
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
