

export const metadata = {
  title: "Go Rental PDF Generator",
  description: "This is a PDF generator for Go Rentals",
};
import { Roboto } from "next/font/google";
import Header from "@/component/web/Header";
import "../../globals.css";
import SideBar from "@/component/web/Sidebar";
const roboto = Roboto({ subsets:['latin'], weight: ['400', '700']});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
      <link
        rel="stylesheet"
        type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body className={roboto.className}>
      <div className="h-screen flex flex-col w-full">
        <Header />
          <div className="justify-center flex h-full w-full">
          <div className="flex flex-row max-w-[1600px] h-full w-full ">
          <SideBar />
          <main className="p-12 px-4 sm:px-12 text-gray-600 w-full">{children}</main>
          </div>
          </div>
      </div>
      </body>
    </html>
  )


}
