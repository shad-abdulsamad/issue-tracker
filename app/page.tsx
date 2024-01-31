import Pagination from "./components/Pagination";

interface Props {
  searchParams: { page: string };
}

export default function Home({ searchParams }: Props) {
  return (
    <div>
      <Pagination
        currentPage={parseInt(searchParams.page)}
        itemCount={100}
        pageSize={10}
      />
    </div>
  );
}
