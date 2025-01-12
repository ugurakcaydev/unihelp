import api from "./api";

export const apiClient = {
  //Sign in
  signIn: async (email, password) => {
    try {
      const response = await api.post("/auth/signin", {
        email,
        password,
      });
      console.log(response, "response");
      return response;
    } catch (error) {
      console.error("Failed to sign in:", error);
      throw error;
    }
  },

  //Sign up
  signUp: async (username, email, password) => {
    try {
      const response = await api.post("/auth/signup", {
        username,
        email,
        password,
      });
      return response;
    } catch (error) {
      console.error("Failed to sign in:", error);
      throw error;
    }
  },
};
