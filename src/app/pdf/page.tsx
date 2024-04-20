'use client'

import ContractTemplate from "../component/Template";
import { Document, PDFDownloadLink, PDFViewer, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";
import TestRender from "../component/TestRender";


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
      <PDFViewer style={{
        width: "100%",
        height: "100vh",
      }}>
        <TestRender />
      </PDFViewer>
    </div>
        
  );
}
