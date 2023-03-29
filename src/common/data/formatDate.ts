export const formatDate = (dateString: Date) => {
	return new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		weekday: "long",
		month: "long",
		year: "numeric",
	}).format(new Date(dateString));
};

export const formatTime = (dateString: Date) => {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	}).format(new Date(dateString));
};