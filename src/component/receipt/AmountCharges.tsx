"use client";

import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { docStyles } from "../../styles";
import SignatureComponent from "../SignatureComponent";

type AmountChargesProps = {};

const AmountCharges = ({}: AmountChargesProps) => {
  return (
    <View style={style.container}>
      <View style={style.inner}>
        <View style={style.row}>
          <View style={style.cell}>
            <Text style={style.textheading}>Amount Charges</Text>
          </View>
          <View style={style.totalContainer}>
             <Text style={style.textheading}>$2,300</Text>
          </View>
        </View>
        <View style={{...style.row, marginTop: -2}}>
          <View style={style.cell}>
            <Text style={style.textheading}>Payment Method</Text>
          </View>
          <View style={style.totalContainer}>
             <Text style={style.textheading}>$2,300</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // padding: 7,
    // backgroundColor: '#d6d6d6'
    // backgroundColor: '#222',
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
    alignItems: "flex-end",
    justifyContent:'center'
  },
  inner:{
    // rowGap: 10
  },
  textheading: {
    fontSize: 8,
    fontFamily: "Karla",
    // fontWeight: "bold",
  },
  text: {
    fontSize: 9,
    fontFamily: "Karla",
    // lineHeight: 1.7,
    // marginBottom: 10,
  },
  noticeText: {
    fontSize: 9,
    fontWeight: "bold",
    lineHeight: 1.7,
    fontFamily: "Karla",
    textAlign: "justify",
    marginBottom: 8,
  },
  heading: { fontWeight: 700, fontSize: 12, fontFamily: "Karla" },
  labelText: {
    fontSize: 9,
    fontFamily: "Karla",
  },
  signatureContainer: {
    marginTop: 5,
    rowGap: 5,
    marginBottom: 15,
  },
});

export default AmountCharges;
