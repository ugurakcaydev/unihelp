import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../services/apiClient";
 
const useGetLikes = ( options) => {
  return useQuery({
    queryKey: ["getAllLikes" ], // Sorgu anahtarı, benzersizliği sağlar
    queryFn: () => apiClient.getUserLikes(),
    retry: 1,
    retryDelay: (attempt) => Math.min(800 * 2 ** attempt, 1800),
    ...options,
  });
};

export default useGetLikes;
