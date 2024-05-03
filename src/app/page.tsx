import SideBar from "@/component/web/Sidebar";
import Link from "next/link";

export default function Page() {
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
          <main className="p-12 text-gray-600 w-full">
            <div className="w-full">
              <h2 className="text-3xl mb-4 pb-3 border-b border-gray-200">
                Introduction
              </h2>
              <p className="mb-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                fugiat mollitia soluta ex porro quasi dolorum? Cum soluta
                excepturi nisi, aliquid fuga, eaque nesciunt, minus odit sequi
                in deleniti tempore?
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
