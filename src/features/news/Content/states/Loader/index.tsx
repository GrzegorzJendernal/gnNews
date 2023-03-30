import React from "react";
import { Spinner, SpinnerBox } from "./styled";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../newsSlice";

const Loader = () => {
	const english = useSelector(selectLanguage);

	return (
		<SpinnerBox>
			<div>
				{english ?
					"Please wait, news are being loaded..." :
					"Proszę czekać, trwa ładowanie artykułów..."
				}
			</div>
			<Spinner/>
		</SpinnerBox>
	);
};

export default Loader;
