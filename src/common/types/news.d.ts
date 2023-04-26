export type News = {
  source: {
    url: null | string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: Date;
  content: string;
};
