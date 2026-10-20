/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import Link from 'next/link';
import styles from './ArticleCard.module.css';
import { useEffect, useState } from 'react';

const ArticleCard = ({
  article,
}: {
  article: { name: string; header: string; preview: string };
}) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likedArticles = JSON.parse(
      localStorage.getItem('likedArticles') || '[]'
    );
    setLiked(likedArticles.includes(article.name));
  }, [article.name]);

  const handleLike = () => {
    const likedArticles = JSON.parse(
      localStorage.getItem('likedArticles') || '[]'
    );
    if (liked) {
      const updatedLikedArticles = likedArticles.filter(
        (name: string) => name !== article.name
      );
      localStorage.setItem(
        'likedArticles',
        JSON.stringify(updatedLikedArticles)
      );
    } else {
      likedArticles.push(article.name);
      localStorage.setItem('likedArticles', JSON.stringify(likedArticles));
    }
    setLiked(!liked);
  };

  return (
    <li key={article.name}>
      <article className={styles.card}>
        <h2 className={styles.cardTitle}>{article.header}</h2>
        <p className={styles.cardText}>{article.preview}</p>
        <span className={styles.cardMeta}>{article.name}</span>
        <button onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
        <Link href={`/article/${article.name}`} className={styles.cardLink}>
          Read more
        </Link>
      </article>
    </li>
  );
};

export default ArticleCard;
