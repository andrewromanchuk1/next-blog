'use client';

import Link from 'next/link';
import styles from '../../error.module.css';

const ArticleErrorPage = ({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) => {
  return (
    <div className={styles.page}>
      <section className={styles.card} role="alert">
        <div className={styles.icon} aria-hidden="true">
          !
        </div>
        <p className={styles.eyebrow}>Article</p>
        <h1 className={styles.title}>Could not load the article</h1>
        <p className={styles.text}>
          An error occurred while loading this article. It may not exist, or
          something went wrong on our side.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primary}
            onClick={() => unstable_retry()}
          >
            Try again
          </button>
          <Link href="/" className={styles.secondary}>
            All articles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArticleErrorPage;
