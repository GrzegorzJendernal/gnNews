export const formatDate = (dateString: Date, locales: string) => {
  return new Intl.DateTimeFormat(locales, {
    day: "numeric",
    weekday: "long",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
};

export const formatTime = (dateString: Date, locales: string) => {
  return new Intl.DateTimeFormat(locales, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date(dateString));
};
