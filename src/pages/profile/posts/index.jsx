import { useState } from "react";
import { profilePosts as postData } from "../../../mock/posts";
import Post from "../../../components/post";

function ProfilePostsTab() {
  const [posts, setPosts] = useState(postData);
  return (
    <div>
      {posts.map((post, key) => (
        <Post post={post} key={post.id + key} />
      ))}
    </div>
  );
}

export default ProfilePostsTab;
