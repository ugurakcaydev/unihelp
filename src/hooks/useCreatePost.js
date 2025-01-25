import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../services/apiClient";

const useCreatePost = (options) => {
  return useMutation({
    // mutationFn bir referans olmalı
    mutationFn: ({ post }) => apiClient.createPost(post),
    ...options,
  });
};

export default useCreatePost;
