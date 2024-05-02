import React from 'react'

export default function Page({params} : {params: {id: string}}) {

    console.log("first, ", params)
  return (
    <div>xxx {params.id} xx</div>
  )
}
