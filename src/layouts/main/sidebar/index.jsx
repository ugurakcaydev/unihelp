import Logo from "./logo";

function Sidebar() {
  return (
    <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col items-start  sticky top-0  z-20">
      <Logo />
      {/* <Menu />
      <Account /> */}
    </aside>
  );
}

export default Sidebar;
