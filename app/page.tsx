import { getList } from "@/libs/microcms";

import { Contents } from "./components/Contents";

export const revalidate = 0;

export default async function Page() {
  const { contents } = await getList({
    limit: 10,
  });

  return (
    <div>
      <Contents contents={contents} />
    </div>
  );
}
