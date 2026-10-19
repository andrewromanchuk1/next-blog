import { getArticleByName } from '../../(server)/api';

const ArticlePage = async ({
  params,
}: {
  params: Promise<{ articleName: string }>;
}) => {
  const { articleName } = await params;

  const article = await getArticleByName(articleName);

  return (
    <div>
      <h1>Article Page</h1>
      <p>This is the article page for {articleName}.</p>

      {
        <div>
          <h2>{article.header}</h2>
        </div>
      }
    </div>
  );
};

export default ArticlePage;
