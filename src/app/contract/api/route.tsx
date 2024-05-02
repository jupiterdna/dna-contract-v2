import { type NextRequest, NextResponse } from 'next/server'
import  {temp, template, testt} from "../../../component/GenerateContract2";
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
    const reqBody = await request.text();

    if(!reqBody) {
        return Response.json({ error: 'No data found' })
    }

    const data = JSON.parse(reqBody);
    const blob = await pdf(temp(data)).toBlob();
    const buffer = await blob.arrayBuffer();
    const base64 = await Buffer.from(buffer).toString('base64');
    // fs.writeFileSync('public/test.pdf', base64, );
    const fileName = `${uuidv4()}.pdf`;
    const filePath = `public/pdf/${fileName}`;
    const asPdf =  await fsP.writeFile(filePath, base64, 'base64')

    setTimeout(() => {
      deleteFile(filePath)
    }, 1000 * 60)
    
    const url = `http://localhost:3000/pdf/${fileName}`;
    
    return Response.json({ data: url })
}

const deleteFile =  async (filePath: string) => {
  await fsP.unlink(filePath)
}