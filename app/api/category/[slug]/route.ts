import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";
import { NextRequest, NextResponse } from "next/server";
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category: string[];
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

// category一覧を取得

export async function GET(request: NextRequest) {
  const path = request.nextUrl.pathname.split("/").pop();

  const listData = await client.getList<Blog[]>({
    endpoint: `blogs`,
  });
  const filteredData = listData.contents.filter((item: any) =>
    item.category.some((category: any) => category.id === path)
  );

  return NextResponse.json(filteredData);
}
