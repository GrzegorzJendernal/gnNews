import React from "react";
import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";
import { formatDate, formatTime } from "../../functions/formatDate";

const Clock = () => {
	const {myDate} = useCurrentDate();

	return (
		<StyledClock>
			Today is {formatDate(myDate)}, {formatTime(myDate)}
		</StyledClock>
	)
};

export default Clock; 