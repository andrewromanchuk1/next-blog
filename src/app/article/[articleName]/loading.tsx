import loadingStyles from '../../loading.module.css';
import styles from './page.module.css';

const ArticleLoading = () => {
  return (
    <div className={styles.page} role="status" aria-live="polite">
      <main className={styles.main}>
        <div className={`${loadingStyles.line} ${styles.backSkeleton}`} />
        <article className={styles.article} aria-hidden="true">
          <div className={`${loadingStyles.line} ${loadingStyles.cardMeta}`} />
          <div
            className={`${loadingStyles.line} ${loadingStyles.heroTitle}`}
            style={{ marginTop: 16 }}
          />
          <div
            className={`${loadingStyles.line} ${loadingStyles.cardLineShort}`}
            style={{ marginTop: 28 }}
          />
          <div className={loadingStyles.line} style={{ marginTop: 12 }} />
          <div className={loadingStyles.line} style={{ marginTop: 12 }} />
        </article>
      </main>
    </div>
  );
};

export default ArticleLoading;
