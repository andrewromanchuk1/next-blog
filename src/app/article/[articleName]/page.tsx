import { cache } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Markdown from 'react-markdown';
import LikeButton from '../../../components/LikeButton/LikeButton';
import {
  getArticleMarkdown,
  getArticleTitle,
  getReadingTime,
} from '../../../lib/article';
import { getArticleByName } from '../../(server)/api';
import styles from './page.module.css';

type Props = { params: Promise<{ articleName: string }> };

const getArticle = cache(getArticleByName);

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { articleName } = await params;
  const article = await getArticle(articleName);

  return {
    title: getArticleTitle(article),
    description: article.preview.startsWith('![')
      ? undefined
      : article.preview.slice(0, 200),
  };
};

const ArticlePage = async ({ params }: Props) => {
  const { articleName } = await params;
  const article = await getArticle(articleName);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/" className={styles.back}>
          All articles
        </Link>

        <article className={styles.article}>
          <p className={styles.meta}>
            {article.name} · {getReadingTime(article)} min read
          </p>
          <h1 className={styles.title}>{getArticleTitle(article)}</h1>

          <div className={styles.content}>
            <Markdown
              components={{
                img: () => null,
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
              }}
            >
              {getArticleMarkdown(article)}
            </Markdown>
          </div>

          <div className={styles.footer}>
            <LikeButton articleName={article.name} />
          </div>
        </article>
      </main>
    </div>
  );
};

export default ArticlePage;
