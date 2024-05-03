'use client'
import Image from "next/image";
import { Document, PDFDownloadLink, PDFViewer, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function Design() {

  
  return (
    <div>
        <div className="bg-gray-200 p-8 w-full">
        {/* <ContractTemplate template="2"/> */}
      </div>
    </div>
  );
}
