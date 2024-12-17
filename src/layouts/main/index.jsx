import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
import RightBar from "./rightbar";
import Modal from "../../modals";
import { useModal } from "../../store/modal/hooks";
import { useEffect } from "react";
import { useAppearance } from "../../store/appearance";
import Post from "../../components/post";

function MainLayout() {
  const modal = useModal();
  const appearance = useAppearance();
  console.log(appearance);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-primary",
      appearance.backgroundColor.primary
    );

    document.documentElement.style.setProperty(
      "--background-secondary",
      appearance.backgroundColor.secondary
    );
    document.documentElement.style.setProperty(
      "--background-third",
      appearance.backgroundColor.third
    );

    document.documentElement.style.setProperty(
      "--color-primary",
      appearance.color.primary
    );

    document.documentElement.style.setProperty(
      "--color-secondary",
      appearance.color.secondary
    );
    document.documentElement.style.setProperty(
      "--color-base",
      appearance.color.base
    );

    document.documentElement.style.setProperty(
      "--box-shadow",
      appearance.boxShadow
    );
    document.documentElement.style.setProperty(
      "--color-base-secondary",
      appearance.color.baseSecondary
    );
  }, [appearance]);

  return (
    <div className="w-[1263px] mx-auto flex ">
      {modal && <Modal />}
      <Sidebar />
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] text-center border-x border-[color:var(--background-third)]">
          <Outlet />
          <Post/>
        </main>
        <RightBar />
      </main>
    </div>
  );
}

export default MainLayout;
