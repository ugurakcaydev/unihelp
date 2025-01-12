import api from "./api";

export const apiClient = {
  //Sign in
  signIn: async (email, password) => {
    try {
      const response = await api.post("/auth/signin", {
        email,
        password,
      });

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
        username: username,
        email: email,
        password: password,
      });

      return response;
    } catch (error) {
      console.error("Failed to sign in:", error);
      throw error;
    }
  },

  //Email verification
  emailVerification: async (account_id, code) => {
    try {
      const response = await api.post(`/auth/verify/${account_id}`, {
        code,
      });
      return response;
    } catch (error) {
      console.error("Failed to verify account:", error);
      throw error;
    }
  },
};
