import { posts as postData } from "../../../mock/posts";
import { VList } from "virtua";

import Post from "../../../components/post";
import { useState } from "react";

export default function ForYou() {
  const [posts, setPosts] = useState(postData);
  return (
    <VList
      onRangeChange={async (start, end) => {
        if (end + 1 === posts.length) {
          setPosts((prev) => [...prev, ...postData]);
        }
      }}
    >
      {posts.map((post, key) => (
        <Post post={post} key={post.id + key} />
      ))}
    </VList>
  );
}
