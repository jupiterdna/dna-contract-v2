import { Template as Arizona } from "./TempArizona";
import { Template as Colorado } from "./TempColorado";

type ComponentRendererProps = {
  state: "colorado" | "arizona";
  title?: string
};

const ComponentRenderer = ({ state, title }: ComponentRendererProps) => {
  const Template = {
    arizona: Arizona,
    colorado: Colorado,
  }[state];
  return <Template title={title} />;
};

export default ComponentRenderer;
