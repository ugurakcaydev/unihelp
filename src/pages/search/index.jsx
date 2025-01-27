import { useSearchParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import LayoutLoder from "../../components/loader/layoutLoader";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { data, isLoading } = useSearch(query, { enabled: !!query });

  if (isLoading) {
    return <LayoutLoder />;
  }
  return (
    <div className="w-full p-3 flex flex-col items-start justify-start ">
      <div>
        <h1>Kişiler</h1>
      </div>
    </div>
  );
}

export default SearchPage;
