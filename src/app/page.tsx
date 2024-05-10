"use client";

import { AppProvider } from "@/component/context/context";
import Header from "@/component/web/Header";
import SideBar from "@/component/web/Sidebar";
import Link from "next/link";
import { Suspense } from "react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppProvider>
        <div className="h-screen flex flex-col">
          <Header />
          <div className="justify-center flex h-full">
            <div className="flex flex-row max-w-[1600px] h-full w-full ">
              <SideBar />
              <main className="p-4 lg:p-12 text-gray-600 w-full">
                <div className="w-full">
                  <h2 className="text-xl lg:text-4xl mb-4 pb-3 border-b border-gray-200 flex items-center gap-x-2">
                    Introduction{" "}
                    <span className="italic text-red-400 text-xl  lg:text-2xl">
                      (experimental only!)
                    </span>
                  </h2>
                  <p className="my-4 lg:my-8 text-md lg:text-lg">
                    Welcome to the documentation for Contract and Receipt PDF
                    Generator. This web application allows you to convert data
                    into a PDF{" "}
                    <span className="italic">(base64 format in Vercel)</span>.
                  </p>

                  <h2 className="mb-4 lg:text-2xl text-xl">
                    API Documentation
                  </h2>
                  <h3 className="mb-4 text-xl">Endpoint</h3>
                  <p className="lg:text-lg text-md mb-4">
                    The app accepts POST requests at the following endpoint:
                  </p>

                  <CopyBlock
                    text={`
POST https://pdf-generator-two-iota.vercel.app/generate-pdf
                `}
                    language={"jsx"}
                    showLineNumbers={true}
                    codeBlock
                    theme={atomOneDark}
                  />
                  <h2 className="mb-4 lg:text-2xl text-lg lg:mt-12 mt-6">
                    Note
                  </h2>
                  <div className="bg-red-400 p-2 px-3 rounded-lg">
                    <p className="lg:text-lg text-md  text-white italic">
                      The app is currently hosted on Vercel in a serverless
                      environment for experimental purposes only. As a result,
                      the HTTP response is limited to a base64 encoded PDF file
                      since Vercel does not support file writing and only
                      permits read-only operations.
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </AppProvider>
    </Suspense>
  );
}
