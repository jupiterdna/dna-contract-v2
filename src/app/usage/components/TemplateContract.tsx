
'use client'

import React from 'react'
import { CopyBlock, atomOneDark } from 'react-code-blocks'
import { contractData, usage } from './usage'
import { useSearchParams } from 'next/navigation';

export default function TemplateContract() {

  const searchParams = useSearchParams();
  const sidebarOpen = searchParams?.get("sidebar");

  return (
    <div className={`${sidebarOpen ? 'hidden lg:block' : ''}`}>
        <p className="text-lg mb-8">
        Here`s how to generate a Contract PDF in React. You can use another promise-based
        HTTP client to send data to the server, and in this example, we`ll use
        the Axios library.
      </p>
      <p className="text-lg mb-4 font-bold">Example Code</p>
      <div>
        <CopyBlock
          text={usage}
          language={"jsx"}
          showLineNumbers={true}
          theme={atomOneDark}
          codeBlock
        />
      </div>

      <div className="mt-12">
        <p className="text-lg mb-4">Sample Data to generate a Contract PDF. Ensure you specify the <span className='font-bold'>generate_from</span> property (either `web` or `mobile`) to prevent any issues with signature images.</p>
        <div className="h-[600px] w-full">
          <CopyBlock
            text={contractData}
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
