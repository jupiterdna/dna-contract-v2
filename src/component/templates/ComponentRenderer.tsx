import { Template as Arizona } from "./TempArizona";
import { Template as Colorado } from "./TempColorado";
import { Template as  California} from "./TempCalifornia";
import { Template as  Connectictut} from "./TempConnecticut";
import { stateType } from "../types";

type ComponentRendererProps = {
  state: stateType
  title?: string
};

const ComponentRenderer = ({ state, title }: ComponentRendererProps) => {
  const Template = {
    arizona: Arizona,
    colorado: Colorado,
    california: California,
    connecticut: Connectictut,
  }[state];
  return <Template title={title} />;
};

export default ComponentRenderer;
