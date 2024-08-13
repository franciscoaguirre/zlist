import { XMLParser } from 'fast-xml-parser';

interface RssFeed {
	title: string,
	description: string,
	link: string,
	image: {
		url: string,
		title: string,
		link: string,
	},
	generator: string,
	lastBuildDate: string,
	item: Article[],
}

interface Article {
	title: string,
	link: string,
	pubDate: string,
	category: string[],
	'content:encoded': string,
}

export const getArticles = async () => {
  const response = await fetch('https://medium.com/feed/@thezlistbiz');
  const data = await response.text();
  const feed = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' }).parse(data).rss.channel as RssFeed;
  return feed.item;
}
