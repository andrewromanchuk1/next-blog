import Link from 'next/link';
import styles from '../error.module.css';

const ErrorBoundaryPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.card}>
        <div className={styles.icon} aria-hidden="true">
          ?
        </div>
        <p className={styles.eyebrow}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>
          The page you are looking for does not exist or has been moved.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primary}>
            Go home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ErrorBoundaryPage;
