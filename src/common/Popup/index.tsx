import React from "react";
import { PopupContent, PopupWrapper } from "./styled";
import { LinkButton }  from "../Button";

interface PopupProps {
	title: string
	author: string;
	content: string;
	url?: string;
}

const Popup = ({ title, author, content, url }: PopupProps) => {
	return (
		<PopupWrapper>
			<PopupContent>
				<div>
					<h3>{title}</h3>
					<p>{content}</p>
					<p>By: {author}</p>
					{!!url && (<LinkButton
						as={"a"}
						href={url}
					>
						Go to the article
					</LinkButton>)}
				</div>
			</PopupContent>
		</PopupWrapper>
	);
};

export default Popup;
