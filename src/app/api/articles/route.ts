import { getAllArticles } from '../../(server)/api';

const PAGE_SIZE = 3;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Math.max(
    1,
    Number.parseInt(searchParams.get('page') ?? '1', 10) || 1
  );

  const articles = await getAllArticles();
  const items = articles
    .slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
    .map(({ name, header, preview }) => ({ name, header, preview }));

  return Response.json({ items, hasMore: page * PAGE_SIZE < articles.length });
}
