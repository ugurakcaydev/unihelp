import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../services/apiClient";

const useGetAllPosts = ({ skip = 0 }, options) => {
  return useQuery({
    queryKey: ["getAllPosts", { skip }], // Sorgu anahtarı, benzersizliği sağlar
    queryFn: () => apiClient.getAllPosts({ skip }), // API çağrısı
    ...options, // Ek opsiyonlar (ör. staleTime, cacheTime)
  });
};

export default useGetAllPosts;
