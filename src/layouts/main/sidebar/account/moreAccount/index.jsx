import { logout } from "../../../../../store/auth/actions";
import { useAccount } from "../../../../../store/auth/hooks";
import { useNavigate } from "react-router-dom"; // Yönlendirme için import

function MoreAccount() {
  const currentAccount = useAccount();
  const navigate = useNavigate(); // Yönlendirme için hook'u çağır

  return (
    <>
      <button
        onClick={() => {
          const confirmLogout = window.confirm(
            `${currentAccount?.name} hesabından çıkmak istediğinize emin misiniz?`
          );
          if (confirmLogout) {
            logout(); // Çıkış işlemi
            navigate("/login"); // Çıkıştan sonra yönlendirme
          }
        }}
        className="text-center px-3 py-2.5 font-bold w-full transition-all cursor-pointer hover:bg-[color:var(--background-third)] rounded-md"
      >
        {currentAccount?.name} hesabından çıkış yap
      </button>
    </>
  );
}

export default MoreAccount;
