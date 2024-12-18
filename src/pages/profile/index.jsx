import OutletHeader from "../../components/OutletHeader";
import { useState } from "react";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Gönderiler");

  const tabs = ["Gönderiler", "Cevaplar", "Beğeniler"];

  const tabContent = {
    Gönderiler: <div>Posts</div>,
    Cevaplar: <div>Cevaplar</div>,
    Beğeniler: <div>Beğeniler</div>,
  };

  return (
    <div className="w-full ">
      <OutletHeader title="Profil" returnButton={true} />
      <div className="relative flex flex-col items-center mt-[5rem]">
        <div className="w-28 h-28 rounded-full bg-gray-600 absolute -top-14 border-4 border-black flex items-center justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Placeholder"
            className="w-full h-full rounded-full"
          />
        </div>

        <div className="mt-16 text-center">
          <h1 className="text-2xl font-bold">UNİHELP</h1>
          <p className="text-gray-400">@unihelp</p>
          <button className="mt-2 bg-[color:var(--color-primary)] text-white px-3 py-1 rounded-full ">
            Profilinizi Düzenleyin
          </button>
        </div>

        <div className="flex mt-4 pt-2 space-x-4 w-full border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-3 text-center font-semibold hover:bg-gray-200  ${
                activeTab === tab
                  ? "border-b-[3px] border-[color:var(--color-primary)] "
                  : "text-gray-600"
              }`}
            >
              {tab}a
            </button>
          ))}
        </div>

        <div className="w-full">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
}

export default ProfilePage;
