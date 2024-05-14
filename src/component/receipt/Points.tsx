import React from "react";
import { Text, View, StyleSheet, Font } from "@dna/react-pdf";
import { docStyles } from "../../styles";
import SignatureComponent from "../common/SignatureComponent";

type PointsProps = {
    points?: string
};

const Points = ({points='0'}: PointsProps) => {
  return (
    <View style={style.container}>
      <View style={style.inner}>
            <Text style={style.textheading}>Points</Text>
            <Text style={style.textheading}>{points}</Text>
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
