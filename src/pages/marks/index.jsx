import { Link } from "react-router-dom";
import OutletHeader from "../../components/OutletHeader";
import { posts } from "../../mock/posts";
import Post from "../../components/post";

function MarksPage() {
  const markedPosts = posts.filter((book) => book.stats.bookmark === true);
  return (
    <div>
      <OutletHeader title="Yer İşaretleri" returnButton={true} />
      <div className="w-full  p-4 ">
        {markedPosts.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center gap-y-3">
            <h1 className="text-lg font-semibold">Buralar boş görünüyor...</h1>
            <Link
              to={"/"}
              className="w-fit px-5 py-2 rounded-md bg-[color:var(--background-secondary)] text-[color:var(--color-primary)]"
            >
              Keşfetmeye başlayın
            </Link>
          </div>
        ) : (
          <div className="w-full flex flex-col items-start justify-start">
            {markedPosts.map((post, index) => {
              return <Post post={post} key={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default MarksPage;
