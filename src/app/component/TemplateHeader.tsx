import { Image, StyleSheet, Text, View } from '@react-pdf/renderer'
import React from 'react'
import { docStyles } from '../styles'

import Glogo from "../assets/Glogo.png";

type TemplateHeaderProps = {
    title?: string
    subTitle?: string
}

const TemplateHeader = ({title, subTitle}: TemplateHeaderProps) => {
  return (
    <View
          style={style.container}
        >
          <View>
            <Image src={Glogo.src} style={docStyles.img} cache={false} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={docStyles.headerText}>{title}</Text>
            <Text style={docStyles.headerSubText}>{subTitle}</Text>
          </View>
        </View>
  )
}

const style = StyleSheet.create({
    container:{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }
})

export default TemplateHeader