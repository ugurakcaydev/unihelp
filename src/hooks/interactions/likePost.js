import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../services/apiClient";

export const useLikePost = (options) => {
  return useMutation({
    mutationFn: ({ postId, type = "like" }) => {
      if (type === "like") {
        return apiClient.likePost(postId);
      } else if (type === "dislike") {
        return apiClient.dislikePost(postId);
      }
    },
    ...options,
  });
};
