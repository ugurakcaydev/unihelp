import { useAccount } from "../../store/auth/hooks";

function ProfilePage() {
  const user = useAccount();
  console.log( user );
  return <div>ProfilePage</div>;
}

export default ProfilePage;
