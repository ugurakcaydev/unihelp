import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
import RightBar from "./rightbar";
import Modal from "../../modals";
import { useModal } from "../../store/modal/hooks";

function MainLayout() {
  const modal = useModal();
  console.log(modal);
  return (
    <div className="w-[1263px] mx-auto flex ">
      {modal && <Modal />}
      <Sidebar />
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] text-center border-x border-[color:var(--background-third)]">
          <Outlet />
        </main>
        <RightBar />
      </main>
    </div>
  );
}

export default MainLayout;
