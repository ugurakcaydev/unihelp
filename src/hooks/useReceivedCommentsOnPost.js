import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../services/apiClient";

const useReceivedCommentsOnPost = ({ post_id, skip = 0 }, options) => {
  return useQuery({
    queryKey: ["getReceivedCommentsOnPost", post_id, skip],
    queryFn: () => apiClient.getReceivedCommentsOnPost({ post_id, skip }),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    ...options, // Ek opsiyonlar (ör. staleTime, cacheTime)
  });
};

export default useReceivedCommentsOnPost;
