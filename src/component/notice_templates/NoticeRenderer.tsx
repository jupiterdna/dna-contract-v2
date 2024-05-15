import NoticeArizona from "./NoticeArizona";
import NoticeColorado from "./NoticeColorado";
import NoticeCalifornia from "./NoticeCalifornia";

type ComponentRendererProps = {
  state?: "colorado" | "arizona" | "california";
  signature_image1?: string;
  signature_image2?: string;
  isSof?: boolean;
};

const ComponentRenderer = ({
  state = "arizona",
  signature_image1,
  signature_image2,
  isSof,
}: ComponentRendererProps) => {
  const Template = {
    arizona: NoticeArizona,
    colorado: NoticeColorado,
    california: NoticeCalifornia,
  }[state];
  return (
    <Template
      isSof={isSof}
      signature_image1={signature_image1}
      signature_image2={signature_image2}
    />
  );
};

export default ComponentRenderer;
