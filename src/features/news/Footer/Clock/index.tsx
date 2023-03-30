import React from "react";
import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";
import { formatDate, formatTime } from "../../../../common/functions/formatDate";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../newsSlice";

const Clock = () => {
	const {myDate} = useCurrentDate();
	const english = useSelector(selectLanguage);
	const locales = english ? "en-US" : "pl-PL";

	return (
		<StyledClock>
			{english ? "Today is" : "Dziś jest"} {formatDate(myDate, locales)}, {formatTime(myDate, locales)}
		</StyledClock>
	)
};

export default Clock; 