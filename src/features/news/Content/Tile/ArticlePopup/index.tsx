interface ArticlePopupProps {
	author: string;
	content: string;
	url: string;
}

const ArticlePopup = ({author, content, url}: ArticlePopupProps) => {
	return (
		<div>
			<p>{content}</p>
			<p>{author}</p>
			<p>{url}</p>
		</div>
	);
};

export default ArticlePopup;