import { navigate } from "./actions";
import TemplateContract from "../components/TemplateContract";
import Template from "../components/Template";
import TemplateEstimates from "../components/TemplateEstimates";
import { Metadata } from "next";

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
 }

export async function generateMetadata(
  { params }: any,
): Promise<Metadata> {
  const id = capitalize(params.type);

  return {
  title: 'DNA PDF Generator | '+ id,
  }
}
export default function Page({
  params,
}: {
  params: { type: "contract" | "receipt" | "estimates"};
}) {
  if (params.type !== "contract" && params.type !== "receipt" && params.type !== "estimates") {
    navigate();
    return null;
  }

  const renderTemplate = () => {
    if (params.type === "contract") {
      return <TemplateContract />;
    }
    else if (params.type === "receipt") {
      return <Template />;
    } 
    else
    {
      return <TemplateEstimates />;
    }
  }

  return (
    <div className="w-full">
      <h2 className="lg:text-3xl text-2xl mb-8 pb-3 border-b border-gray-200">Usage for generating {capitalize(params.type)} PDF file</h2>
      {renderTemplate()}
    </div>
  );
}
