
import { Document, PDFDownloadLink, PDFViewer, Page, StyleSheet, Text, View, pdf } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";
import {template} from "../../component/TestRender";
import { GetServerSideProps } from "next";


export const getServerSideProps = (async ({req, res}) => {

    

    const blob = await pdf(template).toBlob();

    console.log("blob", blob)
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ data: 'sdfsdasdsf'}));
    

    return { props: {  } }
  

}) as GetServerSideProps<{}>

export default function index() {  
  return <></>
}
