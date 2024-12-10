import { _login, _logout } from "./index";
import store from "../index";
import { mockAccounts } from "../../mock/users";

// Giriş yapma fonksiyonu
export const login = (email, password) => {
  const account = mockAccounts.find(
    (acc) => acc.email === email && acc.password === password
  );
  console.log(account, "aaa");
  if (account) {
    store.dispatch(_login(account)); // Redux store'a kaydediyoruz
    return { success: true, account };
  } else {
    return { success: false, error: "Geçersiz email veya şifre" };
  }
};

// Çıkış yapma fonksiyonu
export const logout = () => {
  store.dispatch(_logout());
};
