import type { NextApiRequest, NextApiResponse } from 'next'
import path from "path";
import { writeFile } from "fs/promises"; 
import ReactPDF, { Document, Page, Text, View, renderToFile } from '@react-pdf/renderer';
import TestRender from '../../component/GeneratePdf';

type ResponseData = {
  message: string
}
 
// Important for NextJS!
export const config = {
  api: {
    bodyParser: false,
  },
};

const MyDoc = (
  <Document>
    <Page>
      <View>
          <Text>sdfsdf</Text>
      </View>
    </Page>
  </Document>
);


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  

  
  saveFile()

  res.status(200).json({ message: 'Hello from Next.js!', data: 'sdfsdasdsf'})
}

const  saveFile = async () => {

  const MyDocument = (
    <Document>
      <Page>
        <Text>Section #1</Text>
      </Page>
    </Document>
  )



}