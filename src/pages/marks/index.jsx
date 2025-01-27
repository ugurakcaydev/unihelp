import { useState, useEffect } from "react"; // useState ve useEffect importları
import { useMutation } from "@tanstack/react-query"; // React Query hook'u
import OutletHeader from "../../components/OutletHeader";
import Post from "../../components/post";

function MarksPage() {
  const [posts, setPosts] = useState([]);  

  
  useEffect(() => {
    
   
    const fetchPosts = async () => {
     
      const response = await api.get(`/interactions/bookmarks`); 
      setPosts(response.data); 
    };
    fetchPosts();
  }, []);


  const { mutate: bookmarkPost } = useBookmarksPost({
    onSuccess: (data, variables) => {
     
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === variables.postId
            ? { ...post, isBookmarked: variables.type === "bookmark" }
            : post
        )
      );
    },
    onError: (error) => {
      console.error("Bookmark işlemi sırasında hata oluştu:", error);
    },
  });

 
  const handleBookmarkToggle = (postId, currentBookmarkState) => {
    const newType = currentBookmarkState ? "unbookmark" : "bookmark"; 
    bookmarkPost({ postId, type: newType });
  };

  
  const markedPosts = posts.filter((post) => post.isBookmarked === true);

  return (
    <div>
      <OutletHeader title="Yer İşaretleri" returnButton={true} />
      <div className="w-full flex flex-col items-start justify-start">
        {markedPosts.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center gap-y-3">
            <h1 className="text-lg font-semibold">Buralar boş görünüyor...</h1>
          </div>
        ) : (
          <div className="w-full flex flex-col items-start justify-start">
            {markedPosts.map((post, index) => (
              <Post
                key={index}
                post={post}
                onBookmarkToggle={() =>
                  handleBookmarkToggle(post.id, post.isBookmarked)
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MarksPage;
