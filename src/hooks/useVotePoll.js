import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../services/apiClient";

const useVotePoll = (options) => {
  return useMutation({
    mutationFn: ({ answer_index, poll_id }) =>
      apiClient.votePoll({ poll_id: poll_id, answer_index: answer_index }),
    ...options,
  });
};

export default useVotePoll;
