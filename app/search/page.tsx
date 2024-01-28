type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { q } = searchParams;
  console.log(q);
  return (
    <div>
      <p>検索キーワード: {q}</p>
    </div>
  );
}
