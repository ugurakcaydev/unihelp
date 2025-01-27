import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../services/apiClient";

export const useBookmarksPost = (options) => {
  return useMutation({
    mutationFn: ({ postId, type = "bookmark" }) => {
      if (type === "bookmark") {
        return apiClient.bookmarkPost(postId);
      } else if (type === "unbookmark") {
        return apiClient.unbookmarkPost(postId);
      }
    },
    ...options,
  });
};
