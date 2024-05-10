'use client'

import { Template } from "@/component/templates/TempColorado";
import { docStyles } from "@/styles";
import { Document, PDFViewer, Page, StyleSheet } from "@react-pdf/renderer";

export default function PdfRender() {

  return null

  return (
    <div style={{ width: "100%" }}>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document style={{ display: "flex" }}>
          <Page
            size="LETTER"
            orientation="portrait"
            style={docStyles.page}
          >
            <Template />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 8,
    fontFamily: "Karla",
  },
  textHeading: {
    fontSize: 9,
    fontFamily: "Karla",
    fontWeight: "bold",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
