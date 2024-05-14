import { Text, View, StyleSheet, Font, Svg, Rect } from "@dna/react-pdf";
import React from 'react'

type DateComponentProps = {
    label?: string
    value?: string
}

const DateComponent = ({label ="Renter's Signature", value='12-12-2024'}: DateComponentProps) => {
  return (
    <Svg viewBox="0 0 150 37" width={150}>
        <Rect
          x={0}
          y={0}
          width={150}
          height={20}
          fill="#d0edfb" />
        <Text x={53} y={13} style={{fontFamily: 'Karla', fontSize: 8.5}}>{value}</Text>
        <Text x={0} y={33} style={{fontFamily: 'Karla', fontSize: 8.5}}>{label}</Text>
    </Svg>
  )
}


export default DateComponent