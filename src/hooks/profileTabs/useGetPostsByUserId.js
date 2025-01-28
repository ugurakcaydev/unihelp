import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../services/apiClient";

const useGetPostsByUserId = ({ skip, user_id }, options) => {
  return useQuery({
    queryKey: ["getAuthUserPosts", user_id, skip],
    enabled: user_id,
    queryFn: () => apiClient.getPostsByUserId({ skip: skip, user_id: user_id }),
    ...options,
  });
};

export default useGetPostsByUserId;
