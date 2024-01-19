import { useQuery } from "@tanstack/react-query";

const fetchCategories = async (pathname: string) => {
  const res = await fetch(`/api/category${pathname}`);
  return res.json();
};
export default async function Page() {
  return <h1>詳細ページ</h1>;
}
