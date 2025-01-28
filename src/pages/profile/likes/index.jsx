import { useState } from "react";
import useGetLikesByUserId from "../../../hooks/profileTabs/useGetLikesByUserId";
import LayoutLoder from "../../../components/loader/layoutLoader";
import { WindowVirtualizer } from "virtua";
import Post from "../../../components/post";
import InfiniteScroll from "react-infinite-scroll-component";

function ProfileLikesTab({ userId }) {
  const [skip, setSkip] = useState(0);
  const [userLikesData, setUserLikesData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { isLoading, isFetching, error } = useGetLikesByUserId(
    {
      user_id: userId,
      skip: skip,
    },
    {
      onSuccess: (data) => {
        setUserLikesData((prevPosts) => [...prevPosts, ...data]);
        if (data.length < 10) {
          setHasMore(false); // Gelen veri azsa daha fazla veri olmadığını belirt
        }
      },
    }
  );

  const fetchMoreComment = () => {
    if (!isFetching) {
      setSkip((prevSkip) => prevSkip + 10);
    }
  };

  if (isLoading && userLikesData.length === 0) {
    return <LayoutLoder />;
  }

  if (error) {
    return <p>Bir hata oluştu: {error.message}</p>; // Hata mesajı
  }

  if (!isFetching && userLikesData.length === 0) {
    return (
      <div className="w-full h-auto p-3 text-[color:var(--color-primary)] font-semibold ">
        Buralar boş gözüküyor...
      </div>
    );
  }

  return (
    <div className="w-full">
      <WindowVirtualizer itemSize={100}>
        {userLikesData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
        <InfiniteScroll
          dataLength={userLikesData.length}
          next={fetchMoreComment}
          hasMore={hasMore}
          loader={<LayoutLoder />}
        />
      </WindowVirtualizer>
    </div>
  );
}

export default ProfileLikesTab;
