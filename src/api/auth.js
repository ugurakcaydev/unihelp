import axios from "axios";

// API için temel URL
const API_BASE_URL = "https://api.berkormanli.dev/unihelp/api/auth";

export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/signin`, {
    username: "username",
    email,
    password,
  });
  // 'data' ve 'status' alanlarını ayıklayıp döndürüyoruz
  return { response: response, status: response.status };
};
