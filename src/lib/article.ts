import type { Article } from '../types/article';

const WORDS_PER_MINUTE = 200;

const isListItem = (line: string) => /^([-*]|\d+\.)\s/.test(line);

export const getArticleTitle = (article: Pick<Article, 'header'>) =>
  article.header.replace(/^#+\s+/, '');

export const getReadingTime = (article: Pick<Article, 'text'>) => {
  const words = article.text.join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
};

// `text` is an array of markdown lines: paragraphs need blank lines between them, but code fences and list items must stay on consecutive lines.
export const getArticleMarkdown = (
  article: Pick<Article, 'header' | 'text'>
) => {
  const lines = article.text.filter(
    (line, i) => !(i === 0 && line === article.header)
  );
  let inFence = false;

  return lines.reduce((markdown, line, i) => {
    const prev = lines[i - 1];
    const separator =
      i === 0
        ? ''
        : inFence || (isListItem(prev) && isListItem(line))
          ? '\n'
          : '\n\n';

    if (line.startsWith('```')) inFence = !inFence;
    return markdown + separator + line;
  }, '');
};
