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
      setSkip((prevSkip) => prevSkip + 10); // Skip değerini artırarak bir sonraki sayfayı getir
    }
  };

  if (isLoading && posts.length === 0) {
    return <LayoutLoder />; // İlk yükleme sırasında gösterilecek loader
  }

  if (error) {
    return <p>Bir hata oluştu: {error.message}</p>; // Hata mesajı
  }

  return (
    <>
      <WindowVirtualizer itemSize={100}>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}

        <InfiniteScroll
          dataLength={posts.length}
          next={fetchMorePosts} // Kaydırma yapıldığında fetchMorePosts çağrılır
          hasMore={hasMore} // Daha fazla veri olup olmadığını kontrol eder
          loader={<LayoutLoder />} // Yüklenme sırasında gösterilecek loader
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! Tüm gönderileri gördünüz!</b>
            </p>
          }
        />
      </WindowVirtualizer>
    </>
  );
}
