import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../services/apiClient";

const useGetUserBookmarks = (skip = 0, options) => {
  return useQuery({
    queryKey: ["getAllBookmarks", skip],
    queryFn: () => apiClient.getAllBookmarks({ skip: skip }),
    retry: 2,
    refetchOnWindowFocus: false,
    ...options,
  });
};

export default useGetUserBookmarks;
