import { getList } from "@/libs/microcms";

import { Contents } from "./components/Contents";

export const revalidate = 3600;

export default async function Page() {
  const { contents } = await getList({
    limit: 20,
  });

  return (
    <div>
      <Contents contents={contents} />
    </div>
  );
}
