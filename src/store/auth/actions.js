import { _login, _logout } from "./index";
import store from "../index";
import { login as loginAuth } from "../../api/auth";

// Giriş yapma fonksiyonu
export const login = async (email, password) => {
  try {
    const { response, status } = await loginAuth(email, password);
    if (status === 201 || status === 202) {
      store.dispatch(_login(response.data.authorizedAccount));
      return { success: true, account: response.data.authorizedAccount };
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
  store.dispatch(_logout());
};
