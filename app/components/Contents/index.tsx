import { Blog } from "@/libs/microcms";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { format } from "date-fns";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
type ContentsProps = {
  contents: Blog[];
};
export const Contents: FC<ContentsProps> = ({ contents }) => {
  return (
    <>
      {/* <div className="search-area">
        <form action="#" className="search-form-6">
          <label>
            <input type="text" aria-label="キーワードを入力" />
          </label>
        </form>
      </div> */}
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
