import LatestIssues from "./LatestIssues";

interface Props {
  searchParams: { page: string };
}

export default function Home() {
  return <LatestIssues />;
}
