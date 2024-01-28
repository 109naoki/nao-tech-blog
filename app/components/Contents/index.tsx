"use client";
import { Blog } from "@/libs/microcms";

import Image from "next/image";
import Link from "next/link";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useSearchParams } from "next/navigation";
type ContentsProps = {
  contents: Blog[];
};
export const Contents: FC<ContentsProps> = ({ contents }) => {
  // const searchParams = useSearchParams();
  // const q = searchParams.get("q");

  // const searchRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   if (q) {
  //     setSearchText(q);
  //   }
  // }, [q]);

  return (
    <>
      <div className="search-area">
        <form action="/search" className="search-form-6" method="GET">
          <label>
            <input
              aria-label="キーワードを入力"
              name="q"
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </label>
        </form>
      </div>
      <div className="contents-area">
        <h1>最新の投稿</h1>
        <ul className="contents-grid">
          {contents.map((post) => (
            <li key={post.id}>
              <div className="content-item">
                <Link href={`/blog/${post.id}`}>
                  {post.eyecatch?.url && (
                    <Image
                      src={post.eyecatch.url}
                      width={62.5}
                      height={50}
                      alt={post.title}
                    />
                  )}
                  <h3>{post.title}</h3>
                  <div className="content-flex">
                    <AccessTimeIcon fontSize="small" />
                    <h5>{format(post.createdAt, "yyyy-MM-dd")}</h5>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
