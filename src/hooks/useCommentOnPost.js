import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../services/apiClient";

const useCommentOnPost = (options) => {
  return useMutation({
    mutationFn: ({ post_id, comment }) =>
      apiClient.commentOnPost({ post_id: post_id, comment: comment }),
    ...options,
  });
};

export default useCommentOnPost;
