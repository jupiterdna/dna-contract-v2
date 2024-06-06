
'use client'

import React from 'react'
import { CopyBlock, atomOneDark } from 'react-code-blocks'
import {  estimatesData, usageEstimates } from './usage'
import { useSearchParams } from 'next/navigation';

export default function Template() {

  const searchParams = useSearchParams();
  const sidebarOpen = searchParams?.get("sidebar");

  return (
    <div className={`${sidebarOpen ? 'hidden lg:block' : ''}`}>
        <p className="text-lg mb-8">
        Here`s the example how to generate a Rental Estimates PDF using React. You can use another promise-based
        HTTP client to send data to the server, and in this example, we`ll use
        the Axios library.
      </p>
      <p className="text-lg mb-4 font-bold">Example Code</p>
      <div>
        <CopyBlock
          text={usageEstimates}
          language={"typescript"}
          showLineNumbers={true}
          theme={atomOneDark}
          codeBlock
        />
      </div>

      <div className="mt-12">
        <p className="text-lg mb-4">Sample Data to generate Estimates PDF. Data format are same with receipt, you just have specify the <span className='font-bold'>document_type</span> and some title property.</p>
        <div className="h-[600px]">
          <CopyBlock
            text={estimatesData}
            language={"typescript"}
            showLineNumbers={true}
            theme={atomOneDark}
            wrapLongLines={false}
            codeBlock
          />
        </div>
      </div>
    </div>
  )
}
