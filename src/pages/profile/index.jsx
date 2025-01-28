import OutletHeader from "../../components/OutletHeader";
import Tab from "../../components/tab";
import StickyHeader from "../../components/sticky-header";
import classNames from "classnames";
import { PenIcon } from "../../constant/icons";
import ProfilePostsTab from "./posts";
import ProfileAnswersTab from "./answers";
import ProfileLikesTab from "./likes";
import { setModal } from "../../store/modal/actions";
import { useParams } from "react-router-dom";
import { capitalizeFullName } from "../../utils/format";
import { apiClient } from "../../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader";

function ProfilePage() {
  const { fullName } = useParams();
  const CapitalizeFullName = capitalizeFullName(fullName);
  
  const {
    data: userId,
    isError,
    error,
  } = useQuery(
    ["getIdByUsername", { username: fullName }],
    () => apiClient.getIdByUsername(fullName),
    {
      retry: 2,
      retryDelay: (attempt) => Math.min(800 * 2 ** attempt, 1800),
    }
  );

  const { data: userData, isLoading: isUserDataLoading } = useQuery(
    ["getUserById", { userId: userId }],
    () => apiClient.getUserById(userId),
    {
      enabled: !!userId,
      retry: 2,
      select: (data) => data.authorizedAccount,
      retryDelay: (attempt) => Math.min(800 * 2 ** attempt, 1800),
    }
  );

  if (isError) {
    return (
      <div className="w-full flex justify-center items-center min-h-screen">
        <span className="text-red-500 font-semibold">
          Kullanıcı bilgisi alınamadı: {error.message}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <OutletHeader title="Profil" returnButton={true} />
      <div className="flex flex-col items-center justify-center gap-y-4 min-h-[240px]">
        <div className="w-28 h-28 group relative rounded-full bg-gray-600 border-2 border-[color:var(--color-secondary)] flex items-center justify-center">
          {isUserDataLoading ? (
            <Loader />
          ) : (
            <>
              <img
                src={userData?.avatar || "https://placehold.co/150x150"}
                alt="Profile avatar"
                className="w-full h-full rounded-full object-cover"
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
            </>
          )}
        </div>
        <div className="flex flex-col items-center justify-start gap-y-1">
          <h1 className="text-2xl font-bold">{CapitalizeFullName ?? "name"}</h1>
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

          {/* `userId` prop olarak her üç bileşene gönderiliyor */}
          <Tab.Content id="posts">
            <ProfilePostsTab userId={userId} />
          </Tab.Content>
          <Tab.Content id="answers">
            <ProfileAnswersTab userId={userId} />
          </Tab.Content>
          <Tab.Content id="likes">
            <ProfileLikesTab userId={userId} />
          </Tab.Content>
        </Tab>
      </div>
    </div>
  );
}

export default ProfilePage;
