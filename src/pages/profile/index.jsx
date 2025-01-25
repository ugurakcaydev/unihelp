import OutletHeader from "../../components/OutletHeader";

import Tab from "../../components/tab";
import StickyHeader from "../../components/sticky-header";
import { useAccount } from "../../store/auth/hooks";
import classNames from "classnames";
import { PenIcon } from "../../constant/icons";
import ProfilePostsTab from "./posts";
import ProfileAnswersTab from "./answers";
import ProfileLikesTab from "./likes";
import { setModal } from "../../store/modal/actions";

import { useParams } from "react-router-dom";
import { capitalizeFullName } from "../../utils/format";

function ProfilePage() {
  // const { authorizedAccount } = useAccount();
  const { fullName } = useParams();
  const CapitalizeFullName = capitalizeFullName(fullName);

  return (
    <div className="w-full">
      <OutletHeader title="Profil" returnButton={true} />
      <div className="flex flex-col items-center justify-center gap-y-4 min-h-[250px]">
        <div className="w-28 h-28 group relative rounded-full bg-gray-600  border-2 border-[color:var(--color-secondary)] flex items-center justify-center">
          <img
            src="https://placehold.co/150x150"
            alt="Profile avatar"
            className="w-full h-full rounded-full"
          />
          <button
            onClick={() => {
              setModal("profileEdit");
            }}
            className={classNames(
              "w-9 h-9 rounded-full flex items-center justify-center bg-[color:var(--background-secondary)] border border-[color:var(--color-secondary)] opacity-0 absolute -top-1 -right-1 group-hover:opacity-100 duration-500 transition-all ease-in-out"
            )}
          >
            <PenIcon className={"text-[color:var(--color-secondary)]"} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-start gap-y-1">
          <h1 className="text-2xl font-bold">{CapitalizeFullName ?? "name"}</h1>
          <p className="text-gray-400">@{CapitalizeFullName}</p>
        </div>
      </div>
      <div className="">
        <Tab activeTab="posts">
          <StickyHeader>
            <Tab.Items>
              <Tab.Item id="posts">Gönderiler</Tab.Item>
              <Tab.Item id="answers">Cevaplar</Tab.Item>
              <Tab.Item id="likes">Beğeniler</Tab.Item>
            </Tab.Items>
          </StickyHeader>

          <Tab.Content id="posts">
            <ProfilePostsTab />
          </Tab.Content>
          <Tab.Content id="answers">
            <ProfileAnswersTab />
          </Tab.Content>
          <Tab.Content id="likes">
            <ProfileLikesTab />
          </Tab.Content>
        </Tab>
      </div>
    </div>
  );
}

export default ProfilePage;
