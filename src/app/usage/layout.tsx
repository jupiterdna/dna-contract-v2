

export const metadata = {
  title: "Go Rental PDF Generator",
  description: "This is a PDF generator for Go Rentals",
};
import "../../globals.css";
import SideBar from "@/component/web/Sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
          <div className="bg-blue-400 p-4 flex justify-center">
            <div className="max-w-[1600px] w-full">
              <h1 className="text-xl text-white">PDF Generator</h1>
            </div>
          </div>
           <div className="justify-center flex h-full">
           <div className="flex flex-row max-w-[1600px] h-full w-full ">
            <SideBar />
            <main className="p-12 text-gray-600 w-full">{children}</main>
            </div>
           </div>
        </div>
  );
}
