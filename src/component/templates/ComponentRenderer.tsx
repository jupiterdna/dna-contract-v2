import { Template as Arizona } from "./TempArizona";
import { Template as Colorado } from "./TempColorado";
import { Template as  California} from "./TempCalifornia";

type ComponentRendererProps = {
  state: "colorado" | "arizona" | 'california';
  title?: string
};

const ComponentRenderer = ({ state, title }: ComponentRendererProps) => {
  const Template = {
    arizona: Arizona,
    colorado: Colorado,
    california: California,
  }[state];
  return <Template title={title} />;
};

export default ComponentRenderer;
