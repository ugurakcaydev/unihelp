import { useSelector } from "react-redux";

export const useAccount = () => {
  const account = useSelector((state) => state.auth.currentAccount);
  return account || {};
};
