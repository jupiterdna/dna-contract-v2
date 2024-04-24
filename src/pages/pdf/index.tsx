
import { Document, PDFDownloadLink, PDFViewer, Page, StyleSheet, Text, View, pdf } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";
import {template} from "../../component/TestRender";
import { GetServerSideProps } from "next";
import fs, {promises as fsP} from "fs";

export const getServerSideProps = (async ({req, res}) => {

    const Mydoc = (
        <Document>
            <Page>
                <View>
                    <Text>Section #1</Text>
                </View>
            </Page>
        </Document>
    )

    const blob = await pdf(template).toBlob();
    const buffer = await blob.arrayBuffer();

    const base64 = await Buffer.from(buffer).toString('base64');
    console.log("base64", base64)

    // fs.writeFileSync('public/test.pdf', base64, );
    fsP.writeFile('public/test.pdf', base64, 'base64').then((res) => {
        console.log("ressss", res)
    })

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ data: 'sdfsdasdsf'}));
    

    return { props: {  } }
  

}) as GetServerSideProps<{}>

export default function index() {  
  return <></>
}
