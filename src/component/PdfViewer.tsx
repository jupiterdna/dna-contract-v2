import React from "react";
import {
  PDFViewer,
  StyleSheet,
  renderToFile,
  pdf,
  Document,
  Page,
  View,
  Text,
  BlobProvider,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Repo = {
    name: string
    stargazers_count: number
  }

export const getServerSideProps = (async () => {
    // Fetch data from external API
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo: Repo = await res.json()
    

    // Pass data to the page via props
    return { props: { repo } }
  }) satisfies GetServerSideProps<{ repo: Repo }>
// const MyDoc = (
//     <Document>
//       <Page>
//         <View>
//             <Text>sdfsdf</Text>
//         </View>
//       </Page>
//     </Document>
//   );
  


  export default function PdfViewer({
    repo,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    console.log("repo", repo)
    return (
      <main>
        <p>sdf</p>
      </main>
    )
  } 

// function PdfViewer({repo}) {

    
//   return <></>

//   //   return (
//   //     <div style={{width: '100%'}}>
//   //         <PDFViewer style={{width: '100%', height: '100vh'}}>
//   //             <TestRender />
//   //         </PDFViewer>
//   //     </div>

//   //   )
//   // }
// }



// export default PdfViewer;
