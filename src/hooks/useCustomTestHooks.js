import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../services/apiClient";

export const useGetCity = (options) => {
  return useMutation({
    mutationFn: ({ name }) => apiClient.getCity(name),
    ...options,
  });
};
