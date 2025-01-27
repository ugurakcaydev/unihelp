import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../services/apiClient";

const useGetPostById = (id, options) => {
  return useQuery({
    queryKey: ["getAllPosts", id], // Sorgu anahtarı, benzersizliği sağlar
    queryFn: () => apiClient.getPostById(id),
    retry: 0,
    retryDelay: (attempt) => Math.min(800 * 2 ** attempt, 1800),
    ...options,
  });
};

export default useGetPostById;
