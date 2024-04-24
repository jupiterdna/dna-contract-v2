'use client';

import React from 'react'
import { Text, View, StyleSheet } from "@react-pdf/renderer";

type TemplateSectionProps = {
    title: string
    children?: any
    style?: any
}


const TemplateSection = ({title, children, style}:TemplateSectionProps)  => {

  return (
      <View style={style}>
        <View style={styles.headingContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.content}>
            {children}
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
  mainContainer:{
    width: '100%',
  },
  content:{
    paddingVertical: 10,
    lineHeight: 1.3
  },
  container:{
      border: '1px solid black', 
      padding: 5,
      width: '100%',
      position:'relative',
      paddingBottom: 10
  },
  headingContainer:{
    backgroundColor: 'black',
    color: 'white',
   padding: 5,
   paddingLeft: 5,
    textTransform: 'uppercase'
  },
headingText:{
  fontSize: 10,
  fontWeight: 'bold'
},
text:{
  fontSize: 8
},
heading: {fontWeight: 300, fontSize: 12}
})


export default TemplateSection