import { useSearchParams, Link } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import LayoutLoder from "../../components/loader/layoutLoader";
import OutletHeader from "../../components/OutletHeader";
import Line from "../../components/line";
import { useState } from "react";
import Separator from "../../components/separator";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [showAll, setShowAll] = useState(false);
  const { data, isLoading } = useSearch(query, { enabled: !!query });

  // Gösterilecek maksimum gönderi sayısı
  const maxPostsToShow = 3;

  // data.posts'u kontrol ederek posts değişkenini ayarla
  const posts = data?.posts || [];

  // Gösterilecek gönderiler
  const visiblePosts = showAll ? posts : posts.slice(0, maxPostsToShow);

  if (isLoading) {
    return <LayoutLoder />;
  }

  return (
    <div className="w-full">
      <OutletHeader title="Arama" returnButton={true} />
      <div className=" flex flex-col space-y-6 bg-white text-black">
        {/* Kullanıcılar */}

        <div className="mb-6 p-3 border-b-2 border-b-[color:var(--background-secondary)]">
          <h1 className="text-xl font-bold mb-4 justify-start flex">Kişiler</h1>
          {data?.users?.length > 0 ? (
            <div className="space-y-4">
              {data.users.map((user) => (
                <Link
                  to={`/${user.username}`}
                  key={user.username}
                  className="flex items-center justify-between bg-gray-50 border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden mr-4">
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          alt={user.fullName}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-lg font-bold">
                          {user.fullName[0]}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{user.fullName}</p>
                      <p className="text-gray-500 text-sm">@{user.username}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p>Kişi bulunamadı.</p>
          )}
          
        </div>
       
        {/* Gönderiler */}
        <div className="p-3 border-b-2 border-b-[color:var(--background-secondary)]">
        
          <h1 className="text-xl font-bold my-4 justify-start flex">Gönderiler</h1>
          {posts.length > 0 ? (
            <div className="space-y-3">
              {visiblePosts.map((post) => (
                <Link
                  to={`/test/status/${post.id}`}
                  key={post.id}
                  className="block p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow border"
                >
                  <p className="font-semibold mb-2 justify-start flex">
                    {post.content}
                  </p>
                  {post.tags?.length > 0 && (
                    <div className="flex flex-wrap mt-2 justify-center">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="border-2 shadow-sm text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                        >
                          #{tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}

             
              {posts.length > maxPostsToShow && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="mt-4 px-4 py-2 bg-[color:var(--color-base)]  text-white font-semibold rounded-lg "
                >
                  {showAll ? "Daha Az Göster" : "Daha Fazla Göster"}
                </button>
                
              )}
            </div>
          ) : (
            <p>Gönderi bulunamadı.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
