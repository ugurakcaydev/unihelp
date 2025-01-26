import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../services/apiClient";

export const useBookmarksPost = (options) => {
  return useMutation({
    mutationFn: ({ postId }) => apiClient.bookmarkPost(postId),
    ...options,
  });
};
