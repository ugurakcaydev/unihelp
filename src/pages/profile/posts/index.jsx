import { useState, useEffect } from "react";
import useGetPostsByUserId from "../../../hooks/profileTabs/useGetPostsByUserId";
import LayoutLoader from "../../../components/loader/layoutLoader";
import Post from "../../../components/post";
import { WindowVirtualizer } from "virtua";
import InfiniteScroll from "react-infinite-scroll-component";

function ProfilePostsTab({ userId }) {
  const [skip, setSkip] = useState(0);
  const [userPostData, setUserPostData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  console.log(userId, "profil");
  const { isLoading, isFetching, error } = useGetPostsByUserId(
    {
      user_id: userId,
      skip: skip,
    },
    {
      enabled: !!userId, // userId mevcut olduğunda sorguyu çalıştır
      onSuccess: (data) => {
        setUserPostData((prevPosts) =>
          skip === 0 ? data : [...prevPosts, ...data]
        ); // İlk sayfada verileri sıfırla
        if (data.length < 10) {
          setHasMore(false); // Daha fazla veri yoksa yükleme durdur
        }
      },
    }
  );

  // Kullanıcı değişimini takip et ve verileri sıfırla
  useEffect(() => {
    setUserPostData([]); // Gönderi verilerini temizle
    setSkip(0); // Skip sıfırla
    setHasMore(true); // Daha fazla veri olabileceğini varsay
  }, [userId]);

  const fetchMorePosts = () => {
    if (!isFetching) {
      setSkip((prevSkip) => prevSkip + 10); // Skip değerini artır
    }
  };

  if (isLoading && userPostData.length === 0) {
    return <LayoutLoader />;
  }

  if (error) {
    return <p>Bir hata oluştu: {error.message}</p>; // Hata mesajı
  }

  if (!isFetching && userPostData.length === 0) {
    return (
      <div className="w-full h-auto p-3 text-[color:var(--color-primary)] font-semibold">
        Buralar boş gözüküyor...
      </div>
    );
  }

  return (
    <div className="w-full">
      <WindowVirtualizer itemSize={100}>
        {userPostData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
        <InfiniteScroll
          dataLength={userPostData.length}
          next={fetchMorePosts}
          hasMore={hasMore}
          loader={<LayoutLoader />}
        />
      </WindowVirtualizer>
    </div>
  );
}

export default ProfilePostsTab;
