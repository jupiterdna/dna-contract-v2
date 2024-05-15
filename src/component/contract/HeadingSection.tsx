/* eslint-disable jsx-a11y/alt-text */
import { Image, Rect, StyleSheet, Svg, Text, View } from "@dna/react-pdf";
import React from "react";
import { dataType } from "./Coverage";

type AcceptDeclineBoxType = {
  text?: string;
  children?: React.ReactNode
};

const HeadingSection = ({ text, children }: AcceptDeclineBoxType) => {
  return (
    <View>
      <View style={{width:'100%', marginBottom: 0}}>
        <Svg viewBox="0 0 300 11">
          
          <Rect height="11" width={300} y={0} x={0} fill="#000" />
          <Text
            x={3}
            y={7}
            fill="#fff"
            style={{
              fontFamily: "Karla",
              fontSize: 5,
              fontWeight: "bold",
            }}
          >
            {text?.toUpperCase()}
          </Text>
        </Svg>
      </View>
      <View style={styles.content}>
          {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingVertical: 5,
    borderBottom: "1px solid black",
    marginBottom: 10,
  },
  content:{
    paddingVertical: 10,
    lineHeight: 1.3
  },

  signatureBox: {
    border: "1px solid black",
    height: 40,
    width: 40,
  },

  contentCatainer: {
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
  },
  boxcontainer: {
    columnGap: 6,
    width: "18%",
    minWidth: 100,
    height: 50,
  },
  boxLabel: {
    fontSize: 8,
    fontFamily: "Karla",
    fontWeight: "bold",
  },
  box: {
    alignItems: "center",
    rowGap: 5,
    backgroundColor: "red",
  },
  headingTxt: {
    fontSize: 9,
    fontFamily: "Karla",
    textTransform: "uppercase",
    lineHeight: 1.7,
    fontWeight: "bold",
  },
  text: {
    fontSize: 9,
    fontFamily: "Karla",
    lineHeight: 1.7,
    marginBottom: 10,
    textAlign: "justify",
  },
  contentText: {
    fontSize: 9,
    fontFamily: "Karla",
    lineHeight: 1.7,
    marginBottom: 10,
    textAlign: "justify",
  },
});

export default HeadingSection;
