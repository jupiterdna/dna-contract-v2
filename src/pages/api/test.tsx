import type { NextApiRequest, NextApiResponse } from 'next'
import path from "path";
import { writeFile } from "fs/promises"; 
import ReactPDF, { Document, Page, Text, View, renderToFile } from '@react-pdf/renderer';
import TestRender from '../../component/GenerateContract';

type ResponseData = {
  message: string
}
 
// Important for NextJS!
export const config = {
  api: {
    bodyParser: false,
  },
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!', data: 'sdfsdasdsf'})
}
