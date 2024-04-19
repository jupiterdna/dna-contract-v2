'use client'
import Image from "next/image";
import ContractTemplate from "./component/Template";

export default function Home() {
  return (
    <main className="flex bg-gray-700 min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white p-8">
      <ContractTemplate template="2" />
      </div>
    </main>
  );
}
