import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../services/apiClient";

const useGetAllBookmarks = (options) => {
  return useQuery({
    queryKey: ["getAllBookmarks"], // Sorgu anahtarı, benzersizliği sağlar
    queryFn: () => apiClient.getAllBookmarks(), // API çağrısı
    retry: 1,
    refetchOnWindowFocus: false,
    ...options, // Ek opsiyonlar (ör. staleTime, cacheTime)
  });
};

export default useGetAllBookmarks;
