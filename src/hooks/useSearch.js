import { useQuery } from "@tanstack/react-query";

import { apiClient } from "../services/apiClient";

function useSearch(query, options) {
  return useQuery(
    ["search", query],
    () => apiClient.search(query), // API çağrısı
    {
      enabled: !!query, // Sadece `query` doluysa çalıştır
      ...options,
    }
  );
}

export default useSearch;
