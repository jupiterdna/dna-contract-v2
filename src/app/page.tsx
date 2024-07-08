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
                    Introduction
                  </h2>
                  <p className="my-4 lg:my-8 text-md lg:text-lg">
                    Welcome to the documentation for DNA PDF Generator. This web
                    application allows you to convert data into a PDF.
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
//Development Endpoint (POST)
https://form-contract.dnadev.net/generate-pdf

//QA Endpoint (POST)
https://form-contract.qa.mygo.gorentals.com/generate/pdf

//UAT Endpoint (POST)
https://form-contract.uat.mygo.gorentals.com/generate/pdf
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
                      Development instance requires extra configuration to
                      access the endpoint. Please ask the devOps team for
                      setting up the VPN connection.
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
