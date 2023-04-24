import React from "react";
import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";
import { formatDate, formatTime } from "../../../../common/functions/formatDate";

const Clock = () => {
	const {myDate} = useCurrentDate();
	const locales = "en-US"

	return (
		<StyledClock>
			Today is {formatDate(myDate, locales)}, {formatTime(myDate, locales)}
		</StyledClock>
	)
};

export default Clock; 