import React from "react";
import styled from "styled-components";
import ArticlePopup from "../ArticlePopup";

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

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
