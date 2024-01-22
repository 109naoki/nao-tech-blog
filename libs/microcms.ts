import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";
type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category: Category[];
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blogs",
    queries,
  });

  return listData;
};
// カテゴリーごとの記事件数を取得する関数
export const getCategoryArticleCounts = async () => {
  const categories = await client.getList({ endpoint: "categories" });

  const categoryCounts = await Promise.all(
    categories.contents.map(async (category) => {
      const articles = await client.getList({
        endpoint: "blogs",
        queries: { filters: `category[contains]${category.id}` },
      });

      return {
        categoryId: category.id,
        categoryName: category.name,
        count: articles.totalCount,
      };
    })
  );

  return categoryCounts.filter((category) => category.count > 0);
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  return detailData;
};
