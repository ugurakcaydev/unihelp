import { profilePosts as postData } from "../../../mock/posts";
import Post from "../../../components/post";

function ProfilePostsTab() {
  return (
    <div>
      {postData.map((post, key) => (
        <Post post={post} key={post.id + key} />
      ))}
    </div>
  );
}

export default ProfilePostsTab;
