import store from ".";
import { _setCurrentAccount, _logout, accounts } from "./index";

// Giriş yapma fonksiyonu
export const login = (username, password) => {
  const account = accounts.find(
    (acc) => acc.username === username && acc.password === password
  );

  if (account) {
    store.dispatch(_setCurrentAccount(account)); // Hesap bulunduysa giriş yap.
    return account; // Başarılı giriş için kullanıcı bilgisi döndür.
  } else {
    return null; // Giriş başarısız.
  }
};

// Çıkış yapma fonksiyonu
export const logout = () => {
  store.dispatch(_logout());
};
