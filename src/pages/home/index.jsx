import { useAccount } from "../../store/auth/hooks";
import { showToast } from "../../utils/toast";

function HomePage() {
  const currentUser = useAccount();
  console.log({ currentUser });
  return (
    <div>
      <h1>Home</h1>
      <div>
        <button
          onClick={() => {
            showToast("success", "Erorr");
            console.log("asdasdasd");
          }}
        >
          Tıkla
        </button>
      </div>
    </div>
  );
}

export default HomePage;
