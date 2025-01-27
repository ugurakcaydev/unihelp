import { profilePosts as postData } from "../../../mock/posts";
import Post from "../../../components/post";

function ProfilePostsTab() {
  return (
    <div>
      {postData.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default ProfilePostsTab;
