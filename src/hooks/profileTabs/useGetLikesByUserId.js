import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../services/apiClient";

const useGetLikesByUserId = ({ skip, user_id }, options) => {
  return useQuery({
    queryKey: ["getAuthUserLikes", user_id, skip],
    queryFn: () => apiClient.getLikesByUserId({ skip: skip, user_id: user_id }),
    enabled: !!user_id,
    cacheTime: 10000,
    ...options,
  });
};

export default useGetLikesByUserId;
