
import { Document, PDFDownloadLink, Page, StyleSheet, Text, View, pdf } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";
import Template, {template} from "../../component/GenerateReceipt";
import { GetServerSideProps } from "next";
import fs, {promises as fsP} from "fs";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from 'uuid'
import { headers } from 'next/headers';
import { URL } from "url";

const PDFViewer = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
    {
      ssr: false,
      loading: () => <p>Loading...</p>,
    },
  );
  


// export const getServerSideProps = (async ({req, res, }) => {

//   const url = new URL(`${req.headers.host}/${req.url}`)

//   const xdata = url.searchParams.get('data')

//   res.setHeader('Content-Type', 'application/json');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//    if(req.method !== 'POST') { 
//         res.statusCode = 405;
//         res.end(JSON.stringify({ data: {}, error: 'Method Not Allowed'}))
//         return { props: {  } }
//    }

//     const host = process.env.HOST || req.headers.host;
//     const port = process.env.PORT || 3000;

//     try {
//         const blob = await pdf(template()).toBlob();
//         const buffer = await blob.arrayBuffer();
//         const base64 = await Buffer.from(buffer).toString('base64');
//         // fs.writeFileSync('public/test.pdf', base64, );
//         const fileName = `${uuidv4()}.pdf`;
//         const filePath = `public/pdf/${fileName}`;
//         const asPdf =  await fsP.writeFile(filePath, base64, 'base64')

//         res.statusCode = 200;
//         res.end(JSON.stringify({ data: {url: `http://${host}:${port}/pdf/${fileName}`}, error: data}));


//     } catch (error: any) {
//         res.statusCode = 500;
//         res.end(JSON.stringify({ data: {}, error: error.message}))
//     }

//     return { props: {  } }
  
// }) as GetServerSideProps<{}>

export default function index() {  

    // return <></>

  return <div style={{width:'100%', height: '100vh'}}>
    <PDFViewer style={{width: '100%', height: '100%'}}>
      <Template />
    </PDFViewer>
  </div>
}
