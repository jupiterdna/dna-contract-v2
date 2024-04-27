import { type NextRequest, NextResponse } from 'next/server'
import  {template, testt} from "../../../component/GenerateContract2";
import { Document, PDFDownloadLink, Page, StyleSheet, Text, View, pdf } from "@react-pdf/renderer";
import { v4 as uuidv4 } from 'uuid'
import fs, {promises as fsP} from "fs";

export async function GET(request: Request) {
    const data = {
        name: 'John Doe',
        age: '21'
    }
    
    return Response.json({ data })
}

export async function POST(request: Request) {

    const testTemplate  = (

        <Document style={{ display: "flex" }}>
          <Page>
              <View>
                <Text>sdfsdfsdf</Text>
              </View>
          </Page>
        </Document>
        
      )

    const blob = await pdf(testt).toBlob();
    const buffer = await blob.arrayBuffer();
    const base64 = await Buffer.from(buffer).toString('base64');
    // fs.writeFileSync('public/test.pdf', base64, );
    const fileName = `${uuidv4()}.pdf`;
    const filePath = `public/pdf/${fileName}`;
    const asPdf =  await fsP.writeFile(filePath, base64, 'base64')
    
    const url = `http://localhost:3000/pdf/${fileName}`;
    
    return Response.json({ data: url })
}