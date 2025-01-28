import { useState } from "react";
import useGetPostsByUserId from "../../../hooks/profileTabs/useGetPostsByUserId";
import LayoutLoder from "../../../components/loader/layoutLoader";
import Post from "../../../components/post";
import { WindowVirtualizer } from "virtua";
import InfiniteScroll from "react-infinite-scroll-component";

function ProfilePostsTab({ userId }) {
  const [skip, setSkip] = useState(0);
  const [userPostData, setUserPostData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { isLoading, isFetching, error } = useGetPostsByUserId(
    {
      user_id: userId,
      skip: skip,
    },
    {
      onSuccess: (data) => {
        setUserPostData((prevPosts) => [...prevPosts, ...data]);
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

  if (isLoading && userPostData.length === 0) {
    return <LayoutLoder />;
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
          next={fetchMoreComment}
          hasMore={hasMore}
          loader={<LayoutLoder />}
        />
      </WindowVirtualizer>
    </div>
  );
}

export default ProfilePostsTab;
