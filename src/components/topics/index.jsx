import Topic from "./topic";
import SidebarSection from "../SidebarSection";
import { topics } from "../../utils/const";

export default function Topics() {
  return (
    <SidebarSection title="Neler oluyor?" more="/trends">
      {topics.map((topic, index) => (
        <Topic item={topic} key={index} />
      ))}
    </SidebarSection>
  );
}
