import articles from './db.json';
import { delayed } from './delay';

export function getAllArticles() {
  return delayed(articles, { timeout: 500, shouldFail: false });
}

export function getArticleByName(name: string) {
  const article = articles.find((article) => article.name === name);

  if (!article) {
    throw new Error(`Article with name "${name}" not found`);
  }

  return delayed(article, { timeout: 500, shouldFail: false });
}
