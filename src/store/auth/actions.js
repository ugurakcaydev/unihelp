import { _login, _logout } from "./index";
import store from "../index";
import { apiClient } from "../../services/apiClient";

// Giriş yapma fonksiyonu
export const login = async (email, password) => {
  try {
    const { data, status } = await apiClient.signIn(email, password);
    if (status === 201 || status === 202) {
      store.dispatch(_login(data)); // login işlemi başarılıysa
      return { success: true, account: data.authorizedAccount };
    } else {
      return Promise.reject({
        message: "Geçersiz kullanıcı adı veya şifre",
      });
    }
  } catch (error) {
    console.error("API çağrısı sırasında hata oluştu:", error);
    return Promise.reject({
      message: error.response?.data?.detail || "Bir hata oluştu",
    });
  }
};

// Çıkış yapma fonksiyonu
export const logout = () => {
  store.dispatch(_logout()); // Logout işlemi başarılıysa
};
