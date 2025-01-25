import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  console.log(query);
  return <div>Query : {query}</div>;
}

export default SearchPage;
