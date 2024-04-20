'use client';

import React from 'react'
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { docStyles } from '../styles';


type ContractHeaderBoxProps = {
    first_heading: {
        label: string,
        value?: string
    }
    second_heading: {
        label: string,
        value?: string
    }
    contact?: string
}

const ContractHeaderBox = ({first_heading, second_heading, contact }:ContractHeaderBoxProps)  => {


  return (
    <View style={{...docStyles.fontKarla, ...style.container}}>
        <View style={{
            position: 'absolute',
            width: 30,
            height: 30,
            backgroundColor: 'black',
            color: 'white',
            right: 0,
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent :'center',
            textAlign: 'center',
      
        }}>
            <Text style={style.text}>Aug</Text>
            <Text style={{...style.text, ...style.heading, ...docStyles.fontKarlaBold}}>30</Text>
        </View>
        <View>
            <Text style={style.headingText}>{first_heading.label}</Text>
            <Text style={style.text}>{first_heading.value}</Text>
        </View>
        <View style={{marginTop: 8}}>
            <Text style={style.headingText}>{second_heading.label}</Text>
            <Text style={style.text}>{second_heading.value}</Text>
            <Text style={style.text}>{contact}</Text>
        </View>
    </View>
  )
}


const style = StyleSheet.create({
    container:{
        border: '1px solid black', 
        padding: 5,
        width: '100%',
        position:'relative',
        paddingBottom: 10
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

export default ContractHeaderBox