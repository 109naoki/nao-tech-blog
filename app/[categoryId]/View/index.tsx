"use client";
import { FC } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Contents } from "@/app/components/Contents";
const fetchCategories = async (pathname: string) => {
  const res = await fetch(`/api/category${pathname}`);
  return res.json();
};
export const View: FC = () => {
  const pathname = usePathname();
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories", pathname],
    queryFn: () => fetchCategories(pathname),
  });

  console.log(categories);
  if (isLoading) {
    return <div>ロード中...</div>;
  }

  return (
    <div>
      <Contents contents={categories} />
    </div>
  );
};
