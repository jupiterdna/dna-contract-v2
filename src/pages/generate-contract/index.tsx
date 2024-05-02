
import { Document, PDFDownloadLink, Page, StyleSheet, Text, View, pdf } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";
import Template, {template} from "../../component/GenerateContract";
import { GetServerSideProps } from "next";
import fs, {promises as fsP} from "fs";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from 'uuid'
import { headers } from 'next/headers';
import { URL } from "url";
import bodyParser from "body-parser";
import { promisify } from "util";


const getBody = promisify(bodyParser.urlencoded());


const PDFViewer = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
    {
      ssr: false,
      loading: () => <p>Loading...</p>,
    },
  );


export const getServerSideProps = (async ({req, res, }) => {

  // const xdata = url.searchParams.get('data')

  await getBody(req, res);
  // const parseData = JSON.parse(req?.body)

  // console.log("parseData", JSON.parse(req.body.data))


  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.end(JSON.stringify({ data:'eee'}))

  return { props: {  } }

   if(req.method !== 'POST') { 
        res.statusCode = 405;
        res.end(JSON.stringify({ data: {}, error: 'Method Not Allowed'}))
        return { props: {  } }
   }

    const host = process.env.HOST || req.headers.host;
    const port = process.env.PORT || 3000;

    try {
        const blob = await pdf(template(null, false)).toBlob();
        const buffer = await blob.arrayBuffer();
        const base64 = await Buffer.from(buffer).toString('base64');
        // fs.writeFileSync('public/test.pdf', base64, );
        const fileName = `${uuidv4()}.pdf`;
        const filePath = `public/pdf/${fileName}`;
        const asPdf =  await fsP.writeFile(filePath, base64, 'base64')

        res.statusCode = 200;
        res.end(JSON.stringify({ data: {url: `http://${host}:${port}/pdf/${fileName}`}, error: data}));


    } catch (error: any) {
        res.statusCode = 500;
        res.end(JSON.stringify({ data: {}, error: error.message}))
    }

    return { props: {  } }
  
}) as GetServerSideProps<{}>

export default function index() {  

   

  return <div style={{width:'100%', height: '100vh'}}>
    <PDFViewer style={{width: '100%', height: '100%'}}>
      <Template />
    </PDFViewer>
  </div>
}