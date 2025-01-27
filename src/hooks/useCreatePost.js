import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../services/apiClient";
import { showToast } from "../utils/toast";

const useCreateComment = (options) => {
  return useMutation({
    mutationFn: async ({ commentData, type = "comment" }) => {
      try {
        switch (type) {
          case "comment":
            return await apiClient.createPost(commentData);
          case "poll":
            return await apiClient.createPoll(commentData);
          default:
            throw new Error("Geçersiz type!");
        }
      } catch (error) {
        showToast("error", error.message || "Bir hata oluştu.");
        throw error; // Hata fırlatılarak, üst seviyeye iletilebilir.
      }
    },

    ...options,
  });
};

export default useCreateComment;
