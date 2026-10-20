import pageStyles from '../page.module.css';
import LoadMoreArticles from './LoadMoreArticles';

const DemoPage = () => {
  return (
    <div className={pageStyles.page}>
      <main className={pageStyles.main}>
        <header className={pageStyles.hero}>
          <p className={pageStyles.eyebrow}>Demo</p>
          <h1 className={pageStyles.title}>Route Handler</h1>
          <p className={pageStyles.subtitle}>
            The articles below are loaded in the browser from /api/articles.
          </p>
        </header>

        <LoadMoreArticles />
      </main>
    </div>
  );
};

export default DemoPage;
