import Topic from "./topic";

import { topics } from "../../utils/const";
import SidebarSection from "../sidebarSection";

export default function Topics() {
  return (
    <SidebarSection title="İlginizi çekebilecek başlıklar" more="/trends">
      {topics.map((topic, index) => (
        <Topic item={topic} key={index} />
      ))}
    </SidebarSection>
  );
}
