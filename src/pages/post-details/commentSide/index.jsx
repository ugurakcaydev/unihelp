import { useState } from "react";
import CommentPostDetail from "./comment";
import ReceivedComment from "./received-comments";

function CommentSide({ post_id }) {
  const [commentAdd, setCommentAdd] = useState();
  return (
    <>
      <CommentPostDetail post_id={post_id} setCommentAdd={setCommentAdd} />
      <ReceivedComment post_id={post_id} commentAdd={commentAdd} />
    </>
  );
}

export default CommentSide;
