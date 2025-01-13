
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const currentAccount = localStorage.getItem("currentAccount");

  if (!currentAccount) {
    // currentAccount yoksa giriş sayfasına yönlendir
    return <Navigate to="/login" />;
  }

  return children; // currentAccount varsa bileşeni render et
};

export default ProtectedRoute;
