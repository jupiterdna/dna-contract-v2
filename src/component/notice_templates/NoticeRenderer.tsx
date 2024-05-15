import NoticeArizona from "./NoticeArizona";
import NoticeColorado from "./NoticeColorado";
import NoticeCalifornia from "./NoticeCalifornia";
import NoticeConnecticut from "./NoticeConnecticut";
import { stateType } from "../types";
import { connect } from "http2";

type ComponentRendererProps = {
  state?: stateType
  signature_image1?: string;
  signature_image2?: string;
  isSof?: boolean;
  cdw_daily_rate?: string | number
  cdw_sub_total?: string | number
};

const ComponentRenderer = ({
  state = "arizona",
  signature_image1,
  signature_image2,
  isSof,
  cdw_daily_rate,
  cdw_sub_total,
}: ComponentRendererProps) => {
  const Template = {
    arizona: NoticeArizona,
    colorado: NoticeColorado,
    california: NoticeCalifornia,
    connecticut: NoticeConnecticut
  }[state];
  return (
    <Template
      isSof={isSof}
      signature_image1={signature_image1}
      signature_image2={signature_image2}
      cdw_daily_rate={cdw_daily_rate}
      cdw_sub_total={cdw_sub_total}
    />
  );
};

export default ComponentRenderer;
