import { showToast } from "../../utils/toast";

function HomePage() {
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
