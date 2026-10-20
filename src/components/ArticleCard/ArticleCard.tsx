import Link from 'next/link';
import type { Article } from '../../types/article';
import { getArticleTitle } from '../../lib/article';
import LikeButton from '../LikeButton/LikeButton';
import styles from './ArticleCard.module.css';

const ArticleCard = ({
  article,
}: {
  article: Pick<Article, 'name' | 'header' | 'preview'>;
}) => {
  return (
    <article className={styles.card}>
      <h2 className={styles.cardTitle}>{getArticleTitle(article)}</h2>
      <p className={styles.cardText}>{article.preview}</p>
      <span className={styles.cardMeta}>{article.name}</span>
      <div className={styles.actions}>
        <LikeButton articleName={article.name} />
        <Link href={`/article/${article.name}`} className={styles.cardLink}>
          Read more
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
