import { useSearchParams, Link } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import LayoutLoder from "../../components/loader/layoutLoader";
import OutletHeader from "../../components/OutletHeader";
import Post from "../../components/post";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { data: posts, isLoading: isPostsLoading } = useSearch(query, {
    enabled: !!query,
    select: (data) => [...data.posts].reverse(), // Sadece posts arrayini alıyoruz
  });

  const { data: tags, isLoading: isTagsLoading } = useSearch(query, {
    enabled: !!query,
    select: (data) => data.tags, // Sadece tags arrayini alıyoruz
  });

  const { data: users, isLoading: isUsersLoading } = useSearch(query, {
    enabled: !!query,
    select: (data) => data.users, // Sadece users arrayini alıyoruz
  });

  if (isPostsLoading || isTagsLoading || isUsersLoading) {
    return <LayoutLoder />;
  }

  return (
    <div className="w-full">
      <OutletHeader title="Arama" returnButton={true} />
      <div className=" flex flex-col bg-white text-black">
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="border-b-2 border-b-[color:var(--background-secondary)]">
            <div className="flex flex-col text-left p-3  gap-y-3">
              <h1 className="text-xl font-bold justify-start flex">
                Etiketler
              </h1>

              {tags.map((tag, index) => (
                <div
                  className="font-semibold text-[color:var(--color-primary)]"
                  key={index}
                >{`#${tag.name}`}</div>
              ))}
            </div>
          </div>
        )}
        {/* Kullanıcılar */}
        {users && users.length > 0 && (
          <div className=" border-b-2 border-b-[color:var(--background-secondary)]">
            <div className="flex flex-col pb-1">
              <div className="w-full p-3 ">
                <h1 className="text-xl font-bold justify-start flex">
                  Kişiler
                </h1>
              </div>
              <div className="w-full flex flex-col items-start justify-start  ">
                {users.map((user) => (
                  <Link
                    to={`/${user.username}`}
                    key={user.username}
                    className="w-full flex items-center justify-between hover:bg-zinc-50 p-3 "
                  >
                    <div className="flex items-center gap-x-2">
                      <img
                        className="w-10 h-10 rounded-full overflow-hidden"
                        src={user.avatar || "https://placehold.co/40x40"}
                        alt=""
                      />
                      <p className="font-semibold">{user.fullName}</p>
                    </div>
                  </Link>
                ))}
                {users.length >= 5 && (
                  <div className="w-full flex items-center justify-start p-3 hover:bg-zinc-50">
                    <button className="text-sm text-[color:var(--color-primary)] w-full h-full text-left">
                      Tümünü Görüntüle
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Gönderiler */}
        {posts && (
          <div className="">
            <div className="flex flex-col pb-1">
              <div className="w-full p-3">
                <h1 className="text-xl font-bold justify-start flex">
                  Gönderiler
                </h1>
              </div>
              {posts.map((post) => (
                <Post post={post} key={post.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
