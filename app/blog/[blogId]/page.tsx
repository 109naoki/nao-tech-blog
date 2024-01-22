import { notFound } from "next/navigation";
import parse, { domToReact, Element } from "html-react-parser";
import { getDetail, getList } from "@/libs/microcms";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";
type Category = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
};
import FolderIcon from "@mui/icons-material/Folder";
import { format } from "date-fns";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((blog) => {
    return {
      blogId: blog.id,
    };
  });

  return [...paths];
}

export default async function Page({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  const post = await getDetail(blogId);

  if (!post) {
    notFound();
  }

  const eyecatchUrl = post.eyecatch?.url ?? "";

  return (
    <div className="container">
      <div className="heading-area">
        <Image src={eyecatchUrl} width={140} height={110} alt="" />
        <h1>{post.title}</h1>
        <div className="content-flex">
          <FolderIcon fontSize="small" />
          <h5>{post.category[0].name}</h5>
          <AccessTimeIcon fontSize="small" />
          <h5>{format(post.category[0].createdAt, "yyyy-MM-dd")}</h5>
        </div>
      </div>
      <div className="content-area">{parse(post.content)}</div>
    </div>
  );
}
