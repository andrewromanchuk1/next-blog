import styles from './loading.module.css';

const SKELETON_CARDS = 3;

const ArticlesSkeleton = () => {
  return (
    <ul
      className={styles.grid}
      role="status"
      aria-live="polite"
      aria-label="Loading articles"
    >
      {Array.from({ length: SKELETON_CARDS }, (_, i) => (
        <li key={i} className={styles.card} aria-hidden="true">
          <div className={`${styles.line} ${styles.cardTitle}`} />
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={`${styles.line} ${styles.cardLineShort}`} />
          <div className={`${styles.line} ${styles.cardMeta}`} />
        </li>
      ))}
    </ul>
  );
};

export default ArticlesSkeleton;
