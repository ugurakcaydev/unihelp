import { useState } from "react";
import OutletHeader from "../../components/OutletHeader";
import Post from "../../components/post";
import useGetUserBookmarks from "../../hooks/interactions/getBookmarks";
import LayoutLoder from "../../components/loader/layoutLoader";
import { WindowVirtualizer } from "virtua";
import InfiniteScroll from "react-infinite-scroll-component";

function MarksPage() {
  const [skip, setSkip] = useState(0);
  const [markedPosts, setMarkedPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const { isFetching, error } = useGetUserBookmarks(skip, {
    onSuccess: (data) => {
      setMarkedPosts((prevPosts) => [...prevPosts, ...data]);
      if (data.length < 10) {
        setHasMore(false);
      }
    },
    onError: (error) => {
      console.error("Bookmark işlemi sırasında hata oluştu:", error);
    },
  });

  const fetchMorePosts = () => {
    if (!isFetching) {
      setSkip((prevSkip) => prevSkip + 10);
    }
  };

  if (error) {
    return <div className="w-full p-3 text-red-500">{`error:${error}`}</div>;
  }

  if (!isFetching && markedPosts.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center p-3">
        <h1 className=" text-[color:var(--color-primary)]">
          Yer işaretleri boş görünüyor...
        </h1>
      </div>
    );
  }

  return (
    <>
      <OutletHeader title="Yer İşaretleri" returnButton={true} />
      {isFetching && <LayoutLoder />}
      <div className="w-full flex flex-col items-start justify-start">
        <WindowVirtualizer itemSize={100}>
          {markedPosts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
          <InfiniteScroll
            dataLength={markedPosts.length}
            next={fetchMorePosts}
            hasMore={hasMore}
            loader={markedPosts.length > 0 && <LayoutLoder />}
          />
        </WindowVirtualizer>
      </div>
    </>
  );
}

export default MarksPage;
