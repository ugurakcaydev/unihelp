import useReceivedCommentsOnPost from "../../../../hooks/useReceivedCommentsOnPost";
import { useEffect, useState } from "react";
import LayoutLoder from "../../../../components/loader/layoutLoader";
import ReceivedCommentCard from "./card";
import { WindowVirtualizer } from "virtua";
import InfiniteScroll from "react-infinite-scroll-component";

function ReceivedComment({ post_id, commentAdd }) {
  const [commentData, setCommentData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const { isLoading, isFetching, error } = useReceivedCommentsOnPost(
    { post_id: post_id, skip: skip },
    {
      onSuccess: (data) => {
        
        setCommentData((prevPosts) => [...prevPosts, ...data]);
        if (data.length < 10) {
          setHasMore(false); // Gelen veri azsa daha fazla veri olmadığını belirt
        }
      },
    }
  );

  useEffect(() => {
    if (commentAdd) {
      setCommentData((prevComment) => [commentAdd, ...prevComment]);
    }
  }, [commentAdd]);

  const fetchMoreComment = () => {
    if (!isFetching) {
      setSkip((prevSkip) => prevSkip + 10);
    }
  };

  if (isLoading && commentData.length === 0) {
    return <LayoutLoder />;
  }

  if (error) {
    return <p>Bir hata oluştu: {error.message}</p>; // Hata mesajı
  }

  if (!isFetching && commentData.length === 0) {
    return (
      <div className="w-full h-auto p-3 text-[color:var(--color-primary)] font-semibold border-b-2 border-b-[color:var(--background-secondary)] ">
        Buralar boş gözüküyor...
      </div>
    );
  }
  return (
    <div className="w-full ">
      <WindowVirtualizer itemSize={100}>
        {commentData.map((comment, index) => (
          <ReceivedCommentCard key={index} comment={comment} />
        ))}

        <InfiniteScroll
          dataLength={commentData.length}
          next={fetchMoreComment}
          hasMore={hasMore}
          loader={<LayoutLoder />}
          // endMessage={
          //   <p style={{ textAlign: "center" }}>
          //     <b>Yay! Tüm yorumları gördünüz!</b>
          //   </p>
          // }
        />
      </WindowVirtualizer>
    </div>
  );
}

export default ReceivedComment;
