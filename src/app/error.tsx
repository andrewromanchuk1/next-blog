'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './error.module.css';

const ErrorPage = ({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.page}>
      <section className={styles.card} role="alert">
        <div className={styles.icon} aria-hidden="true">
          !
        </div>
        <p className={styles.eyebrow}>Error</p>
        <h1 className={styles.title}>Something went wrong</h1>
        <p className={styles.text}>
          An unexpected error occurred while loading this page. You can try
          again or go back to the home page.
        </p>

        {error.digest && (
          <p className={styles.digest}>Error ID: {error.digest}</p>
        )}

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primary}
            onClick={() => unstable_retry()}
          >
            Try again
          </button>
          <Link href="/" className={styles.secondary}>
            Go home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
