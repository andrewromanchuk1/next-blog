import { getAllArticles } from './(server)/api';
import type { Article } from '../types/article';
import styles from './page.module.css';
import Link from 'next/link';
import { Suspense } from 'react';
import ArticlesSkeleton from './ArticlesSkeleton';
import ArticleCard from '../components/ArticleCard';

const PAGE_SIZE = 3;

async function Articles({ page }: { page?: string }) {
  const articles: Article[] = await getAllArticles();

  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
  const requestedPage = Number.parseInt(page ?? '1', 10);
  const currentPage = Number.isNaN(requestedPage)
    ? 1
    : Math.min(Math.max(requestedPage, 1), totalPages);

  const articlesToDisplay = articles.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <>
      <ul className={styles.grid}>
        {articlesToDisplay.map((article) => (
          <ArticleCard key={article.name} article={article} />
        ))}
      </ul>
      <nav className={styles.pagination} aria-label="Pagination">
        {currentPage > 1 ? (
          <Link
            href={`/?page=${currentPage - 1}`}
            className={styles.paginationLink}
          >
            Previous
          </Link>
        ) : (
          <span className={styles.paginationDisabled}>Previous</span>
        )}
        <span className={styles.paginationInfo}>
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages ? (
          <Link
            href={`/?page=${currentPage + 1}`}
            className={styles.paginationLink}
          >
            Next
          </Link>
        ) : (
          <span className={styles.paginationDisabled}>Next</span>
        )}
      </nav>
    </>
  );
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Blog</p>
          <h1 className={styles.title}>Welcome to the Next Blog App</h1>
          <p className={styles.subtitle}>
            This is a simple blog app built with Next.js.
          </p>
        </header>
        <Suspense key={page ?? '1'} fallback={<ArticlesSkeleton />}>
          <Articles page={page} />
        </Suspense>
      </main>
    </div>
  );
}
