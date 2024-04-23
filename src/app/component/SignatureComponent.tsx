import { Text, View, StyleSheet, Font, Svg, Rect } from "@react-pdf/renderer";
import React from 'react'

type SignatureComponentProps = {
    label?: string
}

const SignatureComponent = ({label ="Renter's Signature"}: SignatureComponentProps) => {
  return (
    <Svg viewBox="0 0 150 37" width={150}>
        <Rect
          x={0}
          y={0}
          width={150}
          height={20}
          fill="#d0edfb" />
        <Text x={0} y={33} style={{fontFamily: 'Karla', fontSize: 8.5}}>{label}</Text>
    </Svg>
  )
}

const style = StyleSheet.create({
    container: {
      height: 20,
      backgroundColor: '#d0edfb',
      cursor: 'pointer',
      maxWidth: 180,
      flexGrow: 0,
    },

  });
  

export default SignatureComponent