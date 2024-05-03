import { Roboto } from "next/font/google";
export const metadata = {
  title: "Go Rental PDF Generator",
  description: "This is a PDF generator for Go Rentals",
};
import "../globals.css";
import SideBar from "@/component/web/Sidebar";
const roboto = Roboto({ subsets:['latin'], weight: ['400', '700']});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
