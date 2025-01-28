import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../services/apiClient";

const useGetPostsByUserId = ({ skip, user_id }, options) => {
  return useQuery({
    queryKey: ["getAuthUserPosts", user_id, skip],
    queryFn: () => apiClient.getPostsByUserId({ skip: skip, user_id: user_id }),
    enabled: !!user_id,
    cacheTime: 10000,
    keepPreviousData: true,
    ...options,
  });
};

export default useGetPostsByUserId;
