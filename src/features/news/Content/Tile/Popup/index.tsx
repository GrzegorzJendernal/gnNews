import React from "react";
import ArticlePopup from "../ArticlePopup";
import { PopupContent, PopupWrapper } from "./styled";

interface PopupProps {
	author: string;
	content: string;
	url: string;
	onClose: () => void;
}

const Popup = ({ author, content, url, onClose }: PopupProps) => {
	return (
		<PopupWrapper>
			<PopupContent>
				<ArticlePopup author={author} content={content} url={url} />
				<button onClick={onClose}>Close</button>
			</PopupContent>
		</PopupWrapper>
	);
};

export default Popup;
