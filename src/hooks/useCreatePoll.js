import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../services/apiClient";

const useCreatePoll = (options) => {
  return useMutation({
    mutationFn: ({ poll }) => apiClient.createPoll(poll),
    ...options,
  });
};

export default useCreatePoll;
