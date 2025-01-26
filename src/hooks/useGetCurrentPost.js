import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../services/apiClient";

const useGetPostById = (id, options) => {
  return useQuery({
    queryKey: ["getAllPosts", id], // Sorgu anahtarı, benzersizliği sağlar
    queryFn: () => apiClient.getPostById(id), // API çağrısı
    ...options, // Ek opsiyonlar (ör. staleTime, cacheTime)
  });
};

export default useGetPostById;
