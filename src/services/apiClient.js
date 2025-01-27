import axios from "axios";
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

  //Search
  search: async (q) => {
    try {
      const response = await api.get(`/search?q=${q}`);
      return response.data;
    } catch (error) {
      console.error("Failed to search:", error);
      throw error;
    }
  },

  //Create Post
  createPost: async (post) => {
    try {
      const response = await api.post("/posts", post);
      return response;
    } catch (error) {
      console.error("Failed to create post:", error);
      throw error;
    }
  },

  //Create Poll
  createPoll: async (poll) => {
    try {
      const response = await api.post("/polls", poll);
      return response;
    } catch (error) {
      console.error("Failed to create poll:", error);
      throw error;
    }
  },

  //Get All Posts
  getAllPosts: async ({ skip }) => {
    try {
      const response = await api.get(`/posts?skip=${skip}&limit=${10}`);
      return response.data;
    } catch (error) {
      console.error("Failed to get all posts:", error);
      throw error;
    }
  },

  //Get Post by id
  getPostById: async (post_id) => {
    try {
      const response = await api.get(`/posts/${post_id}`);
      return response.data;
    } catch (error) {
      console.error("Failed to get post by id:", error);
      throw error;
    }
  },

  //Like Post
  likePost: async (post_id) => {
    try {
      const response = await api.post(`/interactions/like/${post_id}`);
      return response;
    } catch (error) {
      console.error("Failed to like post:", error);
      throw error;
    }
  },

  //Bookmark Post
  bookmarkPost: async (post_id) => {
    try {
      const response = await api.post(`/interactions/bookmark/${post_id}`);
      return response;
    } catch (error) {
      console.error("Failed to bookmark post:", error);
      throw error;
    }
  },

  //get city
  getCity: async (name) => {
    try {
      const response = await axios.get(
        `https://turkiyeapi.herokuapp.com/api/v1/provinces?name=${name}`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to get city:", error);
      throw error;
    }
  },
};
