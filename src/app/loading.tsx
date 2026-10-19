import styles from './loading.module.css';

const SKELETON_CARDS = 3;

const LoadingPage = () => {
  return (
    <div className={styles.page} role="status" aria-live="polite">
      <main className={styles.main}>
        <header className={styles.hero}>
          <span className={styles.status}>
            <span className={styles.spinner} aria-hidden="true" />
            Loading
          </span>
          <div className={`${styles.line} ${styles.heroTitle}`} />
          <div className={`${styles.line} ${styles.heroText}`} />
        </header>

        <ul className={styles.grid} aria-hidden="true">
          {Array.from({ length: SKELETON_CARDS }, (_, i) => (
            <li key={i} className={styles.card}>
              <div className={`${styles.line} ${styles.cardTitle}`} />
              <div className={styles.line} />
              <div className={styles.line} />
              <div className={`${styles.line} ${styles.cardLineShort}`} />
              <div className={`${styles.line} ${styles.cardMeta}`} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default LoadingPage;
