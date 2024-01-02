export default async function MyPage() {
  const { data } = await fetch("http://localhost:3000/test").then((res) =>
    res.json()
  );

  return <div>{data}</div>;
}
