"use client";

import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { docStyles } from "../../styles";
import SignatureComponent from "../SignatureComponent";

type PointsProps = {};

const Points = ({}: PointsProps) => {
  return (
    <View style={style.container}>
      <View style={style.inner}>
            <Text style={style.textheading}>Points</Text>
            <Text style={style.textheading}>250</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 0
    // backgroundColor: '#d6d6d6'
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
    fontSize: 9,
    fontFamily: "Karla",
    // fontWeight: "bold",
  },
  heading: { fontWeight: 700, fontSize: 12, fontFamily: "Karla" },
});

export default Points;
