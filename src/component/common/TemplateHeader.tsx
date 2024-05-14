
/* eslint-disable jsx-a11y/alt-text */
import { Image, StyleSheet, Text, View } from '@dna/react-pdf'
import React from 'react'
import { docStyles } from '../../styles'
import { public_path } from '@/utils';

type TemplateHeaderProps = {
    title?: string
    subTitle?: string
}

const TemplateHeader = ({title, subTitle}: TemplateHeaderProps) => {

  const path = public_path

  return (
    <View
          style={style.container}
        >
          <View>
            <Image src={path+'/images/Glogo.png'} style={docStyles.img} cache={false} />
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