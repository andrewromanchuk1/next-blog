'use client';

import { useState } from 'react';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import type { Article } from '../../types/article';
import pageStyles from '../page.module.css';
import buttonStyles from '../error.module.css';

type ArticlePreview = Pick<Article, 'name' | 'header' | 'preview'>;

const LoadMoreArticles = () => {
  const [items, setItems] = useState<ArticlePreview[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const loadMore = async () => {
    setLoading(true);
    setFailed(false);

    try {
      const res = await fetch(`/api/articles?page=${page}`);
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      const data: { items: ArticlePreview[]; hasMore: boolean } =
        await res.json();
      setItems((prev) => [...prev, ...data.items]);
      setHasMore(data.hasMore);
      setPage((prev) => prev + 1);
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ul className={pageStyles.grid}>
        {items.map((article) => (
          <li key={article.name}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>

      <div className={pageStyles.pagination}>
        {failed && <span>Could not load articles.</span>}
        {hasMore && (
          <button
            type="button"
            className={buttonStyles.primary}
            onClick={loadMore}
            disabled={loading}
          >
            {loading
              ? 'Loading...'
              : items.length
                ? 'Load more'
                : 'Load articles'}
          </button>
        )}
      </div>
    </>
  );
};

export default LoadMoreArticles;
