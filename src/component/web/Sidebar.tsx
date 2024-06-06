"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const sidebarOpen = searchParams?.get("sidebar");

  const cls = sidebarOpen ? "lg:w-[300px] xs:block" : "lg:w-[300px] lg:block hidden";

  return (
    <aside className={`${cls}  p-4 text-gray-600 h-full absolute w-full bg-white z-[100] lg:relative border-r border-gray-100"`}>
      <ul className="flex flex-col gap-y-1 text-lg">
        <li className={`${pathname === "/" ? "font-bold" : ""} `}>
          <Link href="/">Introduction</Link>
        </li>
        <li>
          <span className={`${pathname?.includes('usage') ? "font-bold" : ""} `}>Usage</span>
          <ul className="pl-4 text-md flex flex-col mt-2">
            <li className={`${pathname?.includes('/usage/contract') ? "font-bold" : ""} `}><Link href="/usage/contract">Contract</Link></li>
            <li className={`${pathname?.includes('/usage/receipt') ? "font-bold" : ""} `}><Link href="/usage/receipt">Receipt</Link></li>
            <li className={`${pathname?.includes('/usage/estimates') ? "font-bold" : ""} `}><Link href="/usage/estimates">Estimates</Link></li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}
