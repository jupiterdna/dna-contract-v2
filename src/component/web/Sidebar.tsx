"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="w-[300px]  p-4 text-gray-600 h-full border-r border-gray-100">
      <ul className="flex flex-col gap-y-1 text-lg">
        <li className={`${pathname === "/" ? "font-bold" : ""} `}>
          <Link href="/">Introduction</Link>
        </li>
        <li>
          <span className={`${pathname?.includes('usage') ? "font-bold" : ""} `}>Usage</span>
          <ul className="pl-4 text-md flex flex-col mt-2">
            <li className={`${pathname?.includes('/usage/contract') ? "font-bold" : ""} `}><Link href="/usage/contract">Contract</Link></li>
            <li className={`${pathname?.includes('/usage/receipt') ? "font-bold" : ""} `}><Link href="/usage/receipt">Receipt</Link></li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}
