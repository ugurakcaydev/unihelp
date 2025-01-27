import Tab from "../../components/tab";
import StickyHeader from "../../components/sticky-header";
import ForYou from "./for-you";
import Comment from "./comment";
import { useState } from "react";

function HomePage() {
  const [commentAdd, setCommentAdd] = useState();
  return (
    <Tab activeTab="for-you">
      <StickyHeader>
        <Tab.Items>
          <Tab.Item id="for-you">Anasayfa</Tab.Item>
          {/* <Tab.Item id="following">Takip edilenler</Tab.Item> */}
        </Tab.Items>
      </StickyHeader>

      <Tab.Content id="for-you">
        <Comment commentAdd={(comment) => setCommentAdd(comment)} />
        {/* post gönderme kısmının komponenti */}
        <ForYou commentAdd={commentAdd} />
      </Tab.Content>
      {/* <Tab.Content id="following">
        <Comment /> 
      </Tab.Content> */}
    </Tab>
  );
}

export default HomePage;
