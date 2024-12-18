import { posts as postData } from "../../../mock/posts";

import Post from "../../../components/post";
import { useState } from "react";
import { WindowVirtualizer } from "virtua";

export default function ForYou() {
  const [posts, setPosts] = useState(postData);
  return (
    <WindowVirtualizer
      onRangeChange={async (start, end) => {
        if (end + 1 === posts.length) {
          setPosts((prev) => [...prev, ...postData]);
        }
      }}
      onScroll={(s, e) => {
        console.log(s, e, "se");
      }}
    >
      {posts.map((post, key) => (
        <Post post={post} key={post.id + key} />
      ))}
    </WindowVirtualizer>
  );
}
