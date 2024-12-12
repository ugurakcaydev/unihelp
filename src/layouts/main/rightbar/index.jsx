import Footer from "../../../components/Footer";
import Topics from "../../../components/topics/index";
import Premium from "./Premium";
import Search from "./Search";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5 mt-2">
      {/*    
      <WhoFollow />
      */}
      <Search />
      <Premium />
      <Topics />
      <Footer />
    </aside>
  );
}
