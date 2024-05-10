"use client";

import React, { Suspense } from "react";
import { SidebarContext } from "../context/context";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const searchParams = useSearchParams();
  const sidebarOpen = searchParams?.get("sidebar");
  const pathname = usePathname();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-blue-400 p-4 flex justify-center">
        <div className="max-w-[1600px] w-full flex-row flex items-center justify-between">
          <h1 className="text-xl text-white">DNA PDF Generator</h1>
          <Link
            className="lg:hidden text-white text-lg"
            href={sidebarOpen ? pathname || "" : "?sidebar=1"}
          >
            <i className={`fa  ${sidebarOpen ? "fa-times" : "fa-bars"} `}></i>
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
