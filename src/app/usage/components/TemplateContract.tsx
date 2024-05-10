
'use client'

import React from 'react'
import { CopyBlock, atomOneDark } from 'react-code-blocks'
import { contractData, usage } from './usage'

export default function TemplateContract() {
  return (
    <div>
        <p className="text-lg mb-8">
        Here`s how to generate a contract PDF. You can use another promise-based
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
        />
      </div>

      <div className="mt-12">
        <p className="text-lg mb-4">Sample Data to generate Contract PDF</p>
        <div className="h-[600px]">
          <CopyBlock
            text={contractData}
            language={"typescript"}
            showLineNumbers={true}
            theme={atomOneDark}
            wrapLongLines={true}
          />
        </div>
      </div>
    </div>
  )
}
