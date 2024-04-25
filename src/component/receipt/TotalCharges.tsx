"use client";

import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { docStyles } from "../../styles";
import SignatureComponent from "../SignatureComponent";

type TotalChargesProps = {total?: string};

const TotalCharges = ({total="0"}: TotalChargesProps) => {
  return (
    <View style={style.container}>
      <View style={style.inner}>
            <Text style={{...style.textheading, ...style.fontBold}}>Total Charges</Text>
            <Text style={style.textheading}>{total}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 5,
    padding:5,
    paddingVertical: 10,
    // backgroundColor: '#d6d6d6'
    borderTopWidth: 1,
    borderTopColor: '#b0b0b0',
    
  },
  fontBold:{
    fontWeight: 'bold'
  },
  cell:{
    padding: 7,
    
  },
  row:{
    backgroundColor: '#d6d6d6',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalContainer:{
    backgroundColor: '#222',
    color: '#fff',
    padding: 7,
    width: '35%',
    alignItems: "center",
    justifyContent:'center'
  },
  inner:{
    // rowGap: 10
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textheading: {
    fontSize: 8,
    fontFamily: "Karla",
    // fontWeight: "bold",
  },
  heading: { fontWeight: 700, fontSize: 12, fontFamily: "Karla" },
});

export default TotalCharges;
