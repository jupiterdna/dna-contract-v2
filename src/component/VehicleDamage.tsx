"use client";

import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { docStyles } from "../styles";
import SignatureComponent from "./SignatureComponent";

type itemType = {
  img?: any;
  label?: string;
  value?: string;
};

type HeaderProps = {
  heading: itemType[];
};

const VehicleDamage = ({ items }: HeaderProps) => {
  return (
    <View>
      <View style={styles.mainContainer}>
        {items.map((item, index) => {
          return (
            <View key={index} style={styles.row}>
              <View style={styles.content}>
                <Image
                  src={item.img}
                  style={{ width: 10, height: 10 }}
                  cache={false}
                />
                <Text style={styles.text}>{item.label}</Text>
              </View>
              <Text style={styles.text}>{item.value}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.signatureContainer}>
        <Text style={styles.labelText}>Condition Agreed to:</Text>
        <SignatureComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    columnGap: 10,
  },
  content: {
    flexDirection: "row",
    columnGap: 3,
  },
  row: {
    flexDirection: "row",
    columnGap: 3,
    justifyContent: "space-between",
    width: "45%",
    marginBottom: 5,
    paddingHorizontal: 3,
    paddingBottom: 3,
    borderBottom: "1px solid black",
  },
  text: {
    fontSize: 8,
    fontFamily: "Karla",
  },
  labelText: {
    fontSize: 9,
    fontFamily: "Karla",
  },
  signatureContainer: {
    marginTop: 20,
    rowGap: 5
  },
  //   content:{
  //     paddingVertical: 10,
  //     lineHeight: 1.3
  //   },
  //   container:{
  //       border: '1px solid black',
  //       padding: 5,
  //       width: '100%',
  //       position:'relative',
  //       paddingBottom: 10
  //   },
  //   headingContainer:{
  //     backgroundColor: 'black',
  //     color: 'white',
  //    padding: 5,
  //    paddingLeft: 5,
  //     textTransform: 'uppercase'
  //   },
  // headingText:{
  //   fontSize: 10,
  //   fontWeight: 'bold'
  // },
  // text:{
  //   fontSize: 8
  // },
  // heading: {fontWeight: 300, fontSize: 12}
});

export default VehicleDamage;
