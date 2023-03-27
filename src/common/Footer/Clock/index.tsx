import React from "react";
import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
	const {myDate} = useCurrentDate();

	const dateToRender = myDate.toLocaleDateString("en-US", {
		month: "long",
		weekday: "long",
		day: "numeric",
		year: "numeric",
	});

	const timeToRender = myDate.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	});

	return (
		<StyledClock>
			Today is {dateToRender}, {timeToRender}
		</StyledClock>
	)
};

export default Clock; 