import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../services/apiClient";

export const useLikePost = (options) => {
  return useMutation({
    mutationFn: (postId) => apiClient.likePost(postId),
    ...options,
  });
};
