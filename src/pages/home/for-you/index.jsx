import { useEffect, useState } from "react";
import Post from "../../../components/post";
import useGetAllPosts from "../../../hooks/useGetAllPosts";
import InfiniteScroll from "react-infinite-scroll-component";
import LayoutLoder from "../../../components/loader/layoutLoader";
import { WindowVirtualizer } from "virtua";

export default function ForYou({ commentAdd }) {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0); // Skip burada tutuluyor
  const [hasMore, setHasMore] = useState(true);

  // React Query'den veri çekmek için useQuery hook'u
  const { isLoading, isFetching, error } = useGetAllPosts(skip, {
    onSuccess: (data) => {
      setPosts((prevPosts) => [...prevPosts, ...data]);
      if (data.length < 10) {
        setHasMore(false); // Gelen veri azsa daha fazla veri olmadığını belirt
      }
    },
  });

  useEffect(() => {
    if (commentAdd) {
      setPosts((prevPosts) => [commentAdd, ...prevPosts]);
    }
  }, [commentAdd]);

  // Yeni veri çekme (fetchMore) fonksiyonu
  const fetchMorePosts = () => {
    if (!isFetching) {
      setSkip((prevSkip) => prevSkip + 10);
    }
  };

  if (isLoading && posts.length === 0) {
    return <LayoutLoder />;
  }

  if (error) {
    return <p>Bir hata oluştu: {error.message}</p>; // Hata mesajı
  }

  

  return (
    <>
      <WindowVirtualizer itemSize={100}>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
        <InfiniteScroll
          dataLength={posts.length}
          next={fetchMorePosts}
          hasMore={hasMore}
          loader={<LayoutLoder />}
        />
      </WindowVirtualizer>
    </>
  );
}
